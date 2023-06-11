import api from '@/services/api'

export const signUp = async (email: string, password: string, nickname: string) =>
  await api.post('/api/signup', {
    email,
    password,
    nickname,
  })

export const sendCode = async (email: string) =>
  await api.post('/mail/sendCode', {
    email,
  })

export const verifyCode = async (email: string, code: string) =>
  await api.post('/mail/verifyCode', {
    email,
    code,
  })

export const signIn = async (email: string, password: string) =>
  await api.post('/api/login', {
    email,
    password,
  })
