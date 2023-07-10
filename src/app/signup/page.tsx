'use client'

import { useState } from 'react'

import { FormProvider, useForm } from 'react-hook-form'

import EmailVerification from '@/app/signup/components/client/email-verification'
import SignUpForm from '@/app/signup/components/client/sign-up-form'
import { STEP, type Step } from '@/app/signup/signup.constants'

export interface FormValues {
  email: string
  nickname: string
  password: string
  passwordConfirm: string
}

export default function SignUp() {
  const methods = useForm<FormValues>({
    mode: 'onChange',
  })

  const [step, setStep] = useState<Step>(STEP.SIGN_UP)

  return (
    <FormProvider {...methods}>
      {step === STEP.SIGN_UP && <SignUpForm setStep={setStep} />}
      {step === STEP.EMAIL_VERIFICATION && <EmailVerification />}
    </FormProvider>
  )
}
