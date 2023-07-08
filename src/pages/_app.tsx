import { type AppProps } from 'next/app'
import { Poppins, Noto_Sans_KR } from 'next/font/google'
import Head from 'next/head'

import React from 'react'

import Layout from '@/components/shared/Layout/Layout'
import Providers from '@/components/shared/Providers/Providers'

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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>memorip</title>
      </Head>
      <Providers>
        <main className={cls(notoSansKr.className, poppins.className)}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
      </Providers>
    </>
  )
}
