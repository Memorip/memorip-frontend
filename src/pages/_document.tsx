import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

const Document = () => {
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

export default Document
