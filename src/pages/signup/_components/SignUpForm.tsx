import { useRouter } from 'next/navigation'

import { useEffect } from 'react'

import { useFormContext } from 'react-hook-form'
import { toast } from 'react-toastify'

import { regex } from '@/constants/regex'
import { sendCode } from '@/lib/apis/auth'
import { isServerErrorWithMessage } from '@/lib/error'
import { type FormValues } from '@/pages/signup'
import { useEmailValidation } from '@/pages/signup/_hooks/useEmailValidation'
import { type Step, STEP } from '@/pages/signup/signup.constants'

interface Props {
  setStep: React.Dispatch<React.SetStateAction<Step>>
}

const SignUpForm = ({ setStep }: Props) => {
  const { back } = useRouter()
  const {
    handleSubmit,
    register,
    getValues,
    setError,
    watch,
    formState: { errors, isValid },
  } = useFormContext<FormValues>()
  const email = watch('email')
  const { isEmailValidating, isDuplicated, error } = useEmailValidation(email)

  const onSubmit = async ({ email }: FormValues) => {
    try {
      await sendCode(email)
      setStep(STEP.EMAIL_VERIFICATION)
    } catch (error) {
      onError(error)
    }
  }

  const onError = (error: unknown) => {
    if (isServerErrorWithMessage(error)) {
      toast.error(error.response?.data.responseMessage)
      return
    }

    toast.error('서버에 문제가 생겼어요.')
  }

  useEffect(() => {
    if (error) {
      setError('email', {
        type: 'manual',
        message: error.response?.data.responseMessage,
      })
    }
  }, [error, setError])

  const isEmailValid = getValues('email') && !errors.email
  const isNicknameValid = getValues('nickname') && !errors.nickname
  const isPasswordValid = getValues('password') && !errors.password
  const isPasswordConfirmValid = getValues('passwordConfirm') && !errors.passwordConfirm

  return (
    <div className='flex flex-col p-4'>
      <i className='ri-arrow-left-line cursor-pointer text-xl' onClick={back} />
      <h1 className='mt-12 text-2xl font-bold'>이메일로 회원가입</h1>
      <form className='mt-10' onSubmit={handleSubmit(onSubmit, onError)}>
        <div className='flex flex-col gap-12'>
          <div className='flex h-24 flex-col gap-1'>
            <div className='flex flex-col gap-2 [&>div]:focus-within:border-blue-600 [&>span]:focus-within:text-blue-600'>
              <span>이메일</span>
              <div className='flex w-full items-center border-b  border-b-zinc-300'>
                <input
                  className='w-full py-2 outline-none'
                  type='email'
                  placeholder='이메일 입력'
                  {...register('email', {
                    required: {
                      value: true,
                      message: '이메일을 입력해주세요.',
                    },
                    pattern: {
                      value: regex.email,
                      message: '이메일 형식이 올바르지 않아요.',
                    },
                  })}
                />
                {isEmailValid && isEmailValidating ? (
                  <i className='ri-loader-4-line animate-spin text-xl' />
                ) : isEmailValid && !isDuplicated ? (
                  <i className='ri-check-line text-xl text-blue-600' />
                ) : null}
              </div>
            </div>
            <small className='text-red-600' role='alert'>
              {errors.email?.message}
            </small>
          </div>
          {isEmailValid && !isDuplicated && (
            <>
              <div className='flex h-24 flex-col gap-1'>
                <div className='flex flex-col gap-2 [&>div]:focus-within:border-blue-600 [&>span]:focus-within:text-blue-600'>
                  <span>닉네임</span>
                  <div className='flex w-full items-center border-b border-b-zinc-300'>
                    <input
                      className='w-full py-2 outline-none'
                      type='text'
                      placeholder='닉네임 입력'
                      {...register('nickname', {
                        required: {
                          value: true,
                          message: '닉네임을 입력해주세요.',
                        },
                        pattern: {
                          value: regex.nickname,
                          message: '한글 및 영어 대소문자, 숫자만 가능해요.',
                        },
                        minLength: {
                          value: 2,
                          message: '닉네임은 2자리 이상 입력해주세요.',
                        },
                        maxLength: {
                          value: 10,
                          message: '닉네임은 10자리 이하 입력해주세요.',
                        },
                      })}
                    />
                    {isNicknameValid && <i className='ri-check-line text-xl text-blue-600' />}
                  </div>
                </div>
                <small className='text-red-600' role='alert'>
                  {errors.nickname?.message}
                </small>
              </div>
              <div className='flex h-24 flex-col gap-1'>
                <div className='flex flex-col gap-2 [&>div]:focus-within:border-blue-600 [&>span]:focus-within:text-blue-600'>
                  <span>비밀번호</span>
                  <div className='flex w-full items-center border-b border-b-zinc-300'>
                    <input
                      className='w-full py-2 outline-none'
                      type='password'
                      placeholder='비밀번호 입력'
                      {...register('password', {
                        required: {
                          value: true,
                          message: '비밀번호를 입력해주세요.',
                        },
                        pattern: {
                          value: regex.password,
                          message: '비밀번호 형식이 올바르지 않아요.',
                        },
                      })}
                    />
                    {isPasswordValid && <i className='ri-check-line text-xl text-blue-600' />}
                  </div>
                </div>
                <small className='text-zinc-600' role='alert'>
                  영문 대소문자, 숫자, 특수문자 포함 8자리 이상을 입력해주세요.
                </small>
                <small className='text-red-600' role='alert'>
                  {errors.password?.message}
                </small>
              </div>
              <div className='flex h-24 flex-col gap-1'>
                <div className='flex flex-col gap-2 [&>div]:focus-within:border-blue-600 [&>span]:focus-within:text-blue-600'>
                  <span>비밀번호 확인</span>
                  <div className='flex w-full items-center border-b border-b-zinc-300'>
                    <input
                      className='w-full py-2 outline-none'
                      type='password'
                      placeholder='비밀번호 확인'
                      {...register('passwordConfirm', {
                        required: {
                          value: true,
                          message: '비밀번호를 입력해주세요.',
                        },
                        validate: (value) => value === getValues('password') || '비밀번호가 일치하지 않아요.',
                      })}
                    />
                    {isPasswordConfirmValid && <i className='ri-check-line text-xl text-blue-600' />}
                  </div>
                </div>
                <small className='text-red-600' role='alert'>
                  {errors.passwordConfirm?.message}
                </small>
              </div>
              <button
                className={`mt-8 w-full rounded-lg bg-blue-500 py-3 text-white ${isValid ? 'block' : 'hidden'}`}
                type='submit'
              >
                확인
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  )
}

export default SignUpForm
