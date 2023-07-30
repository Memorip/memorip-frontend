import api from '@/lib/apis'
import {
  type VerifyCodeParams,
  type SendCodeParams,
  type SingUpParams,
  type CheckDuplicateEmailParams,
  type CheckDuplicateEmail,
  CheckDuplicateEmailSchema,
  type SignInParams,
  type SignIn,
  SignInSchema,
  type UserInfo,
  UserInfoSchema,
} from '@/types/auth'

export const signUp = ({ email, password, nickname }: SingUpParams) => {
  return api.post('/api/signup', {
    email,
    password,
    nickname,
  })
}

export const sendCode = ({ email }: SendCodeParams) => {
  return api.get(`/api/mail/sendCode?rcv=${email}`)
}

export const verifyCode = ({ email, code }: VerifyCodeParams) =>
  api.get(`/api/mail/verifyCode?rcv=${email}&code=${code}`)

export const checkDuplicateEmail = async ({ email }: CheckDuplicateEmailParams) => {
  const response = await api.get<CheckDuplicateEmail>(`/api/checkEmail?email=${email}`)
  return CheckDuplicateEmailSchema.parse(response.data)
}

export const signIn = async ({ email, password }: SignInParams) => {
  const response = await api.post<SignIn>('/api/login', {
    email,
    password,
  })
  return SignInSchema.parse(response.data)
}

export const getUserInfo = async () => {
  const response = await api.get<UserInfo>('/api/user')
  return UserInfoSchema.parse(response.data)
}
