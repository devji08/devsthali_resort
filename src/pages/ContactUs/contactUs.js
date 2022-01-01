import React from 'react';
import ContactSection from '../../components/ContactSection/ContactSection';
import {ContactObjOne} from './Data.js';

const ContactUs = () => {
    return (
        <>
        <ContactSection {...ContactObjOne}></ContactSection>
        </>
    )
}

export default ContactUs;