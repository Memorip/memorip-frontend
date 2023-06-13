import { AxiosError } from 'axios'

interface ServerError {
  responseMessage: string
  data: boolean
  statusCode: number
}

export const isServerErrorWithMessage = (error: unknown): error is AxiosError<ServerError> => {
  return (
    error instanceof AxiosError &&
    typeof error.response?.data === 'object' &&
    'responseMessage' in error.response?.data &&
    typeof (error.response?.data as Record<string, unknown>).responseMessage === 'string'
  )
}
