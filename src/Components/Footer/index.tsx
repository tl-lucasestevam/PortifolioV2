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
import Image from 'next/image'

export const navbarData = [
  {
    title: 'Home',
    href: '#',
  },
  {
    title: 'About',
    href: '#',
  },
  {
    title: 'Projects',
    href: '#',
  },
  {
    title: 'Contact',
    href: '#',
  },
  {
    title: 'Blog',
    href: '#',
  },
]

export function Footer() {
  return (
    <FooterContainer>
      <FooterArea className="container">
        <TopSide>
          <LeftSide>
            <Avatar></Avatar>
            <DescriptionSide>
              <h1>David Augusto</h1>
              <h3>Web Developer</h3>
            </DescriptionSide>
          </LeftSide>
          <RightSide>
            <LinkButton href="#">
              <h1>Get In Touch</h1>
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
