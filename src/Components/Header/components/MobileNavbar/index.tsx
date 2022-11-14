import { useState } from 'react'
import { navbarData } from '../..'
import {
  HamburgerMenu,
  MobileListItems,
  MobileNavbarContainer,
  MobileNavLink,
} from './styles'

export function MobileNavbar() {
  const [isOpen, setOpen] = useState(false)
  return (
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
  )
}
