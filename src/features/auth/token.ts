const ACCESS_TOKEN = 'ACCESS_TOKEN'

export const getAccessTokenFromLocalStorage = () =>
  typeof window !== 'undefined' ? localStorage.getItem(ACCESS_TOKEN) : null

export const setAccessTokenToLocalStorage = (accessToken: string) => localStorage.setItem(ACCESS_TOKEN, accessToken)

export const removeAccessTokenFromLocalStorage = () => localStorage.removeItem(ACCESS_TOKEN)
