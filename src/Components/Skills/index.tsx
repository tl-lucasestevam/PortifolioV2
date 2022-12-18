import { TitleSection } from '../TitleSection'
import {
  CarrouselButton,
  CarrouselButtonContainer,
  CarrouselContainer,
  CarrouselItem,
  CarrouselSide,
  CarrouselViewport,
  DescriptionSide,
  Detail,
  LogoTech,
  SkillsContainer,
  SkillsContent,
} from './styles'
import { useTranslation } from 'next-i18next'
import { ArrowLeft, ArrowRight } from 'phosphor-react'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react'

interface ITech {
  name: string
  imageUrl: string
  description: string
}

export function Skills() {
  const { t: translate } = useTranslation(['skills'])

  const techs: Array<ITech> = translate('SkillsData', {
    returnObjects: true,
  })

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    skipSnaps: false,
    dragFree: true,
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <SkillsContainer className="container">
      <TitleSection data-aos="fade-right" data-aos-duration="800">
        {translate('Skills').toUpperCase()}
      </TitleSection>

      <SkillsContent className="container">
        <DescriptionSide>
          <h1>{translate('Title')}</h1>

          <p>{translate('Description')}</p>

          <CarrouselButtonContainer>
            <CarrouselButton className="embla__prev" onClick={scrollPrev}>
              <ArrowLeft size={24} />
            </CarrouselButton>
            <CarrouselButton className="embla__next" onClick={scrollNext}>
              <ArrowRight size={24} />
            </CarrouselButton>
          </CarrouselButtonContainer>
        </DescriptionSide>

        <CarrouselSide className="embla">
          <CarrouselViewport ref={emblaRef}>
            <CarrouselContainer className="embla__container">
              {techs.map((tech) => {
                return (
                  <CarrouselItem key={tech.name} className="embla__slide">
                    <LogoTech
                      src={tech.imageUrl}
                      width={72.09}
                      height={71}
                      alt=""
                    />
                    <h2>{tech.name}</h2>
                    <p>{tech.description}</p>
                    <Detail />
                  </CarrouselItem>
                )
              })}
            </CarrouselContainer>
          </CarrouselViewport>
        </CarrouselSide>
      </SkillsContent>
    </SkillsContainer>
  )
}
