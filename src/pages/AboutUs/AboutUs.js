import React from 'react'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb.js';
import AboutSection from '../../components/AboutSection/AboutSection.js';
import { BreadcrumbProps, AboutSectionProps } from './Data.js';

export default function AboutUs() {
  return (
    <>
      <Breadcrumb props={BreadcrumbProps}/>
      <AboutSection {...AboutSectionProps}/>
    </>
  )
}
