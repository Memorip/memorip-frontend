import { useRouter } from 'next/navigation'

const Back = () => {
  const { back } = useRouter()

  return (
    <button onClick={back}>
      <i className='ri-arrow-left-line text-xl text-zinc-700' />
    </button>
  )
}

export default Back
