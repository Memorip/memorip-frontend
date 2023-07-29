import { useState } from 'react'

import { Dialog } from '@headlessui/react'
import { toast } from 'react-toastify'

import { useTimelineMutation } from '@/components/views/planDetail/hooks/useTimelineMutation'

interface MemoDialogProps {
  id: number
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const MemoDialog = ({ id, isOpen, setIsOpen }: MemoDialogProps) => {
  const [memoInput, setMemoInput] = useState('')
  const timelineMutation = useTimelineMutation()

  const handleChangeMemoInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMemoInput(e.target.value)
  }

  const handleClickSave = () => {
    timelineMutation.mutate(
      {
        id,
        memo: memoInput,
      },
      {
        onSuccess: () => {
          setIsOpen(false)
          setMemoInput('')
          toast.success('메모가 저장됐어요.')
        },
        onError: () => {
          toast.error('메모 저장에 실패했어요.')
        },
      }
    )
  }

  return (
    <Dialog className='relative z-50' open={isOpen} onClose={() => setIsOpen(false)}>
      <div className='fixed inset-0 bg-black/30' aria-hidden='true' />
      <div className='fixed inset-0 flex items-center justify-center p-4'>
        <Dialog.Panel className='w-full max-w-sm rounded bg-white '>
          <div className='p-4'>
            <Dialog.Title className='mb-4 flex justify-between'>
              <span className='text-xl font-bold'>메모</span>
              <i className='ri-image-add-line text-xl text-stone-400' />
            </Dialog.Title>
            <Dialog.Description>
              <textarea
                className='h-40 w-full resize-none focus:border-transparent focus:outline-none'
                placeholder='잊기 쉬운 정보들을 메모해보세요.'
                value={memoInput}
                onChange={handleChangeMemoInput}
              />
            </Dialog.Description>
          </div>
          <div className='flex'>
            <button
              className='w-full border-r border-t border-zinc-300 py-3 font-bold text-black'
              onClick={() => setIsOpen(false)}
            >
              취소
            </button>
            <button className='w-full border-t border-zinc-300 py-3 font-bold text-blue-500 ' onClick={handleClickSave}>
              확인
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}

export default MemoDialog
