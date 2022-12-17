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
} from './styles'

import reactLogo from '../../assets/react.svg'
import nodeLogo from '../../assets/node.svg'
import { useTranslation } from 'next-i18next'
import parse from 'html-react-parser'

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
            <h1>{parse(translate('Title'))}</h1>
            <p>{translate('Description')}</p>
          </div>

          <Button
            bg="outlined"
            text={translate('ButtonTitle')}
            icon={<ArrowRight size={24} weight="bold" />}
          />
        </TextBox>
      </DescriptionSide>
      <ImageSide>
        <Shape
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
        >
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
