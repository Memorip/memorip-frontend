import Header from '@/app/components/shared/Header'
import Navigation from '@/app/components/shared/SNB/SNB'

interface TripScheduleProps {
  children: React.ReactNode
}

export default function TripSchedule({ children }: TripScheduleProps) {
  return (
    <section>
      <Header />
      <Navigation />
      {children}
    </section>
  )
}
