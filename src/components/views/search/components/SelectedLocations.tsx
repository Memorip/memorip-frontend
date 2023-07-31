import Image from 'next/image'

import clsx from 'clsx'

import { type Location } from '@/components/views/search/types/location'
interface SelectedLocationsProps {
  selectedLocations: Location[]
  setSelectedLocations: React.Dispatch<React.SetStateAction<Location[]>>
}

const SelectedLocations = ({ selectedLocations, setSelectedLocations }: SelectedLocationsProps) => {
  const handleClickSelected = (location: Location) => {
    if (selectedLocations.includes(location)) {
      setSelectedLocations((prev) => prev.filter((prevLocation) => prevLocation !== location))
    } else {
      setSelectedLocations((prev) => [...prev, location])
    }
  }

  return (
    <div className={clsx('flex gap-4 overflow-x-auto', selectedLocations.length > 0 ? 'h-full p-4' : 'h-0 p-0')}>
      {selectedLocations.map((location) => (
        <div className='relative flex w-[48px] flex-col gap-1' key={location.title}>
          <button
            className='absolute right-[-12px] top-[-12px] z-50 h-6 w-6 rounded-full bg-white shadow-md shadow-gray-300'
            onClick={() => handleClickSelected(location)}
          >
            <i className='ri-close-line text-base text-gray-400' />
          </button>
          <div className='relative h-[48px] w-[48px]'>
            <Image className='rounded-md' fill src={location.imageLink} alt={location.title} />
          </div>
          <span className='truncate text-center text-xs font-semibold text-gray-500'>{location.title}</span>
        </div>
      ))}
    </div>
  )
}

export default SelectedLocations
