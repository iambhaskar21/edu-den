import React from 'react'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import { NavbarElements, NavbarHeader, NavbarMain, NavBarLink, ClickIcon } from './NavbarStyle'
import { AboutUs } from '../Pages/About/AboutUs'
import { NoPage } from '../Pages/NoPage/NoPage'
import { Home } from '../Pages/Home/Home'
import { ContactUs } from '../Pages/Contact/ContactUs'
import './NavStyle.css'
export const Navbar = () => {
  return (
    <>
   


    <BrowserRouter>
    <NavbarMain>
        <NavbarHeader>
            Header
        </NavbarHeader>
        <NavbarElements>
         
          <NavBarLink to='/' exact activeClassName="active" > Home</NavBarLink>
          <NavBarLink to='/about'  activeClassName="active"> About</NavBarLink>
          <NavBarLink to='/contact' activeClassName="active"> Contact</NavBarLink>
        </NavbarElements>
        <ClickIcon/>
    </NavbarMain>
   

      <Routes>
       
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<NoPage />} />
          
        
      </Routes>
    </BrowserRouter>
    </>
  )
}
