import React from 'react';
import ContactSection from '../../components/ContactSection/ContactSection';
import { ContactObjOne, BreadcrumbProps} from './Data.js';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'

const ContactUs = () => {
    return (
        <>
            <Breadcrumb props={BreadcrumbProps}/>
            <ContactSection {...ContactObjOne}></ContactSection>
        </>
    )
}

export default ContactUs;