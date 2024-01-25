import { ImageProps } from './image-props'

export interface KnowledgeData {
  id: number
  title: string
  subtitle: string
  description: string
  image: ImageProps
  link?: string
}

export interface KnowledgeDataChart {
  id: number
  name: string
  quality: number
}
