export interface ServerResponse<T> {
  statusCode: number
  responseMessage: string
  data: T
}

export interface ServerError {
  responseMessage: string
  data: boolean
  statusCode: number
}

export interface RegenerateAccessTokenByRefreshTokenResponse {
  payload: {
    accessToken: string
    accessExpire: number
  }
}
