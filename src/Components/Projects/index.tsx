import { useTranslation } from 'next-i18next'
import { ArrowRight } from 'phosphor-react'
import { IProjectInfo } from '../../pages/projects'
import { Button } from '../Button'
import { ProjectCard } from '../ProjectCard'
import { TitleSection } from '../TitleSection'
import {
  DescriptionSide,
  LeftSide,
  ProjectsArea,
  ProjectsContainer,
  RightSide,
} from './styles'

export function Projects() {
  const { t: translate } = useTranslation('projects')

  function getData(id: string): IProjectInfo {
    return translate(`ProjectsData.${id}`, {
      returnObjects: true,
    })
  }

  const projet1 = getData('0')
  const projet2 = getData('1')
  const projet3 = getData('2')

  return (
    <ProjectsContainer id="projects">
      <div className="container">
        <TitleSection data-aos="fade-right" data-aos-duration="800">
          PROJECTS
        </TitleSection>

        <ProjectsArea>
          <LeftSide>
            <DescriptionSide
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              <h1>Take a look at the latest projects I&apos;ve done</h1>

              <Button
                bg="outlined"
                text="See projects"
                icon={<ArrowRight size={24} weight="bold" />}
              />
            </DescriptionSide>

            <ProjectCard data={projet1} />
          </LeftSide>

          <RightSide>
            <ProjectCard data={projet2} />

            <ProjectCard data={projet3} />
          </RightSide>
        </ProjectsArea>
      </div>
    </ProjectsContainer>
  )
}
