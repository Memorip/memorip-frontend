import Navigation from '@/app/components/shared/GNB/GNB'
import Header from '@/app/components/shared/Header'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Header />
      <Navigation />
      {children}
    </section>
  )
}
