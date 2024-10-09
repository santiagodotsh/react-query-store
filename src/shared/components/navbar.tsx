import { NavLink } from 'react-router-dom'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button
} from '@nextui-org/react'
import { AcmeLogo } from './acme-logo'
import styles from './navbar.module.css'

const routes = [
  { to: '/', text: 'All' },
  { to: '/men', text: 'Men' },
  { to: '/women', text: 'Women' }
]

export function NavBar() {
  return (
    <Navbar>
      <NavbarBrand>
        <AcmeLogo />

        <p className='font-bold text-inherit'>
          ACME
        </p>
      </NavbarBrand>

      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        {routes.map(({ to, text }) => (
          <NavbarItem key={to}>
            <NavLink
              to={to}
              className={({ isActive }) => isActive? styles.active : styles.inactive }
            >
              {text}
            </NavLink>
          </NavbarItem>
          ))
        }
      </NavbarContent>

      <NavbarContent justify='end'>
        <NavbarItem>
          <Button
            as={NavLink}
            color='primary'
            to='/new'
            variant='flat'
          >
            New product
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
