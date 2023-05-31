import Header from '@/components/shared/Header'
import Navigation from '@/components/shared/Navigation/Navigation'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Header />
      <Navigation />
      {children}
    </section>
  )
}
