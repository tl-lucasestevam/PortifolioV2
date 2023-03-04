import { IProjectInfo } from '../../pages/projects'
import {
  DescriptionArea,
  ImageArea,
  ImageCard,
  Project,
  Tag,
  TagsArea,
} from './styles'

interface ProjectProps {
  data: IProjectInfo
}

export function ProjectCard({ data }: ProjectProps) {
  return (
    <Project
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay="400"
      href={`/project/${data.client.toLowerCase()}`}
    >
      <section>
        <TagsArea>
          {data.technologies.map((tech) => {
            return <Tag key={tech}>{tech}</Tag>
          })}
        </TagsArea>

        <DescriptionArea>
          <h2>{data.client}</h2>
          <h3>{data.title}</h3>
        </DescriptionArea>
      </section>

      <ImageArea style={{ backgroundColor: `${data.color}` }}>
        <ImageCard src={data.imageUrl} width={527} height={274} alt="" />
      </ImageArea>
    </Project>
  )
}
