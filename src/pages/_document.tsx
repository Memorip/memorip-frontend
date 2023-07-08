import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export const metadata = {
  title: 'Memorip - 여행을 기록해봐요!',
  description: '여행을 기록해봐요!',
}

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
      <Script type='text/javascript' src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=int5of2d7f`} />
    </Html>
  )
}
