import { HamburgerButton, HeaderRoot } from '@/app/components/shared/Header'
import Navigation from '@/app/components/shared/SNB/SNB'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <HeaderRoot>
        <HamburgerButton />
      </HeaderRoot>
      <Navigation />
      {children}
    </section>
  )
}
