import { HamburgerButton, HeaderRoot } from '@/components/shared/header'
import SNB from '@/components/shared/snb'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <HeaderRoot>
        <HamburgerButton />
      </HeaderRoot>
      <SNB />
      {children}
    </section>
  )
}
