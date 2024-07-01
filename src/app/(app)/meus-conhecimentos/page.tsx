import { Metadata } from 'next'

import { KnowledgeCarousel } from '@/components/experience-carousel'

export const metadata: Metadata = {
  title: 'Conhecimentos',
}

export default function Page() {
  return (
    <div className="w-full flex justify-center items-center">
      <KnowledgeCarousel />
    </div>
  )
}
