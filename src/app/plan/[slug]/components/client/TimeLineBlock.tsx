'use client'

import Link from 'next/link'

import { useState, useTransition } from 'react'

import { Disclosure } from '@headlessui/react'
import clsx from 'clsx'
import { toast } from 'react-toastify'

import TimeLine from '@/app/plan/[slug]/components/client/TimeLine'
import ProgressDot from '@/app/plan/[slug]/components/server/ProgressDot'

import ROUTE from '@/constants/route'
import { useToggle } from '@/hooks'
import { deleteTimelines } from '@/lib/actions/timeline'
import { type Timeline } from '@/types/timeline'

interface TimeLineBlockProps {
  date: string
  timelines: Timeline[] | undefined
  planId: string
  day: number
}

export default function TimeLineBlock({ date, timelines, planId, day }: TimeLineBlockProps) {
  const [isEditing, toggleEditing] = useToggle()
  const [selectedLocations, setSelectedLocations] = useState<string[]>([])
  const [, startTransition] = useTransition()
  const timelineLength = timelines?.length

  const handleClickSelectLocation = (locationId: string) => {
    if (selectedLocations.includes(locationId)) {
      setSelectedLocations(selectedLocations.filter((id) => id !== locationId))
    } else {
      setSelectedLocations([...selectedLocations, locationId])
    }
  }

  const handleActionDelete = () => {
    startTransition(async () => {
      await deleteTimelines(selectedLocations)
      setSelectedLocations([])
      toggleEditing()
      toast.success('선택하신 장소가 삭제되었어요.')
    })
  }

  return (
    <>
      <Disclosure defaultOpen>
        {({ open }) => (
          <>
            <div className='flex items-center justify-between'>
              <Disclosure.Button>
                <div className='flex items-center'>
                  <span className='mr-2 text-base font-semibold'>Day {day}</span>
                  <span className='text-xs font-medium text-gray-400'>{date} (토)</span>
                  <i className={clsx(open ? 'rotate-180' : '', 'ri-arrow-down-s-line font-semibold text-gray-600')} />
                </div>
              </Disclosure.Button>
              <button className='text-xs font-semibold text-gray-500' onClick={toggleEditing}>
                편집
              </button>
            </div>
            <Disclosure.Panel>
              <div className='flex gap-2'>
                {isEditing ? (
                  <div className='my-8 flex flex-col gap-[76px]'>
                    {timelines?.map((timeline, index) => (
                      <button onClick={() => handleClickSelectLocation(timeline.id.toString())} key={index}>
                        <i
                          className={clsx(
                            selectedLocations.includes(timeline.id.toString())
                              ? 'ri-checkbox-circle-fill text-xl text-blue-500'
                              : 'ri-checkbox-blank-circle-line text-xl text-gray-300'
                          )}
                        />
                      </button>
                    ))}
                  </div>
                ) : (
                  <ProgressDot total={timelineLength ?? 0} />
                )}
                <div className='flex flex-1 flex-col gap-4'>
                  {timelines?.map((timeline) => (
                    <TimeLine timeline={timeline} isEditing={isEditing} key={timeline.id} />
                  ))}
                  <Link
                    className='flex h-[88px] w-full items-center justify-center rounded-lg bg-zinc-100 p-4'
                    href={ROUTE.SEARCH(Number(planId), date)}
                  >
                    <i className='ri-add-line text-lg font-bold text-emerald-500' />
                    <span className='text-sm font-bold text-emerald-500'>일정 추가하기</span>
                  </Link>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <form action={handleActionDelete}>
        <button
          className={clsx(
            isEditing && selectedLocations.length > 0 ? 'flex gap-2' : 'hidden',
            'fixed bottom-0 left-0 flex h-16 w-full items-center justify-center bg-blue-500 text-base font-bold text-white'
          )}
          type='submit'
        >
          <i className='ri-delete-bin-line' />
          <span>삭제하기</span>
        </button>
      </form>
    </>
  )
}
