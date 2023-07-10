/* eslint-disable @next/next/no-sync-scripts */
import { Poppins, Noto_Sans_KR } from 'next/font/google'

import clsx from 'clsx'

import Meta from '@/components/shared/meta'
import Providers from '@/components/shared/providers'

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

export const metadata = {
  title: 'Memorip - 여행을 기록해봐요!',
  description: '여행을 기록해봐요!',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={clsx(notoSansKr.className, poppins.className)}>
      <head>
        <Meta />
        {/* NAVER MAPS API */}
        <script
          type='text/javascript'
          src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=int5of2d7f`}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
