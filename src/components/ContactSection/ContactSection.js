import React from 'react';
import {ContactSec, Title, Statement, ContactWrapper, Resort, Address, Direction, Phone, Email, Line} from './ContactSection.elements.js';
import { Container } from '../../globalStyles';

const ContactSection = ({title, statement, resort, address, direction, phone, email}) => {
    return (
        <>
        <ContactSec>
            <Container>
                <Title>{title}</Title>
                <Statement>{statement}</Statement>
                
                <ContactWrapper>
                    <Resort>{resort}</Resort>
                    <Address>{address}</Address>
                    <Phone>Phone: {phone}</Phone>
                    <Email>Email: {email}</Email>
                    <Direction href = {direction} target = "_blank">Get Direction →</Direction>
                </ContactWrapper>
            </Container>
        </ContactSec>
        <Container>
            <Line></Line>
        </Container>
        <ContactSec></ContactSec>
        </>
    )
}

export default ContactSection;