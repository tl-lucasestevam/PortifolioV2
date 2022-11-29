import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ProjectCard } from '../../Components/ProjectCard'
import { DefaultLayout } from '../../Layouts/DefaultLayout'
import {
  IntroSection,
  ProjectsArea,
  ProjectsContainer,
} from '../../styles/pages/projects/styles'

export interface IProjectInfo {
  id: number
  title: string
  shortDescriptions: string
  client: string
  services: string
  technologies: Array<string>
  link: string
  description: string
  imageUrl: string
}

export default function Projects() {
  const { t: translate } = useTranslation('projects')

  const data: Array<IProjectInfo> = translate('ProjectsData', {
    returnObjects: true,
  })

  return (
    <DefaultLayout>
      <ProjectsContainer className="container">
        <IntroSection>
          <hr />
          <h1>{translate('Portfolio')}</h1>
          <p>{translate('Description')}</p>
        </IntroSection>

        <ProjectsArea>
          {data.map((project) => {
            return <ProjectCard key={project.id} data={project} />
          })}
        </ProjectsArea>
      </ProjectsContainer>
    </DefaultLayout>
  )
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
