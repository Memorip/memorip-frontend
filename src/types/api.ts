export interface ServerResponse<T> {
  statusCode: number
  responseMessage: string
  data: T
}

export interface ServerError {
  statusCode: number
  responseMessage: string
  data: boolean
}

export interface RegenerateAccessTokenByRefreshTokenResponse {
  payload: {
    accessToken: string
    accessExpire: number
  }
}
