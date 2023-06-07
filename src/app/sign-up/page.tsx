'use client'

import { useState } from 'react'
import { STEP } from './page.const'
import EmailVerification from '@/components/views/sign-up/EmailVerification'
import SignUpInput from '@/components/views/sign-up/SignUpInput'

const SignUp = () => {
  const [step, setStep] = useState(STEP.SIGN_UP)

  if (step === STEP.SIGN_UP) {
    return <SignUpInput setStep={setStep} />
  }

  if (step === STEP.EMAIL_VERIFICATION) {
    return <EmailVerification />
  }
}

export default SignUp
