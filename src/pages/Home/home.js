import React from 'react';
import InfoSection from '../../components/InfoSection/InfoSection'
// import Pricing from '../../components/Pricing/Pricing'
import Carousel from '../../components/Carousel/Carousel';
import Utilities from '../../components/Utilities/Utilities';
import { homeObjOne, homeObjTwo, homeObjFour, utilityArray } from './Data';

const Home = () => {
    return(
        <>
            <Carousel height='70vh' slides = {homeObjFour} slideButton tabButton imageDescription/>
            <Utilities utilityArray={utilityArray}/>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            {/* <Pricing /> */}
        </>
    )
}

export default Home;