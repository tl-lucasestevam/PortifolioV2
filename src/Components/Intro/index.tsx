import Image from 'next/image'
import { ArrowRight } from 'phosphor-react'
import { Button } from '../Button'
import {
  DescriptionSide,
  ImageSide,
  IntroContainer,
  Shape,
  Squares,
  TextBox,
  Title,
  TitleResponsive,
} from './styles'

import reactLogo from '../../assets/react.svg'
import nodeLogo from '../../assets/node.svg'
import memoji from '../../assets/memoji.png'
import { useTranslation } from 'next-i18next'
import parse from 'html-react-parser'
import Link from 'next/link'

export function Intro() {
  const { t: translate } = useTranslation(['home'])

  return (
    <IntroContainer className="container">
      <DescriptionSide
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="800"
        data-aos-easing="ease-in-out"
      >
        <TextBox className="container">
          <div>
            <Title>{parse(translate('Title'))}</Title>
            <TitleResponsive>
              {parse(translate('TitleResponsive'))}
            </TitleResponsive>
            <p>{translate('Description')}</p>
          </div>

          <Link href="/#about">
            <Button
              bg="outlined"
              text={translate('ButtonTitle')}
              icon={<ArrowRight size={24} weight="bold" />}
            />
          </Link>
        </TextBox>
      </DescriptionSide>
      <ImageSide>
        <Shape
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
        >
          <Image
            src={memoji}
            width={221}
            height={242}
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            alt=""
          />
          <Squares
            className="left-bottom"
            data-aos="fade-up"
            data-aos-offset="1"
            data-aos-delay="500"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
          >
            <Image src={reactLogo} width={82} height={73.02} alt="" />
          </Squares>
          <Squares
            className="right-top"
            data-aos="fade-up"
            data-aos-offset="1"
            data-aos-delay="500"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <Image src={nodeLogo} width={62.82} height={77.82} alt="" />
          </Squares>
        </Shape>
      </ImageSide>
    </IntroContainer>
  )
}
