import {
  AboutContainer,
  AboutContent,
  DescriptionArea,
  DescriptionSide,
  ImageBanner,
  ImageSide,
  PersonalInfo,
  TitleSection,
  ToggleGroupContainer,
  ToggleItem,
} from './styles'

import BorderSvg from '../../assets/border.svg'

import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import parse from 'html-react-parser'

export function About() {
  const { t: translate } = useTranslation(['about'])
  const [value, setValue] = useState('Bio')

  return (
    <AboutContainer>
      <div className="container">
        <TitleSection data-aos="fade-right" data-aos-duration="800">
          {translate('About').toUpperCase()}
        </TitleSection>

        <AboutContent>
          <ImageSide
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="300"
            data-aos-easing="ease-in-out"
          >
            <ImageBanner
              src={BorderSvg}
              width={381}
              height={502}
              alt=""
            ></ImageBanner>
          </ImageSide>
          <DescriptionSide
            data-aos="fade-in"
            data-aos-duration="800"
            data-aos-delay="700"
          >
            <ToggleGroupContainer
              type="single"
              value={value}
              onValueChange={(value) => {
                if (value) setValue(value)
              }}
            >
              <ToggleItem value="Bio">{translate('Bio')}</ToggleItem>
              <ToggleItem value="Education">
                {translate('Education')}
              </ToggleItem>
              <ToggleItem value="Experience">
                {translate('Experience')}
              </ToggleItem>
            </ToggleGroupContainer>

            <DescriptionArea>
              {parse(translate(`Options.${value}`))}

              {value === 'Bio' && (
                <PersonalInfo>
                  {Object.keys(
                    translate('BioInfo', { returnObjects: true }),
                  ).map((info) => {
                    return (
                      <div key="info">
                        {parse(translate(`BioInfo.${info}`))}
                      </div>
                    )
                  })}
                </PersonalInfo>
              )}
            </DescriptionArea>
          </DescriptionSide>
        </AboutContent>
      </div>
    </AboutContainer>
  )
}
