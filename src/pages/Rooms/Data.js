import { FaWifi, FaBed, FaSquare } from 'react-icons/fa';
import { RiPlantLine } from 'react-icons/ri';
import Room_1 from '../../images/Room_1.jpg';
import Room_2 from '../../images/Room_2.jpg';
import Room_3 from '../../images/Room_3.jpg';
import Room_4 from '../../images/Room_4.jpg';
import Room_5 from '../../images/Room_5.jpg';
import Room_6 from '../../images/Room_6.jpg';

const iconStyle = {
    width: '100%',
    height: '100%'
};

export const ContentOne = {
    title: 'DELUX ROOM', 
    description: 'Create memories for life. We aim to interpret the tradition of hospitality in a refreshingly modern way to create unique experiences and lifelong memories just for you and your loved ones.', 
    features: [
        {
            name: '30-35 Sq Mt',
            img: <FaSquare style = {iconStyle}/>
        },
        {
            name: 'Complimentary WiFi',
            img: <FaWifi style = {iconStyle}/>
        },
        {
            name: 'King',
            img: <FaBed style = {iconStyle}/>
        },
        {
            name: 'Private Sit out with Garden view',
            img: <RiPlantLine style = {iconStyle}/>
        }     
    ]   
}

export const ContentTwo = {
    title: 'STANDARD ROOM', 
    description: 'Create memories for life. We aim to interpret the tradition of hospitality in a refreshingly modern way to create unique experiences and lifelong memories just for you and your loved ones.',
    features: [
        {
            name: '30-35 Sq Mt',
            img: <FaSquare style = {iconStyle}/>
        },
        {
            name: 'Complimentary WiFi',
            img: <FaWifi style = {iconStyle}/>
        },
        {
            name: 'King',
            img: <FaBed style = {iconStyle}/>
        }
    ]
}

export const SlideOne = [
    {
        src: Room_1,
        alt: "alt-text",
        title: "Royal Experiences",
        subtitle: "Relive the splendour of a royal bygone era to its fullest."
    },
    {
        src: Room_5,
        alt: "alt-text",
        title: "Royal Experiences",
        subtitle: "Relive the splendour of a royal bygone era to its fullest."
    },
    {
        src: Room_3,
        alt: "alt-text",
        title: "Royal Experiences",
        subtitle: "Relive the splendour of a royal bygone era to its fullest."
    }
];

export const SlideTwo = [
    {
        src: Room_4,
        alt: "alt-text",
        title: "Royal Experiences",
        subtitle: "Relive the splendour of a royal bygone era to its fullest."
    },
    {
        src: Room_2,
        alt: "alt-text",
        title: "Royal Experiences",
        subtitle: "Relive the splendour of a royal bygone era to its fullest."
    },
    {
        src: Room_6,
        alt: "alt-text",
        title: "Royal Experiences",
        subtitle: "Relive the splendour of a royal bygone era to its fullest."
    }
];