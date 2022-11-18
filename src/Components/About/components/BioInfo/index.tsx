import { useTranslation } from 'next-i18next'
import { BioInfoContainer, PersonalInfo } from './styles'
import parse from 'html-react-parser'

export function BioInfo() {
  const { t: translate } = useTranslation(['about'])

  return (
    <BioInfoContainer data-aos="fade" data-aos-duration="800">
      {parse(translate(`Options.Bio`))}

      <PersonalInfo>
        {Object.keys(translate('BioInfo', { returnObjects: true })).map(
          (info) => {
            return <div key="info">{parse(translate(`BioInfo.${info}`))}</div>
          },
        )}
      </PersonalInfo>
    </BioInfoContainer>
  )
}
