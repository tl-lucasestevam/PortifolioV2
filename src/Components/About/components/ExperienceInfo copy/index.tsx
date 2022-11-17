import { ExperienceCard } from './styles'
import { useTranslation } from 'next-i18next'

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
    <>
      {data.map((item) => {
        return (
          <ExperienceCard key={item.title}>
            <span>{item.period}</span>
            <h3>{item.title}</h3>
            <h4>{item.company}</h4>
            <p>{item.description}</p>
            <hr />
          </ExperienceCard>
        )
      })}
    </>
  )
}
