import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'
import { ArrowRight } from 'phosphor-react'
import { Button } from '../Components/Button'
import { DefaultLayout } from '../Layouts/DefaultLayout'
import {
  BodyTest,
  DescriptionSide,
  ImageSide,
  IntroContainer,
  Shape,
  Squares,
  TextBox,
} from '../styles/pages/home'

import reactLogo from '../assets/react.svg'
import nodeLogo from '../assets/node.svg'

export default function Home() {
  return (
    <DefaultLayout>
      <IntroContainer className="container">
        <DescriptionSide
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <TextBox>
            <div>
              <h1>
                I’m David, a <span>Web Developer</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit leo quis
                ullamcorper quis id elementum convallis lacus gravida.
              </p>
            </div>

            <Button
              bg="outlined"
              text="See more"
              icon={<ArrowRight size={24} weight="bold" />}
            />
          </TextBox>
        </DescriptionSide>
        <ImageSide>
          <Shape
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <Squares
              className="left-bottom"
              data-aos="fade-up"
              data-aos-offset="1"
              data-aos-delay="900"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <Image src={reactLogo} width={82} height={73.02} alt="" />
            </Squares>
            <Squares
              className="right-top"
              data-aos="fade-up"
              data-aos-offset="1"
              data-aos-delay="1300"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <Image src={nodeLogo} width={62.82} height={77.82} alt="" />
            </Squares>
          </Shape>
        </ImageSide>
      </IntroContainer>
      <BodyTest />
    </DefaultLayout>
  )
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'navbar'], null, [
        'en',
        'pt-BR',
      ])),
    },
  }
}
