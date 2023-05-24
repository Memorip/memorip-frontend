import ROUTE from '@/constants/route'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex flex-col justify-between items-center h-screen py-12 px-8'>
      <div>
        <Image src='/images/logo.png' width={200} height={200} alt='logo' />
        <p className='text-center text-2xl font-bold'>
          지금 Memorip에서 <br />
          여행 계획을 짜보세요!
        </p>
      </div>
      <div className='flex flex-col gap-4 w-full '>
        <Link
          href={ROUTE.SIGN_UP}
          className='py-4 bg-blue-500 w-full rounded-lg text-white text-xl font-bold text-center'
        >
          이메일로 회원가입
        </Link>
        <Link
          href={ROUTE.SIGN_IN}
          className='py-4 w-full rounded-lg text-black border border-zinc-500 text-xl font-bold text-center'
        >
          로그인
        </Link>
      </div>
    </main>
  )
}
