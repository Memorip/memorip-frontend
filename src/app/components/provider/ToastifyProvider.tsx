'use client'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface Props {
  children: React.ReactNode
}

const ToastifyProvider = ({ children }: Props) => {
  return (
    <>
      <ToastContainer position='top-right' />
      {children}
    </>
  )
}

export default ToastifyProvider
