/* eslint-disable react/no-children-prop */
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { DefaultLayout } from '../../Layouts/DefaultLayout'
import { Info } from '../../Components/Info'
import {
  DescriptionSide,
  ImageBackground,
  InfoSide,
  IntroSection,
  LeftSide,
  ProjectContent,
  RightSide,
  ImageArea,
  ImageProject,
} from '../../styles/pages/project/styles'
import parse from 'html-react-parser'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

export default function Project() {
  const router = useRouter()
  const { id } = router.query

  const { t: translate } = useTranslation('projects')

  function getData(field: string) {
    return translate(`ProjectsData.${Number(id) - 1}.${field}`)
  }

  return (
    <DefaultLayout>
      <IntroSection className="container">
        <hr />
        <h1>{getData('title')}</h1>
        <p>{getData('shortDescription')}</p>
      </IntroSection>

      <ImageBackground>
        <ImageArea className="container">
          <ImageProject
            src={getData('imageUrl')}
            width={1007}
            height={547}
            alt=""
          />
        </ImageArea>
      </ImageBackground>

      <DescriptionSide className="container">
        <LeftSide>
          <InfoSide>
            <Info title="CLIENT">{getData('client')}</Info>
            <Info title="SERVICES">{getData('services')}</Info>
            <Info title="TECHNOLOGIES">{getData('technologies')}</Info>
            <Info title="WEBSITE">{getData('website')}</Info>
          </InfoSide>
        </LeftSide>
        <RightSide>
          <ProjectContent>{parse(getData('description'))}</ProjectContent>
        </RightSide>
      </DescriptionSide>
    </DefaultLayout>
  )
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  }
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(
        locale,
        ['common', 'navbar', 'projects'],
        null,
        ['en', 'pt-BR'],
      )),
    },
  }
}
