import { useState, useEffect } from 'react'

import { type AxiosError } from 'axios'
import { toast } from 'react-toastify'

import { regex } from '@/constants/regex'
import { checkDuplicateEmail } from '@/lib/apis/auth'
import { isServerErrorWithMessage } from '@/lib/error'
import { type ServerError } from '@/types/api'

export const useEmailValidation = (email: string) => {
  const [isEmailValidating, setIsEmailValidating] = useState(false)
  const [isDuplicated, setIsDuplicated] = useState(false)
  const [error, setError] = useState<AxiosError<ServerError, any> | null>(null)

  useEffect(() => {
    const validateEmail = async () => {
      try {
        setIsEmailValidating(true)
        await checkDuplicateEmail(email)
        setIsDuplicated(false)
      } catch (error) {
        if (isServerErrorWithMessage(error)) {
          setError(error)
          setIsDuplicated(true)
          return
        }

        toast.error('서버에 문제가 생겼어요.')
      } finally {
        setIsEmailValidating(false)
      }
    }

    if (email && regex.email.test(email)) {
      void validateEmail()
    }
  }, [email])

  return { isEmailValidating, isDuplicated, error }
}
