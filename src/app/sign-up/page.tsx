'use client'

import { useState } from 'react'

import EmailVerification from '@/app/sign-up/components/client/EmailVerification'
import SignUpInput from '@/app/sign-up/components/client/SignUpInput'
import { STEP } from '@/app/sign-up/sign-up.constants'

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
