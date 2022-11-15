import { useTranslation } from 'next-i18next'
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
  const { t: translate } = useTranslation('navbar')

  return (
    <MobileNavbarContainer>
      <HamburgerMenu toggled={isOpen} toggle={setOpen} />

      <MobileListItems toggled={isOpen}>
        {navbarData.map((link, index) => {
          return (
            <MobileNavLink toggled={isOpen} href={link.href} key={index}>
              {translate(link.title)}
            </MobileNavLink>
          )
        })}
      </MobileListItems>
    </MobileNavbarContainer>
  )
}
