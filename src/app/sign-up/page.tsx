'use client'

import { useState } from 'react'

import EmailVerification from '@/app/sign-up/components/client/EmailVerification'
import SignUpForm from '@/app/sign-up/components/client/SignUpForm'
import { STEP } from '@/app/sign-up/sign-up.constants'
import type { Step } from '@/app/sign-up/sign-up.constants'

const SignUp = () => {
  const [step, setStep] = useState<Step>(STEP.SIGN_UP)

  if (step === STEP.SIGN_UP) {
    return <SignUpForm setStep={setStep} />
  }

  if (step === STEP.EMAIL_VERIFICATION) {
    return <EmailVerification />
  }

  throw new Error('Step is not valid.')
}

export default SignUp
