import svg1 from '../../images/svg-1.svg';
import profile from '../../images/profile.jpg';
import image1 from '../../images/image1.jpg';
import image2 from '../../images/image2.jpg';
import image3 from '../../images/image3.jpg';
import { FaWifi, FaBed, FaSwimmingPool, FaRegBell } from 'react-icons/fa';
import {GiHotMeal, GiJeep} from 'react-icons/gi';

export const homeObjOne = {
    lightBg: true,
    primary: false,
    imgStart: '', 
    lightTopLine: false, 
    lightTextDesc: false, 
    buttonLabel: 'Get Started', 
    description: 'Create memories for life. We aim to interpret the tradition of hospitality in a refreshingly modern way to create unique experiences and lifelong memories just for you and your loved ones.', 
    headline: 'STAY AT DEVSTHALI', 
    lightText: false, 
    topLine: 'Devsthali Associates',
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
    description: 'With so much to organize, you can relax in the knowledge that we will take care of your every need, ensuring that your event is everything you want it to be. Devsthali Resort offer a perfect destination that ensures a blend of traditional and exquisite modern luxuries, making your event a memorable one.', 
    headline: 'CELEBRATE WITH DEVSTHALI', 
    lightText: true, 
    topLine: 'Devsthali Associates',
    img: profile,
    alt: 'Image',
    start: 'true',
    link: '/events'
}


export const homeObjFour = [
    {
        src: image1,
        alt: "alt-text",
        title: "Royal Experiences",
        subtitle: "Relive the splendour of a royal bygone era to its fullest."
    },
    {
        src: image2,
        alt: "alt-text",
        title: "Royal Experiences",
        subtitle: "Relive the splendour of a royal bygone era to its fullest."
    },
    {
        src: image3,
        alt: "alt-text",
        title: "Royal Experiences",
        subtitle: "Relive the splendour of a royal bygone era to its fullest."
    }
];

const iconStyle = {
    width: '100%',
    height: '100%'
};

export const utilityArray = [
    {
        img: <FaRegBell style={iconStyle}/>,
        name: 'Friendly Service'
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