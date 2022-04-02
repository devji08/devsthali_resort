import svg1 from '../../images/svg-1.svg';
import profile from '../../images/profile.jpg';
import Front_View from '../../images/Front_View.jpg';
import Back_Hut from '../../images/Back_Hut.jpg';
import Restaurant_1 from '../../images/Restaurant_1.jpg';
import Room_1 from '../../images/Room_1.jpg';

import { FaWifi, FaBed, FaSwimmingPool, FaRegBell } from 'react-icons/fa';
import {GiHotMeal, GiJeep} from 'react-icons/gi';

export const homeObjOne = {
    lightBg: true,
    primary: false,
    imgStart: '', 
    lightTopLine: false, 
    lightTextDesc: false, 
    buttonLabel: 'Get Started', 
    description: 'If you want to get lost in the wilderness of exotic Jim Corbett National Park, Devsthali Brar Resort offers the best stay in the surrounding of Jim Corbett National Park. We offers Luxurious stay in Jim Corbett with warm hospitality with comfortable stay to the visitors who want to indulge in the peace and calmness of nature.', 
    headline: 'STAY AT DEVSTHALI', 
    lightText: false, 
    topLine: 'Devsthali Hotels and Resorts',
    img: svg1,
    alt: 'Image',
    start: '',
    link: '/rooms'
}

export const homeObjTwo = {
    lightBg: false,
    primary: true,
    imgStart: 'start', 
    lightTopLine: true, 
    lightTextDesc: true,  
    buttonLabel: 'Explore', 
    description: 'With so much to organize, you can relax in the knowledge that we will take care of your every need, ensuring that your event is everything you want it to be. Devsthali Brar Resort offer a perfect destination that ensures a blend of traditional and exquisite modern luxuries, making your event a memorable one.', 
    headline: 'CELEBRATE WITH DEVSTHALI', 
    lightText: true, 
    topLine: 'Devsthali Hotels and Resorts',
    img: profile,
    alt: 'Image',
    start: 'true',
    link: '/events'
}


export const homeObjFour = [
    {
        src: Back_Hut,
        alt: "alt-text",
        title: "Royal Experiences",
        subtitle: "Relive the splendour of a royal bygone era to its fullest."
    },
    {
        src: Room_1,
        alt: "alt-text",
        title: "Royal Experiences",
        subtitle: "Relive the splendour of a royal bygone era to its end."
    },
    {
        src: Restaurant_1,
        alt: "alt-text",
        title: "Royal Experiences",
        subtitle: "Relive the splendour of a royal bygone era to its fullest."
    },
    {
        src: Front_View,
        alt: "alt-text",
        title: "Royal Experiences",
        subtitle: "Relive the splendour of a royal bygone era to its deepest."
    }
    

];

const iconStyle = {
    width: '100%',
    height: '100%'
};

export const utilityArray = [
    {
        img: <FaRegBell style={iconStyle}/>,
        name: 'Premium Service'
    },
    {
        img: <GiHotMeal style={iconStyle}/>,
        name: 'Get Breakfast'
    },
    {
        img: <GiJeep style={iconStyle}/>,
        name: 'Book Safari'
    },
    {
        img: <FaSwimmingPool style={iconStyle}/>,
        name: 'Swimming Pool'
    },
    {
        img: <FaBed style={iconStyle}/>,
        name: 'Cozy Rooms'
    },
    {
        img: <FaWifi style={iconStyle}/>,
        name: 'Wifi Access'
    }
];