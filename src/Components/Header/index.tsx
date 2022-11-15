import { MobileNavbar } from './components/MobileNavbar'
import { HeaderContainer, ListItems, NavLink } from './styles'
import { useTranslation } from 'react-i18next'

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

export function Header() {
  const { t: translate } = useTranslation('navbar')

  return (
    <HeaderContainer className="container">
      <ListItems>
        {navbarData.map((link, index) => {
          return (
            <NavLink href={link.href} key={index}>
              {translate(link.title)}
            </NavLink>
          )
        })}
      </ListItems>

      <MobileNavbar />
    </HeaderContainer>
  )
}
