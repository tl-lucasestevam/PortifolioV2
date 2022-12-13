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
  LinkWebsite,
} from '../../styles/pages/project/styles'
import parse from 'html-react-parser'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { ArrowUpRight } from 'phosphor-react'

export default function Project() {
  const router = useRouter()
  const { id } = router.query

  const { t: translate } = useTranslation('projects')

  function getData(field: string) {
    return translate(`ProjectsData.${Number(id) - 1}.${field}`, {
      returnObjects: true,
    })
  }

  const technologies: Array<string> = translate(
    `ProjectsData.${Number(id) - 1}.technologies`,
    {
      returnObjects: true,
    },
  )

  return (
    <DefaultLayout>
      <IntroSection className="container">
        <hr />
        <h1>{getData('title')}</h1>
        <p>{getData('shortDescription')}</p>
      </IntroSection>

      <ImageBackground style={{ backgroundColor: `${getData('color')}` }}>
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
            <Info title="TECHNOLOGIES">
              {technologies.map((tech) => {
                return <p key={tech}>{tech}</p>
              })}
            </Info>
            <Info title="WEBSITE">
              <LinkWebsite href={getData('website')}>
                <p>{translate('Visit Website')}</p>{' '}
                <ArrowUpRight size={32} weight="bold" color="#FFF" />
              </LinkWebsite>
            </Info>
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
    paths: [
      { params: { id: '1' }, locale: 'pt-BR' },
      { params: { id: '1' }, locale: 'en' },
      { params: { id: '2' }, locale: 'pt-BR' },
      { params: { id: '2' }, locale: 'en' },
    ],
    fallback: false,
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
