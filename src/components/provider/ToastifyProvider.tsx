import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

interface Props {
  children: React.ReactNode
}

export default function ToastifyProvider({ children }: Props) {
  return (
    <>
      <ToastContainer position='top-right' />
      {children}
    </>
  )
}
