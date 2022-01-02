import React from 'react';
import {ContactSec, ContactRow, ContactCol, Title, Statement, ContactWrapper, Resort, Address, Direction, Phone, Email, Line, ImgWrapper, Img, FormRow, FormCol, Label, TextField, TextArea, Term} from './ContactSection.elements.js';
import { Container, Button } from '../../globalStyles';

const FormSec = () => {
    return(
        <FormRow>
            <FormCol>
                <Label>First name <sup>*</sup></Label>
                <TextField></TextField>
            </FormCol>
            <FormCol>
                <Label>Last name <sup>*</sup></Label>
                <TextField></TextField>
            </FormCol>
            <FormCol>
                <Label>Email address <sup>*</sup></Label>
                <TextField></TextField>
            </FormCol>
            <FormCol>
                <Label>Phone number <sup>*</sup></Label>
                <TextField></TextField>
            </FormCol>
            <FormCol>
                <Label>How can we help you ?</Label>
                <TextArea></TextArea>
            </FormCol>
            <FormCol>
                <Button big fontBig>Submit</Button>
                <Term>By clicking submit, you agree to Devsathali Terms and processing of your personal data as described in our Privacy Policy.</Term>
            </FormCol>
        </FormRow>
    )
}

const ContactSection = ({title, statement, resort, address, direction, phone, email, img, alt, title2, statement2, statement3, statement4}) => {
    return (
        <>
        <ContactSec>
            <Container>
                <ContactRow>
                    <ContactCol>
                        <Title>{title}</Title>
                        <Statement>{statement}</Statement>
                        <ContactWrapper>
                            <Resort>{resort}</Resort>
                            <Address>{address}</Address>
                            <Phone>Phone: {phone}</Phone>
                            <Email>Email: {email}</Email>
                            <Direction href = {direction} target = "_blank">Get Direction →</Direction>
                        </ContactWrapper>
                    </ContactCol>
                    <ContactCol>
                        <ImgWrapper>
                            <Img src = {img} alt = {alt}></Img>
                        </ImgWrapper>
                    </ContactCol>
                </ContactRow>
                <Line></Line>
                <ContactRow>
                    <ContactCol>
                        <Title>{title2}</Title>
                        <Statement>{statement2}</Statement>
                        <Statement>{statement3}</Statement>
                        <Statement>{statement4}</Statement>
                        <ImgWrapper>
                            <Img src = {img} alt = {alt}></Img>
                        </ImgWrapper>
                    </ContactCol>
                        <FormSec/>
                </ContactRow>
            </Container>
        </ContactSec>
        </>
    )
}

export default ContactSection;