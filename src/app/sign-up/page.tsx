'use client'

import { useState } from 'react'

import { FormProvider, useForm } from 'react-hook-form'

import EmailVerification from '@/app/sign-up/components/client/EmailVerification'
import SignUpForm from '@/app/sign-up/components/client/SignUpForm'
import { STEP } from '@/app/sign-up/sign-up.constants'
import type { Step } from '@/app/sign-up/sign-up.constants'

export interface FormValues {
  email: string
  nickname: string
  password: string
  passwordConfirm: string
}

const SignUp = () => {
  const methods = useForm<FormValues>({
    mode: 'onChange',
  })
  const [step, setStep] = useState<Step>(STEP.SIGN_UP)

  if (step === STEP.SIGN_UP) {
    return (
      <FormProvider {...methods}>
        <SignUpForm setStep={setStep} />
      </FormProvider>
    )
  }

  if (step === STEP.EMAIL_VERIFICATION) {
    return (
      <FormProvider {...methods}>
        <EmailVerification />
      </FormProvider>
    )
  }

  throw new Error('Step is not valid.')
}

export default SignUp
