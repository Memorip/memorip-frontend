import Image from 'next/image'

import clsx from 'clsx'

import { type Location } from '@/components/views/search/SearchView'

interface LocationCardProps {
  location: string
  image: string
  category: string
  selectedLocations: Location[]
  setSelectedLocations: React.Dispatch<React.SetStateAction<Location[]>>
}

const LocationCard = ({ location, image, category, selectedLocations, setSelectedLocations }: LocationCardProps) => {
  const isSelected = selectedLocations.map((selectedLocation) => selectedLocation.title).includes(location)

  const handleClickSelected = () => {
    if (isSelected) {
      setSelectedLocations((prev) => prev.filter((prevLocation) => prevLocation.title !== location))
    } else {
      setSelectedLocations((prev) => [...prev, { title: location, imageLink: image, category }])
    }
  }

  return (
    <div className='flex h-[50px] items-center gap-3'>
      <div className='relative h-[50px] w-[50px]'>
        <Image className='rounded-lg object-cover' fill src={image} alt='제주도' />
      </div>
      <div className='flex flex-1 items-center justify-between'>
        <div className='flex flex-col justify-between gap-2'>
          <span className='text-sm font-semibold'>{location}</span>
          <p className='text-xs text-zinc-400'>{category}</p>
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
