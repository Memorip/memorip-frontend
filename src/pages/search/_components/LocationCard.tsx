import Image from 'next/image'

import clsx from 'clsx'

interface LocationCardProps {
  location: string
  selectedLocations: string[]
  setSelectedLocations: React.Dispatch<React.SetStateAction<string[]>>
}

const LocationCard = ({ location, selectedLocations, setSelectedLocations }: LocationCardProps) => {
  const isSelected = selectedLocations.includes(location)

  const handleClickSelected = () => {
    if (isSelected) {
      setSelectedLocations((prev) => prev.filter((prevLocation) => prevLocation !== location))
    } else {
      setSelectedLocations((prev) => [...prev, location])
    }
  }

  return (
    <div className='flex h-[50px] items-center gap-3'>
      <div className='relative h-[50px] w-[50px]'>
        <Image className='rounded-lg' fill src='/images/testimage2.png' alt='제주도' />
      </div>
      <div className='flex flex-1 items-center justify-between'>
        <div className='flex flex-col justify-between gap-2'>
          <span className='text-sm font-semibold'>{location}</span>
          <p className='text-xs text-zinc-400'>Lorem ipsum dolor sit amet.</p>
        </div>
        <button
          className={clsx(
            'h-8 rounded-full px-4 text-xs font-semibold ',
            isSelected ? 'border border-blue-400 text-blue-400' : 'bg-gray-200 text-gray-600'
          )}
          onClick={handleClickSelected}
        >
          {isSelected ? '취소' : '선택'}
        </button>
      </div>
    </div>
  )
}

export default LocationCard
