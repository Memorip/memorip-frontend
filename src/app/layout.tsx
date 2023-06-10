/* eslint-disable @next/next/no-sync-scripts */
import { Poppins, Noto_Sans_KR } from 'next/font/google'

import Meta from '@/app/components/shared/Meta'
import Providers from '@/app/components/shared/Providers'
import { useAxiosInterceptor } from '@/hooks'

import '@/styles/globals.css'
import 'remixicon/fonts/remixicon.css'

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

const cls = (...classnames: string[]) => classnames.join(' ')

export const metadata = {
  title: 'Memorip - 여행을 기록해봐요!',
  description: '여행을 기록해봐요!',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useAxiosInterceptor()

  return (
    <html lang='en' className={cls(notoSansKr.className, poppins.className)}>
      <head>
        <Meta />
        {/* NAVER MAPS API */}
        <script
          type='text/javascript'
          src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=int5of2d7f`}
        />
      </head>
      <body>
        <Providers>
          <div id='modal-root' />
          {children}
        </Providers>
      </body>
    </html>
  )
}
