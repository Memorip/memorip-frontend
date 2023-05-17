import Head from 'next/head';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Memorip - 여행을 기록해봐요!',
  description: '여행을 기록해봐요!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Head>
        <meta name='thumbnail' content='../../public/memorip_logo.png' />
        <meta property='og:url' content='https://memorip.vercel.app' />
        <meta property='og:image' content='../../public/memorip_logo.png' />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
