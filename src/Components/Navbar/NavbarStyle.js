import styled from 'styled-components';
import {BrowserRouter as Router, NavLink } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'



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
    color: #F8F0E3;
    font-size: large;
    outline: none;
    text-decoration: none;
    cursor: pointer;
    @media (max-width: 768px) {
    display:none;
    
  }
    &:hover{
        color:white;
    }
    
`
export const ClickIcon=styled(FaBars)`
    font-size: 2em;
    color: white;
    @media (min-width:768px) {
        display: none;
    }
    display: ${(props)=>props.toggleStatus?'grid':'block'};
   
`


export const SideBarMain =styled.div`
    background: #5ba56e;
    height:30vh;
    width:100vw;
    padding: 2em;
    position:relative;
    @media (min-width:768px) {
        display: none;
    }
    align-items: center;
    justify-content: center;
    display: ${(props)=>props.toggleStatus?'grid':'none'};

`

export const SideBarElements = styled.div`
    display: grid;
    row-gap: 1em;
    
`
export const SideBarLink = styled(NavLink)`
    color: #F8F0E3;
    text-decoration: none;
    cursor: pointer;
    grid-area: auto;
    display: flex;
    margin: 1em;
    font-size: large;
    justify-content: center;
    width: 5em;
    &:hover{
        color: white;
    }
   
`