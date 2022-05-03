import Back_Hut from '../../images/Back_Hut.jpg';
import Room_1 from '../../images/Room_1.jpg';
import Room_8 from '../../images/Room_8.jpg';
import Water_Fall from '../../images/Jim-Corbett-Water-Fall.jpg'
import Tiger from '../../images/tiger-jim-corbett.jpg';
import Deer from '../../images/Deer-Jim-Corbett-2.jpg';
import Bird from '../../images/Birds-Jim-Corbett.jpg';
import Swimming_Pool from '../../images/Swimming_Pool_1.jpeg';

import { FaWifi, FaBed, FaSwimmingPool, FaRegBell } from 'react-icons/fa';
import { BiRestaurant } from 'react-icons/bi';
import { MdCottage } from 'react-icons/md';
import { IoMdCar, IoLogoGameControllerA } from 'react-icons/io';
import {GiHotMeal, GiJeep} from 'react-icons/gi';

export const homeObjOne = {
    lightBg: true,
    primary: false,
    imgStart: '', 
    lightTopLine: false, 
    lightTextDesc: false, 
    buttonLabel: 'Book Now', 
    description: 'If you want to get lost in the wilderness of exotic Jim Corbett National Park, Devsthali Brar Resort offers the best stay in the surrounding of Jim Corbett National Park. We offers Luxurious stay in Jim Corbett with warm hospitality with comfortable stay to the visitors who want to indulge in the peace and calmness of nature.', 
    headline: 'STAY AT DEVSTHALI', 
    lightText: false, 
    topLine: 'Devsthali Hotels and Resorts',
    img: Room_1,
    alt: 'Image',
    start: '',
    link: '/rooms'
}

export const homeObjTwo = {
    lightBg: true,
    primary: false,
    imgStart: 'start', 
    lightTopLine: false, 
    lightTextDesc: false,  
    buttonLabel: 'Explore', 
    description: 'With so much to organize, you can relax in the knowledge that we will take care of your every need, ensuring that your event is everything you want it to be. Devsthali Brar Resort offer a perfect destination that ensures a blend of traditional and exquisite modern luxuries, making your event a memorable one.', 
    headline: 'CELEBRATE WITH DEVSTHALI', 
    lightText: false, 
    topLine: 'Devsthali Hotels and Resorts',
    img: Back_Hut,
    alt: 'Image',
    start: 'true',
    link: '/events'
}


export const homeObjFour = [
    {
        src: Water_Fall,
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
        src: Tiger,
        alt: "alt-text",
        title: "Royal Experiences",
        subtitle: "Relive the splendour of a royal bygone era to its fullest."
    },
    {
        src: Room_8,
        alt: "alt-text",
        title: "Royal Experiences",
        subtitle: "Relive the splendour of a royal bygone era to its end."
    },
    {
        src: Deer,
        alt: "alt-text",
        title: "Royal Experiences",
        subtitle: "Relive the splendour of a royal bygone era to its deepest."
    },
    {
        src: Swimming_Pool,
        alt: "alt-text",
        title: "Royal Experiences",
        subtitle: "Relive the splendour of a royal bygone era to its deepest."
    },
    {
        src: Bird,
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
        img: <BiRestaurant style={iconStyle}/>,
        name: 'Restaurant'
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
        img: <MdCottage style={iconStyle}/>,
        name: 'Forest Cottages'
    },
    {
        img: <IoLogoGameControllerA style={iconStyle}/>,
        name: 'Indoor Activities'
    },
    {
        img: <FaWifi style={iconStyle}/>,
        name: 'Wifi Access'
    },
    {
        img: <GiJeep style={iconStyle}/>,
        name: 'Book Safari'
    },
    {
        img: <IoMdCar style={iconStyle}/>,
        name: 'Parking'
    }
];