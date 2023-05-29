'use client'

import ROUTE from '@/constants/route'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

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

  const onSubmit = () => {
    // TODO: API CALL
    toast.success('로그인 성공!')
    push(ROUTE.MAIN)
  }

  return (
    <div className='flex flex-col p-4'>
      <i className='ri-arrow-left-line cursor-pointer text-xl' onClick={back} />
      <h1 className='mt-12 font-bold text-2xl'>이메일로 로그인</h1>
      <form className='mt-10' onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-12'>
          <label className='flex flex-col gap-2 [&>span]:focus-within:text-blue-600 [&>input]:focus-within:border-blue-600'>
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
          <label className='flex flex-col gap-2 [&>span]:focus-within:text-blue-600 [&>input]:focus-within:border-blue-600'>
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
          className={`w-full bg-blue-500 py-3 rounded-lg text-white mt-5 ${
            !isValid ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          type='submit'
        >
          로그인
        </button>
        <button className='w-full text-center mt-4 text-zinc-700 underline cursor-pointer' type='button'>
          비밀번호를 잊으셨나요?
        </button>
      </form>
    </div>
  )
}

export default SignIn
