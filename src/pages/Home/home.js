import React from 'react';
import InfoSection from '../../components/InfoSection/InfoSection'
import Pricing from '../../components/Pricing/Pricing'
import ImageSlider from '../../components/ImageSlider/ImageSlider'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';

const Home = () => {
    return(
        <>
            <ImageSlider slides = {homeObjFour}/>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjThree}/>
            <Pricing />
        </>
    )
}

export default Home;