import React from 'react'
import { BreadcrumbProps, GalleryObjOne, GalleryObjThree, GalleryObjTwo } from './Data.js';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb.js';
import GalleryComponent from '../../components/GalleryComponent/GalleryComponent.js';

export default function Gallery() {
  return (
    <>
      <Breadcrumb props={BreadcrumbProps} />
      <GalleryComponent {...GalleryObjOne}/>
      <GalleryComponent {...GalleryObjTwo}/>
      <GalleryComponent {...GalleryObjThree}/>
    </>
  );
}
