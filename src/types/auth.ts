import { z } from 'zod'

export interface SingUpParams {
  email: string
  password: string
  nickname: string
}

export interface SendCodeParams {
  email: string
}

export interface VerifyCodeParams {
  email: string
  code: string
}

export interface CheckDuplicateEmailParams {
  email: string
}

export const CheckDuplicateEmailSchema = z.boolean()

export type CheckDuplicateEmail = z.infer<typeof CheckDuplicateEmailSchema>

export interface SignInParams {
  email: string
  password: string
}

export const SignInSchema = z.object({
  token: z.string(),
})

export type SignIn = z.infer<typeof SignInSchema>
