import { EducationCard, EducationInfoContainer } from './styles'
import { useTranslation } from 'next-i18next'

interface IEducationInfo {
  title: string
  description: string
  period: string
  company: string
}

export function EducationInfo() {
  const { t: translate } = useTranslation(['about'])

  const data: IEducationInfo[] = translate('EducationInfo', {
    returnObjects: true,
  })

  return (
    <EducationInfoContainer data-aos="fade" data-aos-duration="800">
      {data.map((item) => {
        return (
          <EducationCard key={item.title}>
            <span>{item.period}</span>
            <h3>{item.title}</h3>
            <h4>{item.company}</h4>
            <p>{item.description}</p>
            <hr />
          </EducationCard>
        )
      })}
    </EducationInfoContainer>
  )
}
