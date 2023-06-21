import { HamburgerButton, HeaderRoot, MapButton } from '@/app/components/shared/Header'
import SNB from '@/app/components/shared/SNB/SNB'

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
