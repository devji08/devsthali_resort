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
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcon,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './footer.elements';

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
                        <FooterLink to='/'>Rooms</FooterLink>
                        <FooterLink to='/'>Gallery</FooterLink>
                        <FooterLink to='/'>Career</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Celebrate</FooterLinkTitle>
                        <FooterLink to='/'>Weddings at Devsthali Resort</FooterLink>
                        <FooterLink to='/'>Meetingst</FooterLink>
                        <FooterLink to='/'>Events</FooterLink>
                        <FooterLink to='/'>Conference</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>Discover</FooterLinkTitle>
                        <FooterLink to='/'>About Us</FooterLink>
                        <FooterLink to='/'>The Press Room</FooterLink>
                        <FooterLink to='/'>Our Newsletter</FooterLink>
                        <FooterLink to='/'>Our Blog</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Connect</FooterLinkTitle>
                        <FooterLink to='/'>Contact Us</FooterLink>
                        <FooterLink to='/'>Instagram</FooterLink>
                        <FooterLink to='/'>Facebook</FooterLink>
                        <FooterLink to='/'>Twitter</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>
                        <SocialIcon/>
                        Devstahli Resort
                    </SocialLogo>
                    <WebsiteRights>Devsthali Resort © 2021</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/' targer="_blank" aria-label="Facebook">
                            <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink href='/' targer="_blank" aria-label="Instagram">
                            <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href='/' targer="_blank" aria-label="YouTube">
                            <FaYoutube/>
                        </SocialIconLink>
                        <SocialIconLink href='/' targer="_blank" aria-label="Twitter">
                            <FaTwitter/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
