import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'
import { ArrowRight } from 'phosphor-react'
import { Button } from '../Components/Button'
import { DefaultLayout } from '../Layouts/DefaultLayout'
import {
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
        <DescriptionSide>
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
          <Shape>
            <Squares className="left-bottom">
              <Image src={reactLogo} width={82} height={73.02} alt="" />
            </Squares>
            <Squares className="right-top">
              <Image src={nodeLogo} width={62.82} height={77.82} alt="" />
            </Squares>
          </Shape>
        </ImageSide>
      </IntroContainer>
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
