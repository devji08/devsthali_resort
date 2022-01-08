import React from 'react';
import InfoSection from '../../components/InfoSection/InfoSection'
import Pricing from '../../components/Pricing/Pricing'
import Carousel from '../../components/Carousel/Carousel';

import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';

const Home = () => {
    return(
        <>
            <Carousel slides = {homeObjFour}></Carousel>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjThree}/>
            <Pricing />
        </>
    )
}

export default Home;