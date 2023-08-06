import Image from 'next/image'
import Link from 'next/link'

import clsx from 'clsx'
import { useAtom } from 'jotai'

import ROUTE from '@/constants/route'
import { snbAtom } from '@/stores/snb'

const Header = ({ children, className, ...props }: { children: React.ReactNode; className?: string }) => {
  return (
    <header
      className={clsx(
        'sticky top-0 z-10 flex justify-between gap-4 bg-white px-3 py-4 shadow-md shadow-zinc-100',
        !!className && className
      )}
      {...props}
    >
      {children}
    </header>
  )
}

const Logo = () => {
  return (
    <Link href={ROUTE.MAIN}>
      <Image src='/images/logo.png' width={32} height={32} alt='logo' />
    </Link>
  )
}

const LikeButton = ({ onClick, isLiked, ...props }: { onClick: () => void; isLiked: boolean }) => {
  return (
    <button onClick={onClick} {...props}>
      {isLiked ? <i className='ri-heart-fill text-xl text-zinc-500' /> : <i className='ri-heart-line text-xl' />}
    </button>
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
    <Link href={ROUTE.SCHEDULE_INDEX}>
      <i className='ri-flight-takeoff-line text-xl' />
    </Link>
  )
}

Header.Logo = Logo
Header.LikeButton = LikeButton
Header.HamburgerButton = HamburgerButton
Header.MapButton = MapButton
Header.AddPlanButton = AddPlanButton

export default Header
