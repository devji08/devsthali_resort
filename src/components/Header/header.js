import React, {useState, useEffect} from 'react';
import { Button } from '../../globalStyles';
import {
    Nav,
    NavbarContainer, 
    NavIcon, 
    NavLogo, 
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    NavBtnLink
} from './navbar.elements';
import {FaBars, FaTimes} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

const Header = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton()
    }, []);

    return(
        <>
            <IconContext.Provider value={{ color: '#fff'}}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to = "/" onClick={closeMobileMenu}>
                            <NavIcon/>
                            Devsthali Resort
                        </NavLogo>
                        <MobileIcon onClick = {handleClick}>
                            {click ? <FaTimes/> : <FaBars/>}
                        </MobileIcon>
                        <NavMenu onClick ={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to="/rooms">
                                    FIND BOOKING
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/events">
                                    PLAN AN EVENT
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/contact-us">
                                    CONTACT US
                                </NavLinks>
                            </NavItem>
                            <NavItemBtn>
                                {button ? (
                                    <NavBtnLink to = "/sign-in">
                                        <Button primary>SIGN IN</Button>
                                    </NavBtnLink>
                                ) : (
                                    <NavBtnLink to = "/sign-in">
                                        <Button fontBig primary>
                                            SIGN IN
                                        </Button>
                                    </NavBtnLink>
                                )}
                            </NavItemBtn>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Header;