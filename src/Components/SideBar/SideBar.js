import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SideBarElements, SideBarLink, SideBarMain } from './SideBarStyle'
import '../CSS/globalStyle.css'
import { Home } from '../Pages/Home/Home'
import { AboutUs } from '../Pages/About/AboutUs'
import { ContactUs } from '../Pages/Contact/ContactUs'
import { NoPage } from '../Pages/NoPage/NoPage'


export const SideBar = () => {
  return (
    <>
    <BrowserRouter>
    <SideBarMain>
        <SideBarElements>
          <SideBarLink to='/' exact activeclassname="active" > Home</SideBarLink>
          <SideBarLink to='/about'  activeclassname="active"> About</SideBarLink>
          <SideBarLink to='/contact' activeclassname="active"> Contact</SideBarLink>    
        </SideBarElements>
    </SideBarMain>

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
