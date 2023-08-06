import { type TripType } from '@/types/plan'

interface TripInfoCardProps {
  title: string
  startDate: string
  endDate: string
  tags: string
  views: number
  likes: number
}

const TripInfoCard = ({ title, startDate, endDate, tags, views, likes }: TripInfoCardProps) => {
  return (
    <>
      <h1 className='mb-1 text-2xl font-bold'>{title}</h1>
      <span className='mb-2 inline-block text-neutral-400'>
        {startDate} ~ {endDate}
      </span>
      <div className='mb-4 flex gap-4'>
        <div className='flex items-center gap-2'>
          <i className='ri-eye-line text-sm text-gray-500' />
          <span className='text-sm text-gray-500'>{views} views</span>
        </div>
        <div className='flex items-center gap-2'>
          <i className='ri-heart-line text-sm text-gray-500' />
          <span className='text-sm text-gray-500'>{likes} likes</span>
        </div>
      </div>
      <div className='mb-4 flex flex-wrap gap-1'>
        {Object.entries(JSON.parse(tags) as TripType).map(([, values]) =>
          values.map((value) => (
            <span className='rounded-full bg-blue-500 px-3 py-1 text-white' key={value}>
              {value}
            </span>
          ))
        )}
      </div>
    </>
  )
}

export default TripInfoCard
