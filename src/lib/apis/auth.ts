import api from '@/lib/apis'

export const signUp = (email: string, password: string, nickname: string) =>
  api.post('/api/signup', {
    email,
    password,
    nickname,
  })

export const sendCode = (email: string) => api.get(`/api/mail/sendCode?rcv=${email}`)

export const verifyCode = (email: string, code: string) => api.get(`/api/mail/verifyCode?rcv=${email}&code=${code}`)

export const checkDuplicateEmail = (email: string) => api.get<boolean>(`/api/checkEmail?email=${email}`)

export const signIn = (email: string, password: string) =>
  api.post<{ token: string }>('/api/login', {
    email,
    password,
  })
