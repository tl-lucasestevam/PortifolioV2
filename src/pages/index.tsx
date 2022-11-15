import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ArrowRight } from 'phosphor-react'
import { Button } from '../Components/Button'
import { DefaultLayout } from '../Layouts/DefaultLayout'
import {
  DescriptionSide,
  ImageSide,
  IntroContainer,
  TextBox,
} from '../styles/pages/home'

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
        <ImageSide>Image</ImageSide>
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
