import '@/styles/globals.css'
import { Poppins, Noto_Sans_KR } from 'next/font/google'
import Script from 'next/script'
import 'remixicon/fonts/remixicon.css'
import Toastify from '@/components/client/Toastify'

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-notoSansKr',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-poppins',
})

const cls = (...classnames: string[]) => {
  return classnames.join(' ')
}

export const metadata = {
  title: 'Memorip - 여행을 기록해봐요!',
  description: '여행을 기록해봐요!',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  function setScreenSize() {
    if (typeof window !== 'undefined') {
      let vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
      window.addEventListener('resize', setScreenSize)
    }
  }

  setScreenSize()

  return (
    <html lang='en' className={cls(notoSansKr.className, poppins.className)}>
      <head>
        <meta
          name='thumbnail'
          content='https://user-images.githubusercontent.com/73215539/239014594-c8083529-075f-44f5-ac83-af80eeeba32f.png'
        />
        <meta property='og:url' content='https://memorip.vercel.app' />
        <meta
          property='og:image'
          content='https://user-images.githubusercontent.com/73215539/239014594-c8083529-075f-44f5-ac83-af80eeeba32f.png'
        />
        <Script
          type='text/javascript'
          src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=int5of2d7f`}
          strategy='beforeInteractive'
        ></Script>
      </head>
      <body>
        <Toastify />
        {children}
      </body>
    </html>
  )
}
