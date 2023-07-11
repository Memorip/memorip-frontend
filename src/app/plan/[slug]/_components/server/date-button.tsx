export default function DateButton({ day }: { day: number }) {
  return (
    <button className='flex min-w-[64px] flex-col items-center gap-1'>
      <span className='text-lg font-semibold '>Day {day}</span>
      <span className='text-sm text-zinc-400'>5/30</span>
    </button>
  )
}
