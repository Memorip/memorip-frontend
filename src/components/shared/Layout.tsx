import Header from '@/components/shared/Header'
import SNB from '@/components/shared/SNB'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <Header>
        <Header.HamburgerButton />
      </Header>
      <SNB />
      {children}
    </section>
  )
}

export default Layout
