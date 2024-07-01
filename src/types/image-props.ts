import { StaticImageData } from 'next/image'

export interface ImageProps {
  key: number
  image: StaticImageData
  alt: string
}
