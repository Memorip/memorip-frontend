import ROUTE from '@/constants/route'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex h-screen flex-col items-center justify-between px-8 py-12'>
      <div>
        <Image src='/images/logo.png' width={200} height={200} alt='logo' />
        <p className='text-center text-2xl font-bold'>
          지금 Memorip에서 <br />
          여행 계획을 짜보세요!
        </p>
      </div>
      <div className='flex w-full flex-col gap-4 '>
        <Link
          href={ROUTE.SIGN_UP}
          className='text-l w-full rounded-lg bg-blue-500 py-4 text-center font-bold text-white'
        >
          <i className='ri-mail-line mr-1' />
          <span>이메일로 회원가입</span>
        </Link>
        <Link
          href={ROUTE.SIGN_IN}
          className='text-l w-full rounded-lg border border-zinc-500 py-4 text-center font-bold text-black'
        >
          로그인
        </Link>
      </div>
    </main>
  )
}
