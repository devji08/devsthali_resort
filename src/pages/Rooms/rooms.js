import React from 'react';
import RoomSection from '../../components/RoomSection/RoomSection';
import {RoomObjOne, RoomObjTwo} from './Data.js'
const Rooms = () => {
    return (
        <>
            <RoomSection {...RoomObjOne}></RoomSection>
            <RoomSection {...RoomObjTwo}></RoomSection>
        </>
    )
}

export default Rooms;