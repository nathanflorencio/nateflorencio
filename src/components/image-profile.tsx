import Image from 'next/image'

import meImage from '@/assets/me.jpeg'

export function ImageProfile() {
  return (
    <div className="w-full h-full flex items-center justify-center xl:rounded-full overflow-hidden">
      <Image
        src={meImage}
        alt="Nathan Florencio"
        className="w-full h-full object-cover"
      />
    </div>
  )
}
