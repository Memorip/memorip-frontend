import Header from '@/app/components/shared/Header'
import Navigation from '@/app/components/shared/Navigation/Navigation'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Header />
      <Navigation />
      {children}
    </section>
  )
}
