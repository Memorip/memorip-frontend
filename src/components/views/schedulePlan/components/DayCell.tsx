import clsx from 'clsx'

// import { CalendarContext } from '../contexts/CalendarContext'

interface DayCellProps {
  month: number
  year: number
  date: number
  day: number
  isOtherDay: boolean
}

const DayCell = ({ date, month, year, day, isOtherDay }: DayCellProps) => {
  // const { bookingDates, today, setBookingDates } = useContext(CalendarContext)
  // const todayString = today.format('YYYY-MM-DD')

  // console.log('todayString', todayString)

  return (
    <div className='w-[calc(100%/7)] px-1 py-4'>
      <div
        className={clsx(
          'flex h-full w-full justify-center text-sm font-medium',
          day === 0 ? 'text-red-500' : day === 6 ? 'text-blue-500' : 'text-gray-900'
        )}
      >
        <div className={clsx(isOtherDay ? 'hidden' : 'block')}>{date}</div>
      </div>
    </div>
  )
}

export default DayCell
