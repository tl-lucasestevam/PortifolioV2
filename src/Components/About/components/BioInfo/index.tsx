import { useTranslation } from 'next-i18next'
import { PersonalInfo } from './styles'
import parse from 'html-react-parser'

export function BioInfo() {
  const { t: translate } = useTranslation(['about'])

  return (
    <>
      {parse(translate(`Options.Bio`))}

      <PersonalInfo>
        {Object.keys(translate('BioInfo', { returnObjects: true })).map(
          (info) => {
            return <div key="info">{parse(translate(`BioInfo.${info}`))}</div>
          },
        )}
      </PersonalInfo>
    </>
  )
}
