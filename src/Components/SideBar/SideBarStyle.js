import styled from "styled-components";
import {BrowserRouter as Router, NavLink } from 'react-router-dom'


export const SideBarMain =styled.div`
    background: #5ba56e;
    height: fit-content;
    width:100vw;
    padding: 2em;
    position:fixed;
    display: grid;
    align-items: center;
    justify-content: center;


`

export const SideBarElements = styled.div`
    display: grid;
`
export const SideBarLink = styled(NavLink)`

`