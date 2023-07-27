import { useEffect } from 'react'

import type { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { toast } from 'react-toastify'

import { axiosInstance } from '@/lib/apis'
import { isServerErrorWithMessage } from '@/lib/error'
import type { RegenerateAccessTokenByRefreshTokenResponse, ServerError } from '@/types/api'

export const useAxiosInterceptor = () => {
  const requestHandler = (config: InternalAxiosRequestConfig) => {
    return config
  }

  const requestErrorHandler = (error: AxiosError) => {
    return Promise.reject(error)
  }

  let isRefreshing = false
  let refreshSubscribers: Array<(token: string) => void> = []

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
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`
            refreshSubscribers.forEach((subscriber) => subscriber(newAccessToken))
            refreshSubscribers = []
            resolve(axiosInstance(originalRequest))
          })
          .catch((_error: AxiosError) => {
            return Promise.reject(new Error('Refresh token is expired'))
          })
      })
        .catch((_error: AxiosError<ServerError>) => {
          return Promise.reject(_error)
        })
        .finally(() => {
          isRefreshing = false
        })
    }

    if (isServerErrorWithMessage(error)) {
      toast.error(error.response?.data.responseMessage ?? '서버에 문제가 생겼어요.')
    }

    return Promise.reject(error)
  }

  const requestInterceptor = axiosInstance.interceptors.request.use(requestHandler, requestErrorHandler)
  const responseInterceptor = axiosInstance.interceptors.response.use(responseHandler, responseErrorHandler)

  // axiosInstance.defaults.headers.Cookie = getAccessTokenFromCookie()

  useEffect(() => {
    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor)
      axiosInstance.interceptors.request.eject(responseInterceptor)
    }
  }, [requestInterceptor, responseInterceptor])
}
