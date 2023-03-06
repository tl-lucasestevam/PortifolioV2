import Image from 'next/image'
import { ArrowRight } from 'phosphor-react'
import { Button } from '../Button'
import {
  DescriptionSide,
  ImageSide,
  IntroContainer,
  Shape,
  Squares,
  TextBox,
} from './styles'

import reactLogo from '../../assets/react.svg'
import nodeLogo from '../../assets/node.svg'
import { useTranslation } from 'next-i18next'
import parse from 'html-react-parser'
import Link from 'next/link'

export function Intro() {
  const { t: translate } = useTranslation(['home'])

  return (
    <IntroContainer className="container">
      <DescriptionSide
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="800"
        data-aos-easing="ease-in-out"
      >
        <TextBox className="container">
          <div>
            <h1>{parse(translate('Title'))}</h1>
            <p>{translate('Description')}</p>
          </div>

          <Link href="/#about">
            <Button
              bg="outlined"
              text={translate('ButtonTitle')}
              icon={<ArrowRight size={24} weight="bold" />}
            />
          </Link>
        </TextBox>
      </DescriptionSide>
      <ImageSide>
        <Shape
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
        >
          <Image
            src="
            https://s3-alpha-sig.figma.com/img/13ac/c9c2/19b83506ae80ef2b1b373f92dadae88c?Expires=1679270400&Signature=TGAKTSA~YOvsygjOliezNqaFQLnTTSKw4US~a8sFOwY4BnxYMJE5Y-RR0SjV49j8JgB6KjWzjW4eLHlEMdEImg8bInFkpgXqT9r9-Ib1dpxxeaQ5VLr4z8SoaK3MTuN5XPYlGEMU2l9mkJZWoWTp~qM5Dn-u5JTkKOBCqEzqKf4c3ZhNaqTC0bhn0jq00WXTDebQkdF7xnPhpY-2ELDbvUYKJP5YXu0kB5lRkyNgrE1UHOlAPJBnX3mD1oKM5xb0XchkHZ9tvvVj0R0XyZ9Tbm8axJ3e0bNdcw8BT6~M9VI8MVYJDZ~LpFqUYxtB4DmRcmdlhGRCG9PmJllajy3MMA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4
  "
            width={221}
            height={242}
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            alt=""
          />
          <Squares
            className="left-bottom"
            data-aos="fade-up"
            data-aos-offset="1"
            data-aos-delay="500"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
          >
            <Image src={reactLogo} width={82} height={73.02} alt="" />
          </Squares>
          <Squares
            className="right-top"
            data-aos="fade-up"
            data-aos-offset="1"
            data-aos-delay="500"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <Image src={nodeLogo} width={62.82} height={77.82} alt="" />
          </Squares>
        </Shape>
      </ImageSide>
    </IntroContainer>
  )
}
