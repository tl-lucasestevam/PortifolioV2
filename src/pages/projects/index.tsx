import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ProjectCard } from '../../Components/ProjectCard'
import { DefaultLayout } from '../../Layouts/DefaultLayout'
import {
  IntroSection,
  ProjectsArea,
  ProjectsContainer,
} from '../../styles/pages/projects/styles'

export default function Projects() {
  const { t: translate } = useTranslation('projects')

  return (
    <DefaultLayout>
      <ProjectsContainer className="container">
        <IntroSection>
          <hr />
          <h1>{translate('Portfolio')}</h1>
          <p>{translate('Description')}</p>
        </IntroSection>

        <ProjectsArea>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
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
