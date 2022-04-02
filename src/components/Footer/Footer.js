import React from 'react'
import { Button} from '../../globalStyles'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter} from 'react-icons/fa'
import {
    FooterContainer,
    FooterSubscription,
    FooterSubHeading,
    FooterSubText,
    Form,
    FormInput,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItems,
    FooterLinkTitle,
    FooterLink,
    SocialMediaLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './footer.elements';
import Logo from '../../images/DBR_Logo.png'
import styles from './footer.module.css'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join our newsletter to recieve the latest news and trends.
                </FooterSubHeading>
                <FooterSubText>
                    You can unsubscribe at any time.
                </FooterSubText>
                <Form>
                    <FormInput name = "email" type="email" placeholder="Your Email"/>
                    <Button fontBig>Subscribe</Button>
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>Explore & Experience</FooterLinkTitle>
                        <FooterLink to='/rooms'>Rooms</FooterLink>
                        <FooterLink to='/gallery'>Gallery</FooterLink>
                        <FooterLink to='/'>Career</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Celebrate</FooterLinkTitle>
                        <FooterLink to='/events'>Weddings</FooterLink>
                        <FooterLink to='/events'>Meetings</FooterLink>
                        <FooterLink to='/events'>Events</FooterLink>
                        <FooterLink to='/events'>Conference</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>Discover</FooterLinkTitle>
                        <FooterLink to='/about-us'>About Us</FooterLink>
                        <FooterLink to='/'>The Press Room</FooterLink>
                        <FooterLink to='/'>Our Newsletter</FooterLink>
                        <FooterLink to='/'>Our Blog</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <SocialMediaLink href='https://www.youtube.com/channel/UCbFt_aqSKdGyVBeensuUwFg' target='_blank'>Youtube</SocialMediaLink>
                        <SocialMediaLink href='https://www.instagram.com/devsthalibrarresort/' target='_blank'>Instagram</SocialMediaLink>
                        <SocialMediaLink href='https://www.facebook.com/Devsthali-Brar-Resort-101768892474406' target='_blank'>Facebook</SocialMediaLink>
                        <SocialMediaLink href='https://twitter.com/DevsthaliR' target='_blank'>Twitter</SocialMediaLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>
                        <div style = {{height: '100%'}}>
                            <img src={Logo} className = {styles.logo} alt = 'Logo'/>
                        </div>
                        Devsthali Brar Resort
                    </SocialLogo>
                    <WebsiteRights>Devsthali Brar Resort © 2021</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='https://www.facebook.com/Devsthali-Brar-Resort-101768892474406' target="_blank" aria-label="">
                            <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink href='https://www.instagram.com/devsthalibrarresort/' target="_blank" aria-label="Instagram">
                            <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href='https://www.youtube.com/channel/UCbFt_aqSKdGyVBeensuUwFg' target="_blank" aria-label="YouTube">
                            <FaYoutube/>
                        </SocialIconLink>
                        <SocialIconLink href='https://twitter.com/DevsthaliR' target="_blank" aria-label="Twitter">
                            <FaTwitter/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
