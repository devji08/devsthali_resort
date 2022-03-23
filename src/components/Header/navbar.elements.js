import styled from 'styled-components'
import {Container} from '../../globalStyles'
import { FaMagento } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
background: #101522;
height: 60px;
display: flex;
justify-content: center;
align-items: center;
font-size: 0.8rem;
position: sticky;
top: 0;
z-index: 1000;
`

export const NavbarContainer = styled(Container)`
display: flex;
justify-content: space-between;
height: 60px;

${Container}
`;

export const NavLogo = styled(Link)`
color: #fff;
justify-self: flex-start;
cursor: pointer;
text-decoration: none;
// font-family: Barbershop-in-Thailand;
font-size: 1.5rem;
display: flex;
align-items: center;
`

export const NavIcon = styled(FaMagento)`
margin-right: 0.5rem;
`
export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 30%);
    font-size: 1.8rem;
    cursor: pointer;
}
`

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;

@media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 95vh;
    position: absolute;
    top: 60px;
    left: ${({click}) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
}
`;

export const NavItem = styled.li`
height: 50px;
border-bottom: 2px solid transparent;

&:hover {
    border-bottom: 2px solid #4b59f7;
}

@media screen and (max-width: 960px){
    width: 100%;
    display : flex;
    justify-content: center;
    align-items: center;

    &:hover {
        border: none;
    }
}
`
export const NavLinks = styled(Link)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0.5rem 1rem;
height: 100%;
letter-spacing: 3px;

@media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    widht: 100%
    display: table;

    &:hover {
        color: #4b59f7;
        transition: all 0.3 ease;
    }
}
`;

export const NavItemBtn = styled.li`
@media screen and (max-width: 960px) {
    display : flex;
    justify-content: center;
    align-items: center;
    widht: 100%;
    height: 120px;
}
`

export const NavBtnLink = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
padding: 8px 10px;
height: 100%;
width: 100%;
border: none;
outline: none;
`