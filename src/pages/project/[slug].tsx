/* eslint-disable array-callback-return */
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

interface IProject {
  id: string
  title: string
  shortDescription: string
  repository: string
  client: string
  services: string
  technologies: string[]
  link: string
  description: string
  imageUrl: string
  website: string
  color: string
}

export default function Project() {
  const router = useRouter()
  const { slug } = router.query

  const { t: translate } = useTranslation('projects')

  const data: IProject[] = translate(`ProjectsData`, {
    returnObjects: true,
  })

  const projectInfo = data.find((project) => {
    if (project.client.toLowerCase() === slug) {
      return project
    }
  }) as IProject

  return (
    <DefaultLayout>
      <IntroSection className="container">
        <hr />
        <h1>{projectInfo.title}</h1>
      </IntroSection>

      <ImageBackground style={{ backgroundColor: `${projectInfo.color}` }}>
        <ImageArea className="container">
          <ImageProject
            src={projectInfo.imageUrl}
            width={1007}
            height={547}
            alt=""
          />
        </ImageArea>
      </ImageBackground>

      <DescriptionSide className="container">
        <LeftSide>
          <InfoSide>
            <Info title="CLIENT">{projectInfo.client}</Info>
            <Info title="SERVICES">{projectInfo.services}</Info>
            <Info title="TECHNOLOGIES">
              {projectInfo.technologies.map((tech) => {
                return <p key={tech}>{tech}</p>
              })}
            </Info>
            <Info title="WEBSITE">
              <LinkWebsite href={projectInfo.website} target="_blank">
                <p>{translate('Visit Website')}</p>{' '}
                <ArrowUpRight size={32} weight="bold" color="#FFF" />
              </LinkWebsite>
            </Info>
            <Info title="REPOSITORY">
              <LinkWebsite href={projectInfo.repository} target="_blank">
                <p>{translate('Visit Github')}</p>{' '}
                <ArrowUpRight size={32} weight="bold" color="#FFF" />
              </LinkWebsite>
            </Info>
          </InfoSide>
        </LeftSide>
        <RightSide>
          <ProjectContent>{parse(projectInfo.description)}</ProjectContent>
        </RightSide>
      </DescriptionSide>
    </DefaultLayout>
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'codify' }, locale: 'pt-BR' },
      { params: { slug: 'codify' }, locale: 'en' },
      { params: { slug: 'petfood' }, locale: 'pt-BR' },
      { params: { slug: 'petfood' }, locale: 'en' },
      { params: { slug: 'freeplay' }, locale: 'pt-BR' },
      { params: { slug: 'freeplay' }, locale: 'en' },
      { params: { slug: 'englishchat' }, locale: 'pt-BR' },
      { params: { slug: 'englishchat' }, locale: 'en' },
      { params: { slug: 'cicle' }, locale: 'pt-BR' },
      { params: { slug: 'cicle' }, locale: 'en' },
      { params: { slug: 'navi' }, locale: 'pt-BR' },
      { params: { slug: 'navi' }, locale: 'en' },
      { params: { slug: 'mentesã' }, locale: 'pt-BR' },
      { params: { slug: 'mentesã' }, locale: 'en' },
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
