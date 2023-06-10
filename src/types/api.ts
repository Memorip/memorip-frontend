export interface ServerResponse<T> {
  status: number
  message: string
  success: boolean
  payload: T
}

export interface ServerError {
  success: boolean
  status: number
  message: string
}

export interface RegenerateAccessTokenByRefreshTokenResponse {
  payload: {
    accessToken: string
    accessExpire: number
  }
}
