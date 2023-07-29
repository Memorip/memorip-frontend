import Link from 'next/link'

import { useAtom } from 'jotai'

import ROUTE from '@/constants/route'
import { snbAtom } from '@/stores/snb'

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className='sticky top-0 z-10 flex justify-end gap-4 bg-white px-3 py-4 shadow-md shadow-zinc-100'>
      {children}
    </header>
  )
}

const HamburgerButton = () => {
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

const MapButton = () => {
  return (
    <Link href={ROUTE.MAP}>
      <i className='ri-map-2-line text-xl' />
    </Link>
  )
}

const AddPlanButton = () => {
  return (
    <Link href={ROUTE.SCHEDULE_PLAN}>
      <i className='ri-flight-takeoff-line text-xl' />
    </Link>
  )
}

Header.HamburgerButton = HamburgerButton
Header.MapButton = MapButton
Header.AddPlanButton = AddPlanButton

export default Header
