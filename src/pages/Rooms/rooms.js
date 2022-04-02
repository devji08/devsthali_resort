import React from 'react';
import RoomSection from '../../components/RoomSection/RoomSection';
import {ContentOne, SlideOne, BreadcrumbProps} from './Data.js'
import styles from './styles.module.css';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';

const Rooms = () => {
    return (
        <>
            <Breadcrumb props = {BreadcrumbProps}/>
            <div className={`${styles.container} container`}>
                <RoomSection slides={SlideOne} content={ContentOne}></RoomSection>
            </div>
        </>
    )
}

export default Rooms;