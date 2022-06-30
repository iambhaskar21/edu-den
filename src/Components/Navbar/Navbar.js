import React from 'react'
import { NavbarElements, NavbarHeader, NavbarMain } from './NavbarStyle'

export const Navbar = () => {
  return (
    <>
    <NavbarMain>
        <NavbarHeader>
            Header
        </NavbarHeader>

        <NavbarElements>
            <div>
                ITem 1
            </div>
            <div>
                Item 2
            </div>
            <div>
                Item 3
            </div>
        </NavbarElements>
    </NavbarMain>
    </>
  )
}
