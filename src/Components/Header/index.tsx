import {
  HamburgerMenu,
  HeaderContainer,
  ListItems,
  MobileListItems,
  MobileNavbarContainer,
  MobileNavLink,
  NavLink,
} from './styles'
import { useState } from 'react'

const navbarData = [
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

export function Header() {
  const [isOpen, setOpen] = useState(false)

  return (
    <HeaderContainer className="container">
      <ListItems>
        {navbarData.map((link, index) => {
          return (
            <NavLink href={link.href} key={index}>
              {link.title}
            </NavLink>
          )
        })}
      </ListItems>

      <MobileNavbarContainer>
        <HamburgerMenu toggled={isOpen} toggle={setOpen} />

        <MobileListItems toggled={isOpen}>
          {navbarData.map((link, index) => {
            return (
              <MobileNavLink toggled={isOpen} href={link.href} key={index}>
                {link.title}
              </MobileNavLink>
            )
          })}
        </MobileListItems>
      </MobileNavbarContainer>
    </HeaderContainer>
  )
}
