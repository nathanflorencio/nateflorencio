import Autoplay from 'embla-carousel-autoplay'

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
    <Carousel
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      opts={{
        align: 'start',
        loop: true,
      }}
      className="w-full max-w-xl"
    >
      <CarouselContent>
        {knowledgeData.map((technology) => (
          <CarouselItem key={technology.id}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div className="text-4xl font-semibold flex flex-col items-center">
                    <div className="mb-4 flex flex-col items-center">
                      <h3 className="text-rose-600 text-xl">
                        {technology.title}
                      </h3>
                      <h4 className="text-lg">{technology.subtitle}</h4>
                      <h5 className="text-sm mb-5">
                        {technology.link ? (
                          <a
                            href={technology.link}
                            target="_blank"
                            className="hover:text-rose-500"
                            rel="noreferrer"
                          >
                            {technology.description}
                          </a>
                        ) : (
                          <span>{technology.description}</span>
                        )}
                      </h5>
                    </div>
                    <img
                      width={200}
                      height={200}
                      src={technology.image.image}
                      alt={technology.image.alt}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
