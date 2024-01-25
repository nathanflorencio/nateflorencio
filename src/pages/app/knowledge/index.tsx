import { Helmet } from 'react-helmet-async'

import { KnowledgeCarousel } from '@/components/experience-carousel'

export function Knowledge() {
  return (
    <>
      <Helmet title="Conhecimentos" />
      <div className="w-full flex justify-center items-center">
        <KnowledgeCarousel />
      </div>
    </>
  )
}
