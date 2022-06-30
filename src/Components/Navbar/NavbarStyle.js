import styled from 'styled-components';
import {BrowserRouter as Router, NavLink } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'



export const NavbarMain = styled.div`
    background: #5ba56e;
    display:none;
    display: flex;
    height: 8vh;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    position: relative;
    margin-top: 0px;
    margin-right: auto;
    margin-bottom: 0px;
    margin-left: auto;
    color: white;
    
`;

export const NavbarHeader = styled.div`
    display: block;
    padding-left:2em;
    font-size:xx-large;
    cursor: pointer;
    
`

export const NavbarElements = styled.div`
    display: flex;
    float: right;
    width: 30vw;
    justify-content: space-around;
    

`
export const NavBarLink= styled(NavLink)`
    color: white;
    text-decoration: none;
    cursor: pointer;
    @media (max-width: 768px) {
    display:none;
  }
    
`
export const ClickIcon=styled(FaBars)`
    font-size: 2em;
    color: white;
    padding-right:1em;
    @media (min-width:768px) {
        display: none;
    }
   
`