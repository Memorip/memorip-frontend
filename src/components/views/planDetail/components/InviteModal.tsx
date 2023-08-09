import { Dialog } from '@headlessui/react'
import clsx from 'clsx'
import { toast } from 'react-toastify'

import { usePlanContext } from '@/components/views/planDetail/contexts/PlanContext'
import { useInviteCodeMutation } from '@/components/views/planDetail/hooks/useInviteCodeMutation'

interface InviteModalProps {
  isOpen: boolean
  onClose: () => void
}

const InviteModal = ({ isOpen, onClose }: InviteModalProps) => {
  const { plan } = usePlanContext()
  const inviteCodeMutation = useInviteCodeMutation()

  const handleClickCopy = () => {
    inviteCodeMutation.mutate(
      { planId: plan.id },
      {
        onSuccess: ({ slug }) => {
          navigator.clipboard.writeText(`https://memorip.vercel.app/plan/${slug}`)
          toast.success('초대 링크가 클립보드에 복사됐어요.')
        },
      }
    )
  }

  return (
    <Dialog className='relative z-50' open={isOpen} onClose={onClose}>
      <div className='fixed inset-0 bg-white'>
        <Dialog.Panel className='p-4'>
          <button onClick={onClose}>
            <i className='ri-close-line text-2xl text-gray-500' />
          </button>
          <h1 className='my-4 text-xl font-bold'>가평, 양평 여행</h1>
          <div className='mb-2 flex gap-1'>
            <span className='font-semibold'>여행 친구</span>
            <span className='font-semibold text-blue-600'>0</span>
          </div>
          <p className='text-sm text-gray-400'>
            함께 여행할 친구를 초대해보세요. <br />
            초대한 친구들은 여행 일정을 확인할 수 있습니다.
          </p>
          <div className='mt-8 flex justify-center gap-2'>
            <button className='w-1/2 rounded-full bg-yellow-400 py-2 text-sm font-semibold text-gray-900'>
              <i className='ri-chat-3-fill mr-1' />
              <span>카카오톡 초대</span>
            </button>

            <button
              className={clsx(
                'w-1/2 rounded-full bg-lime-400 py-2 text-sm font-semibold text-gray-900',
                inviteCodeMutation.isLoading && 'cursor-default opacity-70'
              )}
              onClick={handleClickCopy}
            >
              {inviteCodeMutation.isLoading ? (
                <div className='flex justify-center'>
                  <i className='ri-loader-4-line animate-spin' />
                </div>
              ) : (
                <>
                  <i className='ri-attachment-2 mr-1' />
                  <span>초대링크 생성</span>
                </>
              )}
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}

export default InviteModal
