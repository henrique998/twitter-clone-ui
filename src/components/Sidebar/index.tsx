/* eslint-disable prettier/prettier */
import {
  Bell,
  BookmarkSimple,
  DotsThreeCircle,
  Envelope,
  FileText,
  Hash,
  House,
  Pencil,
  User
} from 'phosphor-react'
import twitterLogo from '../../assets/logo-twitter.svg'
import { Button } from '../Button'
import { NavLink } from '../NavLink'

import { SidebarContainer } from './styles'

export function Sidebar() {
  return (
    <SidebarContainer>
      <img src={twitterLogo} alt="logo" className="logo" />

      <nav>
        <NavLink
          label='Home'
          path='/'
          icon={<House weight="fill" />}
        />

        <NavLink
          label='Explore'
          path='/explore'
          icon={<Hash />}
        />

        <NavLink
          label='Notifications'
          path='/notifications'
          icon={<Bell />}
        />

        <NavLink
          label='Messages'
          path='/messages'
          icon={<Envelope />}
        />

        <NavLink
          label='Bookmarks'
          path='/bookmarks'
          icon={<BookmarkSimple />}
        />

        <NavLink
          label='Lists'
          path='/lists'
          icon={<FileText />}
        />

        <NavLink
          label='Profile'
          path='/profile'
          icon={<User />}
        />

        <NavLink
          label='More'
          path='/more'
          icon={<DotsThreeCircle />}
        />
      </nav>

      <Button>
        <Pencil />
        <span>Tweet</span>
      </Button>
    </SidebarContainer>
  )
}
