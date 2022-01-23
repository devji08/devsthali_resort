import React from 'react';
import RoomSection from '../../components/RoomSection/RoomSection';
import {RoomObjOne, RoomObjTwo, RoomObjFour} from './Data.js'
const Rooms = () => {
    return (
        <>
            <RoomSection slides={RoomObjFour} content={RoomObjOne}></RoomSection>
            <RoomSection slides={RoomObjFour} content={RoomObjTwo}></RoomSection>
        </>
    )
}

export default Rooms;