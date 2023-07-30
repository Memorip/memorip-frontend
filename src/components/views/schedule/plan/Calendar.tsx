import React from 'react'

import dayjs from 'dayjs'
import { Calendar, getAllDatesInRange } from 'react-multi-date-picker'
import { type DateObject } from 'react-multi-date-picker'

interface ICalendar {
  setDates: React.Dispatch<React.SetStateAction<string[]>>
}

const CalendarComponent = ({ setDates }: ICalendar) => {
  const [value, setValue] = React.useState<DateObject | DateObject[] | null>()

  const handleChangeDate = (dataObjects: DateObject | DateObject[] | null) => {
    setValue(dataObjects)
    const allDates = getAllDatesInRange(Object(dataObjects))
    const formattedDates = allDates.map((date) => dayjs(date.toString()).format('YYYY-MM-DD'))
    setDates(formattedDates)
  }

  const localeKorean = {
    name: 'ko',
    months: [
      ['1월', '1월'],
      ['2월', '2월'],
      ['3월', '3월'],
      ['4월', '4월'],
      ['5월', '5월'],
      ['6월', '6월'],
      ['7월', '7월'],
      ['8월', '8월'],
      ['9월', '9월'],
      ['10월', '10월'],
      ['11월', '11월'],
      ['12월', '12월'],
    ],
    weekDays: [
      ['토요일', '토'],
      ['일요일', '일'],
      ['월요일', '월'],
      ['화요일', '화'],
      ['수요일', '수'],
      ['목요일', '목'],
      ['금요일', '금'],
    ],
    digits: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    meridiems: [
      ['오전', '오전'],
      ['오후', '오후'],
    ],
  }

  return (
    <div className='flex flex-col items-center p-4'>
      <Calendar
        className='custom-calendar'
        range
        numberOfMonths={2}
        locale={localeKorean}
        minDate={new Date()}
        value={value}
        onChange={(dataObjects) => {
          handleChangeDate(dataObjects)
        }}
      />
    </div>
  )
}

export default CalendarComponent
