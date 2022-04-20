import React from 'react'
import { BreadcrumbProps, PolicyProp } from './Data';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import PolicyComponent from '../../components/PolicyComponent/PolicyComponent';

const PrivacyPolicy = () => {
  return (
    <>
      <Breadcrumb props={BreadcrumbProps} />
      <PolicyComponent {...PolicyProp}/>
    </>
  );
}

export default PrivacyPolicy;
