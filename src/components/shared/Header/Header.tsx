import Link from 'next/link'

import { useAtom } from 'jotai'

import ROUTE from '@/constants/route'
import { snbAtom } from '@/stores/snb'

function HeaderRoot({ children }: { children: React.ReactNode }) {
  return (
    <header className='sticky top-0 z-50 flex justify-end gap-4 bg-white px-3 py-4 shadow-md shadow-zinc-100'>
      {children}
    </header>
  )
}

function HamburgerButton() {
  const [, setIsOpenSnb] = useAtom(snbAtom)

  const openSnb = () => {
    setIsOpenSnb(true)
  }

  return (
    <button onClick={openSnb}>
      <i className='ri-menu-line text-xl' />
    </button>
  )
}

function MapButton() {
  return (
    <Link href={ROUTE.MAP}>
      <i className='ri-map-2-line text-xl' />
    </Link>
  )
}

const Header = Object.assign(HeaderRoot, {
  HamburgerButton,
  MapButton,
})

export default Header
export { HeaderRoot, HamburgerButton, MapButton }
