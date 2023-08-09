import { useState, useEffect } from 'react'

import { type AxiosError } from 'axios'
import { toast } from 'react-toastify'

import { regex } from '@/constants/regex'
import { checkDuplicateNickname } from '@/lib/apis/auth'
import { isServerErrorWithMessage } from '@/lib/error'
import { type ServerError } from '@/types/api'

export const useNicknameValidation = (nickname: string) => {
  const [isNicknameValidating, setIsNicknameValidating] = useState(false)
  const [isDuplicated, setIsDuplicated] = useState(false)
  const [error, setError] = useState<AxiosError<ServerError, any> | null>(null)

  useEffect(() => {
    const validateEmail = async () => {
      try {
        setIsNicknameValidating(true)
        await checkDuplicateNickname({ nickname })
        setIsDuplicated(false)
      } catch (error) {
        if (isServerErrorWithMessage(error)) {
          setError(error)
          setIsDuplicated(true)
          return
        }

        toast.error('서버에 문제가 생겼어요.')
      } finally {
        setIsNicknameValidating(false)
      }
    }

    if (nickname && regex.nickname.test(nickname)) {
      validateEmail()
    }
  }, [nickname])

  return { isNicknameValidating, isDuplicated, error }
}
