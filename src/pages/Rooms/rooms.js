import React, { useState } from 'react';
import RoomSection from '../../components/RoomSection/RoomSection';
import {ContentOne, SlideOne, BreadcrumbProps} from './Data.js'
import styles from './styles.module.css';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import BookingForm from '../../components/BookingForm/BookingForm';

const Rooms = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => {
        setIsOpen(false);
    }

    const openModal = () => {
        setIsOpen(true);
    }
    
    return (
        <>
            <Breadcrumb props = {BreadcrumbProps}/>
            <div className={`${styles.container} container`}>
                <RoomSection slides={SlideOne} content={ContentOne} openModal={openModal}></RoomSection>
            </div>
            <BookingForm handleClose={closeModal} show={isOpen}/>
        </>
    )
}

export default Rooms;