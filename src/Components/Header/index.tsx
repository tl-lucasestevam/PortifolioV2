import { MobileNavbar } from './components/MobileNavbar'
import { HeaderContainer, ListItems, NavLink } from './styles'

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

      <MobileNavbar />
    </HeaderContainer>
  )
}
