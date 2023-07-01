'use client'

import Link from 'next/link'

import { Disclosure } from '@headlessui/react'
import clsx from 'clsx'

import TimeLine from '@/app/plan/[slug]/components/client/TimeLine'
import ProgressDot from '@/app/plan/[slug]/components/server/ProgressDot'

import ROUTE from '@/constants/route'
import { type Timeline } from '@/types/timeline'

interface TimeLineBlockProps {
  timelines: Timeline[]
  planId: string
}

export default function TimeLineBlock({ timelines, planId }: TimeLineBlockProps) {
  return (
    <Disclosure defaultOpen>
      {({ open }) => (
        /* Use the `open` state to conditionally change the direction of an icon. */
        <>
          <Disclosure.Button className='py-2'>
            <div className='mb-2 flex items-center'>
              <span className='mr-2 text-base font-semibold'>Day 1</span>
              <span className='text-xs font-medium text-gray-400'>7.1 (토)</span>
              <i className={clsx(open ? 'rotate-180' : '', 'ri-arrow-down-s-line font-semibold text-gray-600')} />
            </div>
          </Disclosure.Button>
          <Disclosure.Panel>
            <div className='flex gap-2'>
              <ProgressDot total={timelines.length} />
              <div className='flex flex-1 flex-col gap-4'>
                {timelines.map((timeline) => (
                  <TimeLine timeline={timeline} key={timeline.id} />
                ))}
                <Link
                  className='flex h-[88px] w-full items-center justify-center rounded-lg bg-zinc-100 p-4'
                  href={ROUTE.SEARCH(Number(planId))}
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
  )
}
