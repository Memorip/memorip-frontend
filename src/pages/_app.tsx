import { type AppProps } from 'next/app'
import { Poppins, Noto_Sans_KR } from 'next/font/google'
import Head from 'next/head'

import React from 'react'

import clsx from 'clsx'

import Layout from '@/components/shared/Layout'
import Providers from '@/components/shared/Providers'

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

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Memorip</title>
      </Head>
      <Providers>
        <main className={clsx(notoSansKr.className, poppins.className)}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
      </Providers>
    </>
  )
}

export default App
