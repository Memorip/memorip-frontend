import api from '@/services/api'

export const signUp = (email: string, password: string, nickname: string) =>
  api.post('/api/signup', {
    email,
    password,
    nickname,
  })

export const sendCode = (email: string) =>
  api.post('/mail/sendCode', {
    email,
  })

export const verifyCode = (email: string, code: string) =>
  api.post('/mail/verifyCode', {
    email,
    code,
  })

export const checkDuplicateEmail = (email: string) => api.get<boolean>(`/api/checkEmail?email=${email}`)

export const signIn = (email: string, password: string) =>
  api.post('/api/login', {
    email,
    password,
  })
