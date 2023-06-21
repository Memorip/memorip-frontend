export default function TripInfoCard({
  title,
  startDate,
  endDate,
  tags,
}: {
  title: string
  startDate: string
  endDate: string
  tags: string[]
}) {
  return (
    <>
      <h1 className='mb-1 text-2xl font-bold'>{title}</h1>
      <span className='mb-2 inline-block text-neutral-400'>
        {startDate} ~ {endDate}
      </span>
      <div className='mb-10 flex gap-1'>
        {tags.map((tag, index) => (
          <span className='rounded-full bg-blue-500 px-3 py-1 text-white' key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </>
  )
}
