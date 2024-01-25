import { knowledgeData } from '@/data/knowledge-data'

import { Card, CardContent } from './ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel'

export function KnowledgeCarousel() {
  return (
    <Carousel>
      <CarouselContent>
        {knowledgeData.map((technology) => {
          return (
            <CarouselItem key={technology.id}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">
                      {technology.id}
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          )
        })}
        <CarouselPrevious />
        <CarouselNext />
      </CarouselContent>
    </Carousel>
  )
}
