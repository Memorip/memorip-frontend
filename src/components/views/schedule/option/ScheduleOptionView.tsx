import { useRouter } from 'next/router'

import React from 'react'

import clsx from 'clsx'
import { toast } from 'react-toastify'

import useCreatePlanMutation from '@/components/views/schedule/hooks/useCreatePlanMutation'

import { PartyOptions, StyleOptions } from '@/constants/common'
import ROUTE from '@/constants/route'
import useUserInfoQuery from '@/features/auth/useUserInfoQuery'
import { usePlan } from '@/hooks/usePlan'
import { type TripType } from '@/types/plan'

const ScheduleOptionView = () => {
  const { push } = useRouter()
  const userInfoQuery = useUserInfoQuery()
  const [selected, setSelected] = React.useState<TripType>({
    partyOptions: [],
    styleOptions: [],
  })

  const { plan } = usePlan()

  const createPlanMutation = useCreatePlanMutation()

  const changeHandler = ({
    checked,
    key,
    type,
  }: {
    checked: boolean
    key: string
    type: 'partyOptions' | 'styleOptions'
  }) => {
    if (checked) {
      setSelected((prev) => {
        return {
          ...prev,
          [type]: [...prev[type], key],
        }
      })
    } else {
      setSelected((prev) => {
        return {
          ...prev,
          [type]: prev[type].filter((item) => item !== key),
        }
      })
    }
  }

  const handleSetOption = () => {
    if (!userInfoQuery.isSuccess) {
      toast.error('로그인이 필요한 서비스입니다.')
      return
    }

    createPlanMutation.mutate(
      {
        ...plan,
        userId: userInfoQuery.data.id,
        participants: [userInfoQuery.data.id],
        tripType: selected,
        isPublic: true,
      },
      {
        onSuccess: ({ id }) => {
          toast.success('여행 계획이 생성되었어요.')
          push(ROUTE.PLAN(id))
        },
      }
    )
  }

  return (
    <section className='mt-4 border-2 border-blue-400 p-6'>
      <h1 className='text-xl font-semibold'>
        어떤 스타일의 <br />
        여행을 할 계획인가요 ?
      </h1>

      <section className='mt-8 space-y-6'>
        <div>
          <h2 className='font-semibold'>누구와 ?</h2>
          <div className='mt-3 space-y-4'>
            {Object.entries(PartyOptions).map(([key, value]) => (
              <>
                <label className='inline-block'>
                  <input
                    type='checkbox'
                    className='sr-only'
                    checked={selected.partyOptions.includes(key)}
                    onChange={(e) => changeHandler({ checked: e.target.checked, key, type: 'partyOptions' })}
                    key={key}
                  />
                  <div
                    className={clsx(
                      'mr-3 h-[30px] w-fit rounded-xl  px-3 py-1 active:bg-blue-300',
                      selected.partyOptions.includes(key) ? 'bg-blue-500 text-white' : 'bg-slate-100 text-gray-500'
                    )}
                  >
                    {value}
                  </div>
                </label>
              </>
            ))}
          </div>
        </div>
        <div>
          <h2 className='font-semibold'>여행 스타일</h2>
          <div className='mt-3 space-y-4'>
            {Object.entries(StyleOptions).map(([key, value]) => (
              <>
                <label className='inline-block'>
                  <input
                    type='checkbox'
                    className='sr-only'
                    checked={selected.styleOptions.includes(key)}
                    onChange={(e) => changeHandler({ checked: e.target.checked, key, type: 'styleOptions' })}
                    key={key}
                  />
                  <div
                    className={clsx(
                      'mr-3 h-[30px] w-fit rounded-xl  px-3 py-1 active:bg-blue-300',
                      selected.styleOptions.includes(key) ? 'bg-blue-500 text-white' : 'bg-slate-100 text-gray-500'
                    )}
                  >
                    {value}
                  </div>
                </label>
              </>
            ))}
          </div>
        </div>
      </section>

      <button
        className={clsx(
          'mt-5 flex w-full flex-none items-center justify-center rounded-md bg-blue-500 py-4 text-sm font-medium text-white',
          createPlanMutation.isLoading && 'cursor-not-allowed opacity-50'
        )}
        disabled={createPlanMutation.isLoading}
        onClick={handleSetOption}
      >
        완료
      </button>
      <button className='mt-5 flex w-full flex-none items-center justify-center rounded-md  text-sm font-medium underline'>
        다음에 하기
      </button>
    </section>
  )
}

export default ScheduleOptionView
