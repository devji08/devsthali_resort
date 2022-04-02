import React from 'react';
import ContactSection from '../../components/ContactSection/ContactSection';
import { ContactObjOne, BreadcrumbProps, salesOfficeObj} from './Data.js';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'

const ContactUs = () => {
    return (
        <>
            <Breadcrumb props={BreadcrumbProps}/>
            <ContactSection {...ContactObjOne} salesObj={salesOfficeObj}></ContactSection>
        </>
    )
}

export default ContactUs;