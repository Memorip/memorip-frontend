import Image from 'next/image'

interface AvatarProps {
  size?: number
}

const Avatar = ({ size = 30 }: AvatarProps) => {
  return (
    <Image
      className='flex-none rounded-full bg-white object-cover'
      src='/images/avatar.png'
      width={size}
      height={size}
      alt='avatar'
    />
  )
}

export default Avatar
