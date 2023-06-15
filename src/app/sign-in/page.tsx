'use client'

import { useRouter } from 'next/navigation'

import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import ROUTE from '@/constants/route'
import { signIn } from '@/services/api/auth'

interface FormValues {
  email: string
  password: string
}

const SignIn = () => {
  const {
    handleSubmit,
    register,
    formState: { isValid },
  } = useForm<FormValues>({
    mode: 'onChange',
  })
  const { back, push } = useRouter()

  const onSubmit = async ({ email, password }: FormValues) => {
    try {
      await signIn(email, password)
      toast.success('로그인에 성공했어요.')
      push(ROUTE.MAIN)
    } catch (error) {
      toast.error('로그인에 실패했어요.')
    }
  }

  return (
    <div className='flex flex-col p-4'>
      <i className='ri-arrow-left-line cursor-pointer text-xl' onClick={back} />
      <h1 className='mt-12 text-2xl font-bold'>이메일로 로그인</h1>
      <form className='mt-10' onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-12'>
          <label className='flex flex-col gap-2 [&>input]:focus-within:border-blue-600 [&>span]:focus-within:text-blue-600'>
            <span>이메일</span>
            <input
              className='border-b border-b-zinc-300 py-2 outline-none'
              type='email'
              placeholder='memorip@gmail.com'
              {...register('email', {
                required: {
                  value: true,
                  message: '이메일을 입력해주세요.',
                },
              })}
            />
          </label>
          <label className='flex flex-col gap-2 [&>input]:focus-within:border-blue-600 [&>span]:focus-within:text-blue-600'>
            <span>비밀번호</span>
            <input
              className='border-b border-b-zinc-300 py-2 outline-none'
              type='password'
              placeholder='영문, 숫자, 특수문자'
              {...register('password', {
                required: {
                  value: true,
                  message: '비밀번호를 입력해주세요.',
                },
              })}
            />
          </label>
        </div>
        <button
          className={`mt-5 w-full rounded-lg bg-blue-500 py-3 text-white ${
            !isValid ? 'cursor-not-allowed opacity-50' : ''
          }`}
          type='submit'
        >
          로그인
        </button>
        <button className='mt-4 w-full cursor-pointer text-center text-zinc-700 underline' type='button'>
          비밀번호를 잊으셨나요?
        </button>
      </form>
    </div>
  )
}

export default SignIn
