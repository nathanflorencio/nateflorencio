import { Helmet } from 'react-helmet-async'

import { KnowledgeCarousel } from '@/components/experience-carousel'

export function Knowledge() {
  return (
    <>
      <Helmet title="Experiência" />
      <div className="flex justify-center w-full h-[500px]">
        <KnowledgeCarousel />
      </div>
    </>
  )
}
