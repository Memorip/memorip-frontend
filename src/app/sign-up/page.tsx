'use client'

import { useState } from 'react'

import EmailVerification from '@/components/views/sign-up/EmailVerification'
import SignUpInput from '@/components/views/sign-up/SignUpInput'

import { STEP } from './page.const'

const SignUp = () => {
  const [step, setStep] = useState(STEP.SIGN_UP)

  if (step === STEP.SIGN_UP) {
    return <SignUpInput setStep={setStep} />
  }

  if (step === STEP.EMAIL_VERIFICATION) {
    return <EmailVerification />
  }

  return null
}

export default SignUp
