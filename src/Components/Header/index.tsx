import { MobileNavbar } from './components/MobileNavbar'
import { HeaderContainer, ListItems, NavLink } from './styles'
import { useTranslation } from 'react-i18next'

export interface ILink {
  title: string
  href: string
}

export function Header() {
  const { t: translate } = useTranslation('navbar')

  const navbarData = translate('Links', {
    returnObjects: true,
  }) as Array<ILink>

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
