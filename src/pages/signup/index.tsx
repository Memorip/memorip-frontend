import { useState } from 'react'

import { FormProvider, useForm } from 'react-hook-form'

import EmailVerification from '@/pages/signup/components/client/EmailVerification'
import SignUpForm from '@/pages/signup/components/client/SignUpForm'
import { STEP, type Step } from '@/pages/signup/signup.constants'

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