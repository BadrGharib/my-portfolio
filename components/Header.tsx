import React, { ReactElement } from 'react'
import NavBar, { NavItem } from './controls/NavBar'
function Header (): ReactElement {
  const items: NavItem[] = [
    {
      title: 'Skills',
      href: '#Skills'
    },
    {
      title: 'Education',
      href: '#Education'
    },
    {
      title: 'Experiance',
      href: '#Experiance'
    },
    {
      title: 'Projects',
      href: '#Projects'
    },
    {
      title: 'Certifications',
      href: '#Certifications'
    },
    {
      title: 'Languages',
      href: '#Languages'
    },
    {
      title: 'ConatctMe',
      href: '#ConatctMe'
    }
  ]
  return (
    <div className="fixed top-0 left-0 px-1 sm:px-[10%] w-full z-[10]">
      <NavBar logo="/imgs/badr.jpg" items={items} title="BADR GHARIB" />
    </div>
  )
}

export default Header
