import { Helmet } from 'react-helmet-async'

import { ImageProfile } from '@/components/image-profile'
import { InformationProfile } from '@/components/information-profile'

export function Home() {
  return (
    <>
      <Helmet title="Início" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:mt-10">
        <div className="flex items-center justify-center w-full lg:w-4/5 h-[600px] md:rounded-sm">
          <ImageProfile />
        </div>

        <div className="mt-4 md:mt-0">
          <InformationProfile />
        </div>
      </div>
    </>
  )
}
