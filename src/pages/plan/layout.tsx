import { HamburgerButton, HeaderRoot, MapButton } from '@/components/shared/Header'
import SNB from '@/components/shared/SNB/SNB'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <HeaderRoot>
        <MapButton />
        <HamburgerButton />
      </HeaderRoot>
      <SNB />
      {children}
    </section>
  )
}
