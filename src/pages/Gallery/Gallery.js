import React from 'react'
import { BreadcrumbProps } from './Data.js';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb.js';

export default function Gallery() {
  return (
    <Breadcrumb props={BreadcrumbProps}/>
  );
}
