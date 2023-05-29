import Header from '@/components/shared/Header'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Header />
      {children}
    </section>
  )
}
