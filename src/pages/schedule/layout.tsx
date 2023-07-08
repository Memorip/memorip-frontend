interface RootLayout {
  children: React.ReactNode
}

export default function ScheduleLayout({ children }: RootLayout) {
  return <section className='h-full p-4'>{children}</section>
}
