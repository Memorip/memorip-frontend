import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { useState, useRef } from 'react'

import { useFormContext } from 'react-hook-form'
import { toast } from 'react-toastify'

import ROUTE from '@/constants/route'
import { signUp, verifyCode } from '@/lib/apis/auth'
import { type FormValues } from '@/pages/signup'

const EmailVerification = () => {
  const { push } = useRouter()
  const { getValues } = useFormContext<FormValues>()
  const [codes, setCodes] = useState<string[]>(['', '', '', ''])
  const inputRefs = useRef<Array<HTMLInputElement | null>>([])

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await verifyCode(getValues('email'), codes.join(''))
      await signUp(getValues('email'), getValues('password'), getValues('nickname'))
      toast.success('회원가입이 완료되었어요.')
      push(ROUTE.SIGN_IN)
    } catch (error) {
      toast.error('이메일 인증에 실패했어요.')
    }
  }

  return (
    <form className='flex h-screen flex-col items-center justify-center p-4' onSubmit={handleSubmit}>
      <Image src='/images/email.png' width={100} height={100} alt='email verification' />
      <h1 className='mb-2 mt-4 text-xl font-bold'>이메일을 확인해주세요.</h1>
      <span className='mb-8 text-xs text-zinc-500'>{getValues('email')}으로 인증 번호를 보냈어요.</span>
      <div className='mb-4 flex gap-2'>
        {codes.map((code, index) => (
          <input
            className='flex h-16 w-16 items-center justify-center rounded-md bg-zinc-100 text-center outline-none'
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
      <div className='mb-8 flex items-center gap-2'>
        <span className='text-xs text-zinc-500'>인증 번호가 도착하지 않으셨나요?</span>
        <button className='text-xs text-zinc-500 underline underline-offset-1'>인증번호 재전송</button>
      </div>
      <button className='w-[280px] rounded-lg bg-teal-500 py-3 text-white'>인증하기</button>
    </form>
  )
}

export default EmailVerification
