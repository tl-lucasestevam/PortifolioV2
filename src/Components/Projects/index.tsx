import { ArrowRight } from 'phosphor-react'
import { Button } from '../Button'
import { TitleSection } from '../TitleSection'
import {
  DescriptionSide,
  LeftSide,
  ProjectsArea,
  ProjectsContainer,
  RightSide,
} from './styles'

export function Projects() {
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

            {/* <ProjectCard /> */}
          </LeftSide>

          <RightSide>
            {/* <ProjectCard /> */}

            {/* <ProjectCard /> */}
          </RightSide>
        </ProjectsArea>
      </div>
    </ProjectsContainer>
  )
}
