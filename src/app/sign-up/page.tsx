'use client'

import { regex } from '@/constants/regex'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

interface FormValues {
  email: string
  nickname: string
  password: string
  passwordConfirm: string
}

const SignUp = () => {
  const { back } = useRouter()
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: 'onChange',
  })

  const onSubmit = ({ email, nickname, password, passwordConfirm }: FormValues) => {
    toast.success('회원가입 성공!')
    // TODO: API CALL
    console.log(email, nickname, password, passwordConfirm)
  }

  const onError = (error: any) => {
    // TODO: 에러 처리
    toast.error('회원가입 실패!')
    console.log(error)
  }

  const isEmailValid = getValues('email') && !errors.email

  return (
    <>
      <div className='flex flex-col p-4'>
        <i className='ri-arrow-left-line cursor-pointer text-xl' onClick={back} />
        <h1 className='mt-12 font-bold text-2xl'>이메일로 회원가입</h1>
        <form className='mt-10' onSubmit={handleSubmit(onSubmit, onError)}>
          <div className='flex flex-col gap-12'>
            <div className='flex flex-col gap-1 h-24'>
              <label className='flex flex-col gap-2'>
                <span className='focus-within:text-blue-600'>이메일</span>
                <div className='w-full flex items-center border-b border-b-zinc-300 focus-within:border-blue-600'>
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
                  {/* TODO: 이메일 중복 검사 API 처리 및 로딩 스피너 추가 */}
                  {getValues('email') && !errors.email && <i className='ri-check-line text-xl text-blue-600' />}
                </div>
              </label>
              <small className='text-red-600' role='alert'>
                {errors.email?.message}
              </small>
            </div>
            {isEmailValid && (
              <>
                <div className='flex flex-col gap-1 h-24'>
                  <div className='flex flex-col gap-2'>
                    <span>닉네임</span>
                    <div className='w-full flex items-center border-b border-b-zinc-300'>
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
                      {getValues('nickname') && !errors.nickname && (
                        <i className='ri-check-line text-xl text-blue-600' />
                      )}
                    </div>
                  </div>
                  <small className='text-red-600' role='alert'>
                    {errors.nickname?.message}
                  </small>
                </div>
                <div className='flex flex-col gap-1 h-24'>
                  <div className='flex flex-col gap-2'>
                    <span>비밀번호</span>
                    <div className='w-full flex items-center border-b border-b-zinc-300'>
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
                      {getValues('password') && !errors.password && (
                        <i className='ri-check-line text-xl text-blue-600' />
                      )}
                    </div>
                  </div>
                  <small className='text-zinc-600' role='alert'>
                    영문 대소문자, 숫자, 특수문자 포함 8자리 이상을 입력해주세요.
                  </small>
                  <small className='text-red-600' role='alert'>
                    {errors.password?.message}
                  </small>
                </div>
                <div className='flex flex-col gap-1 h-24'>
                  <div className='flex flex-col gap-2'>
                    <span>비밀번호 확인</span>
                    <div className='w-full flex items-center border-b border-b-zinc-300'>
                      <input
                        className='w-full py-2 outline-none'
                        type='password'
                        placeholder='비밀번호 확인'
                        {...register('passwordConfirm', {
                          required: {
                            value: true,
                            message: '비밀번호를 입력해주세요.',
                          },
                          validate: (value) => value === getValues('password') || '비밀번호가 일치하지 않습니다.',
                        })}
                      />
                      {getValues('passwordConfirm') && !errors.passwordConfirm && (
                        <i className='ri-check-line text-xl text-blue-600' />
                      )}
                    </div>
                  </div>
                  <small className='text-red-600' role='alert'>
                    {errors.passwordConfirm?.message}
                  </small>
                </div>
              </>
            )}
          </div>
          {isValid && (
            <button className='w-full bg-blue-500 py-3 rounded-lg text-white mt-8' type='submit'>
              확인
            </button>
          )}
        </form>
      </div>
    </>
  )
}

export default SignUp
