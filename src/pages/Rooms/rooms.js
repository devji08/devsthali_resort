import React from 'react';
import RoomSection from '../../components/RoomSection/RoomSection';
import {RoomObjOne, RoomObjTwo, RoomObjFour} from './Data.js'
import styles from './styles.module.css';

const Rooms = () => {
    return (
        <div className={`${styles.container} container`}>
            <RoomSection slides={RoomObjFour} content={RoomObjOne}></RoomSection>
            <RoomSection slides={RoomObjFour} content={RoomObjTwo}></RoomSection>
        </div>
    )
}

export default Rooms;