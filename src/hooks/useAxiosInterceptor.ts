'use client'

import { useEffect } from 'react'

import type { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

import { getAccessTokenFromLocalStorage, setAccessTokenToLocalStorage } from '@/features/auth/token'
import { axiosInstance } from '@/services/api'
import type { RegenerateAccessTokenByRefreshTokenResponse, ServerError } from '@/types/api'

export const useAxiosInterceptor = () => {
  const requestHandler = (config: InternalAxiosRequestConfig) => {
    const accessToken = getAccessTokenFromLocalStorage()

    if (accessToken) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config
  }

  const requestErrorHandler = async (error: AxiosError) => {
    return await Promise.reject(error)
  }

  let isRefreshing = false
  let refreshSubscribers: Array<(token: string) => void> = []

  const responseHandler = (response: AxiosResponse) => {
    return response
  }

  const responseErrorHandler = async (error: AxiosError<ServerError>) => {
    const { config, status } = error
    const originalRequest = config

    if (!originalRequest) {
      return await Promise.reject(error)
    }

    if (status === 401) {
      if (isRefreshing) {
        return await new Promise((resolve) => {
          refreshSubscribers.push((_accessToken) => {
            originalRequest.headers.Authorization = `Bearer ${_accessToken}`
            resolve(axiosInstance(originalRequest))
          })
        })
      }

      isRefreshing = true

      return await new Promise((resolve) => {
        axiosInstance
          .post<RegenerateAccessTokenByRefreshTokenResponse>(`/user/refresh`)
          .then(({ data }) => {
            const { accessToken: newAccessToken } = data.payload
            setAccessTokenToLocalStorage(newAccessToken)
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`
            refreshSubscribers.forEach((subscriber) => subscriber(newAccessToken))
            refreshSubscribers = []
            resolve(axiosInstance(originalRequest))
          })
          .catch(async (_error: AxiosError) => {
            return await Promise.reject(new Error('Refresh token is expired'))
          })
      })
        .catch(async (_error: AxiosError<ServerError>) => {
          return await Promise.reject(_error)
        })
        .finally(() => {
          isRefreshing = false
        })
    }

    return await Promise.reject(error)
  }

  const requestInterceptor = axiosInstance.interceptors.request.use(requestHandler, requestErrorHandler)
  const responseInterceptor = axiosInstance.interceptors.response.use(responseHandler, responseErrorHandler)

  useEffect(() => {
    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor)
      axiosInstance.interceptors.request.eject(responseInterceptor)
    }
  }, [requestInterceptor, responseInterceptor])
}
