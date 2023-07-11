import { useEffect } from 'react'

import ReactDOM from 'react-dom'

interface ChildrenProps {
  children: React.ReactNode
}

export default function Modal({ children }: ChildrenProps) {
  const element = typeof window !== 'undefined' && document.querySelector('#modal-root')

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'unset'
    }
  })

  return element && children ? ReactDOM.createPortal(children, element) : null
}

function Background({ onClose }: { onClose: () => void }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 9,
      }}
    />
  )
}

function Layout({ children }: ChildrenProps) {
  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 10,
      }}
    >
      {children}
    </div>
  )
}

Modal.Background = Background
Modal.Layout = Layout
