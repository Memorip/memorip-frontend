import Header from '@/app/components/shared/Header'
import Navigation from '@/app/components/shared/SNB/SNB'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Header />
      <Navigation />
      {children}
    </section>
  )
}
