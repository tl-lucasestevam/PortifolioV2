import {
  ExperienceCard,
  ExperienceDescription,
  ExperienceInfoContainer,
} from './styles'
import { useTranslation } from 'next-i18next'
import parse from 'html-react-parser'

interface IExperienceInfo {
  title: string
  description: string
  period: string
  company: string
}

export function ExperienceInfo() {
  const { t: translate } = useTranslation(['about'])

  const data: IExperienceInfo[] = translate('ExperienceInfo', {
    returnObjects: true,
  })

  return (
    <ExperienceInfoContainer data-aos="fade" data-aos-duration="800">
      {data.map((item) => {
        return (
          <ExperienceCard key={item.title}>
            <span>{item.period}</span>
            <h3>{item.title}</h3>
            <h4>{item.company}</h4>
            <ExperienceDescription>
              {parse(item.description)}
            </ExperienceDescription>
            <hr />
          </ExperienceCard>
        )
      })}
    </ExperienceInfoContainer>
  )
}
