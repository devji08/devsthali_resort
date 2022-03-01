import React from 'react';
import RoomSection from '../../components/RoomSection/RoomSection';
import {ContentOne, ContentTwo, SlideOne, SlideTwo} from './Data.js'
import styles from './styles.module.css';

const Rooms = () => {
    return (
        <div className={`${styles.container} container`}>
            <RoomSection slides={SlideOne} content={ContentOne}></RoomSection>
            <RoomSection slides={SlideTwo} content={ContentTwo}></RoomSection>
        </div>
    )
}

export default Rooms;