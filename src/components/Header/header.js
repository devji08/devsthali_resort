import React, {useState, useEffect} from 'react';
import { Button } from '../../globalStyles';
import {
    Nav,
    NavbarContainer, 
    NavLogo, 
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    NavBtnLink
} from './navbar.elements';
import Logo from '../../images/DBR_Logo.png'
import styles from './header.module.css'
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
                                <img src={Logo} className = {styles.logo} alt = 'Logo'/>
                            Devsthali Brar Resort
                        </NavLogo>
                        <MobileIcon onClick = {handleClick}>
                            {click ? <FaTimes/> : <FaBars/>}
                        </MobileIcon>
                        <NavMenu onClick ={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to="/">
                                    HOME
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/about-us">
                                    ABOUT US
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/rooms">
                                    OUR ROOMS
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/events">
                                    PLAN AN EVENT
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/gallery">
                                    GALLERY
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/contact-us">
                                    CONTACT US
                                </NavLinks>
                            </NavItem>
                            <NavItemBtn>
                                {button ? (
                                    <NavBtnLink to = "/">
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