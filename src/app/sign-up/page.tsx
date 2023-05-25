'use client'

import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify'

const SignUp = () => {
  const { back } = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    toast.success('회원가입 성공!')
  }

  return (
    <>
      <div className='flex flex-col p-4'>
        <i className='ri-arrow-left-line cursor-pointer' onClick={back} />
        <h1 className='mt-12 font-bold text-2xl'>이메일로 회원가입</h1>
        <form className='mt-10' onSubmit={handleSubmit}>
          <div className='flex flex-col gap-12'>
            <label className='flex flex-col gap-2'>
              <span>이메일</span>
              <input className='border-b border-b-zinc-300 py-2 outline-none' type='email' placeholder='이메일' />
            </label>
            <label className='flex flex-col gap-2'>
              <span>닉네임</span>
              <input className='border-b border-b-zinc-300 py-2 outline-none' type='text' placeholder='닉네임' />
            </label>
            <label className='flex flex-col gap-2'>
              <span>비밀번호</span>
              <input className='border-b border-b-zinc-300 py-2 outline-none' type='password' placeholder='비밀번호' />
            </label>
            <label className='flex flex-col gap-2'>
              <span>비밀번호 확인</span>
              <input
                className='border-b border-b-zinc-300 py-2 outline-none'
                type='password'
                placeholder='비밀번호 확인'
              />
            </label>
          </div>
          <button className='w-full bg-blue-500 py-3 rounded-lg text-white mt-5' type='submit'>
            확인
          </button>
        </form>
      </div>
    </>
  )
}

export default SignUp
