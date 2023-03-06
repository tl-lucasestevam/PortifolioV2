import { ArrowRight } from 'phosphor-react'
import {
  Avatar,
  BottomSide,
  DescriptionSide,
  FooterArea,
  FooterContainer,
  LeftSide,
  LinkButton,
  ListIcons,
  ListItems,
  NavLink,
  RightSide,
  TopSide,
} from './styles'

import LinkedinSvg from '../../assets/linkedin.svg'
import GithubSvg from '../../assets/github.svg'
import memoji from '../../assets/memoji.png'

import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { ILink } from '../Header'

export function Footer() {
  const { t: translateNavbar } = useTranslation('navbar')

  const { t: translateFooter } = useTranslation('footer')

  const navbarData = translateNavbar('Links', {
    returnObjects: true,
  }) as Array<ILink>

  return (
    <FooterContainer>
      <FooterArea className="container">
        <TopSide>
          <LeftSide>
            <Avatar>
              <Image src={memoji} alt="" width={86} height={94} />
            </Avatar>
            <DescriptionSide>
              <h1>David Augusto</h1>
              <h3>{translateFooter('Web Developer')}</h3>
            </DescriptionSide>
          </LeftSide>
          <RightSide>
            <LinkButton href="mailto:davidribeiro086@gmail.com">
              <h1>{translateFooter('Get In Touch')}</h1>
              <ArrowRight size={53} weight="bold" color="#36C768" />
            </LinkButton>
          </RightSide>
        </TopSide>

        <hr />

        <BottomSide>
          <ListItems>
            {navbarData.map((link, index) => {
              return (
                <NavLink href={link.href} key={index}>
                  {link.title}
                </NavLink>
              )
            })}
          </ListItems>

          <ListIcons>
            <Image src={LinkedinSvg} width="34" height="34" alt="" />
            <Image src={GithubSvg} width="34" height="34" alt="" />
          </ListIcons>
        </BottomSide>
      </FooterArea>
    </FooterContainer>
  )
}
