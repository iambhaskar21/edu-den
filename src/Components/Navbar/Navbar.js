import React, {useState,useEffect} from 'react'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import { NavbarElements, NavbarHeader, NavbarMain, NavBarLink, ClickIcon, SideBarLink, SideBarElements, SideBarMain } from './NavbarStyle'
import { AboutUs } from '../Pages/About/AboutUs'
import { NoPage } from '../Pages/NoPage/NoPage'
import { Home } from '../Pages/Home/Home'
import { ContactUs } from '../Pages/Contact/ContactUs'
import '../CSS/globalStyle.css'
export const Navbar = () => {
  const [showToggle, setShowToggle]=useState(false);
  useEffect(() => console.log(showToggle), [showToggle]);
  return (
    <>
   


    <BrowserRouter>
    <NavbarMain>
        <NavbarHeader>
            Header
        </NavbarHeader>
      
        <NavbarElements>
         
          <NavBarLink to='/' exact activeclassname="active" > Home</NavBarLink>
          <NavBarLink to='/about'  activeclassname="active"> About</NavBarLink>
          <NavBarLink to='/contact' activeclassname="active"> Contact</NavBarLink>
          <div  onClick={()=> setShowToggle(!showToggle)}>
        <ClickIcon  className='toggleOn'/>
        </div>
        </NavbarElements>
        
        
       
    </NavbarMain>
    

    <SideBarMain toggleStatus={showToggle}>
        <SideBarElements>
          <SideBarLink to='/' exact activeclassname="active" onClick={()=> setShowToggle(!showToggle)} > Home</SideBarLink>
          <SideBarLink to='/about'  activeclassname="active" onClick={()=> setShowToggle(!showToggle)}> About</SideBarLink>
          <SideBarLink to='/contact' activeclassname="active" onClick={()=> setShowToggle(!showToggle)}> Contact</SideBarLink>    
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
