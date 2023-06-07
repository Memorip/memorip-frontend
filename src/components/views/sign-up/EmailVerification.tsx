'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import ROUTE from '@/constants/route'

const EmailVerification = () => {
  const { push } = useRouter()
  const [codes, setCodes] = useState<string[]>(['', '', '', ''])
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target
    const newCodes = [...codes]
    newCodes[index] = value
    setCodes(newCodes)

    if (value.length === 1 && index < codes.length - 1) {
      const nextInput = inputRefs.current[index + 1]
      nextInput?.focus()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && codes[index] === '') {
      if (index > 0) {
        const prevInput = inputRefs.current[index - 1]
        prevInput?.focus()
      }
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    toast.success('이메일 인증이 완료되었어요.')
    push(ROUTE.SIGN_IN)
  }

  return (
    <form className='flex flex-col justify-center items-center h-screen p-4' onSubmit={handleSubmit}>
      <Image src='/images/email.png' width={100} height={100} alt='email verification' />
      <h1 className='text-xl font-bold mt-4 mb-2'>이메일을 확인해주세요.</h1>
      <span className='text-xs text-zinc-500 mb-8'>hello123@gmail.com으로 인증 번호를 보냈어요.</span>
      <div className='flex gap-2 mb-4'>
        {codes.map((code, index) => (
          <input
            className='w-16 h-16 bg-zinc-100 rounded-md flex justify-center items-center text-center outline-none'
            type='text'
            maxLength={1}
            value={code}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(el) => (inputRefs.current[index] = el)}
            key={index}
          />
        ))}
      </div>
      <div className='flex gap-2 items-center mb-8'>
        <span className='text-xs text-zinc-500'>인증 번호가 도착하지 않으셨나요?</span>
        <button className='text-xs text-zinc-500 underline underline-offset-1'>인증번호 재전송</button>
      </div>
      <button className='w-[280px] bg-teal-500 py-3 rounded-lg text-white'>인증하기</button>
    </form>
  )
}

export default EmailVerification
