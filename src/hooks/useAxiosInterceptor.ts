import { useEffect } from 'react'

import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

import { getAccessTokenFromLocalStorage, setAccessTokenToLocalStorage } from '@/features/auth/token'
import { axiosInstance } from '@/services/api'
import { RegenerateAccessTokenByRefreshTokenResponse, ServerError } from '@/types/api'

export const useAxiosInterceptor = () => {
  const requestHandler = (config: InternalAxiosRequestConfig) => {
    const accessToken = getAccessTokenFromLocalStorage()

    if (accessToken) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config
  }

  const requestErrorHandler = (error: AxiosError) => {
    return Promise.reject(error)
  }

  let isRefreshing = false
  let refreshSubscribers: ((token: string) => void)[] = []

  const responseHandler = (response: AxiosResponse) => {
    return response
  }

  const responseErrorHandler = (error: AxiosError<ServerError>) => {
    const { config, status } = error
    const originalRequest = config

    if (!originalRequest) {
      return Promise.reject(error)
    }

    if (status === 401) {
      if (isRefreshing) {
        return new Promise((resolve) => {
          refreshSubscribers.push((_accessToken) => {
            originalRequest.headers.Authorization = `Bearer ${_accessToken}`
            resolve(axiosInstance(originalRequest))
          })
        })
      }

      isRefreshing = true

      return new Promise((resolve) => {
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
          .catch((_error: AxiosError) => {
            return Promise.reject()
          })
      })
        .catch((_error: AxiosError<ServerError>) => {
          return Promise.reject(_error)
        })
        .finally(() => {
          isRefreshing = false
        })
    }

    return Promise.reject(error)
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
