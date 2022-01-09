import svg1 from '../../images/svg-1.svg';
import profile from '../../images/profile.jpg';
import svg2 from '../../images/svg-2.svg';
import image1 from '../../images/image1.jpg';
import image2 from '../../images/image2.jpg';
import image3 from '../../images/image3.jpg';

export const homeObjOne = {
    lightBg: false,
    primary: true,
    imgStart: '', 
    lightTopLine: true, 
    lightTextDesc: true, 
    buttonLabel: 'Get Started', 
    description: 'Create memories for life. We aim to interpret the tradition of hospitality in a refreshingly modern way to create unique experiences and lifelong memories just for you and your loved ones.', 
    headline: 'STAY AT DEVSTHALI', 
    lightText: true, 
    topLine: 'Devsthali Associates',
    img: svg1,
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
    description: 'With so much to organize, you can relax in the knowledge that we will take care of your every need, ensuring that your event is everything you want it to be. Devsthali Resort offer a perfect destination that ensures a blend of traditional and exquisite modern luxuries, making your event a memorable one.', 
    headline: 'CELEBRATE WITH DEVSTHALI', 
    lightText: false, 
    topLine: 'Devsthali Associates',
    img: profile,
    alt: 'Image',
    start: 'true',
    link: 'events'
}

export const homeObjThree = {
    lightBg: false,
    primary: true,
    imgStart: '', 
    lightTopLine: true, 
    lightTextDesc: true, 
    buttonLabel: 'Explore', 
    description: 'From traditional flavours influenced by local culture to gastronomic delights that trot the world, we have always raised the standard of hospitality through Responsible Luxury. The aim of our cuisine is to turn every meal into a special event, where thoughtfulness, attention to detail, time-honoured techniques and innovative thinking come together to speak the language of food. ', 
    headline: 'DINE AT DEVSTHALI', 
    lightText: true, 
    topLine: 'Devsthali Associates',
    img: svg2,
    alt: 'Image',
    start: ''
}

export const homeObjFour = [
    {
        src: image1,
        alt: "alt-text",
        title: "Royal Experiences",
        subtitle: "Relive the splendour of a royal bygone era"
    },
    {
        src: image2,
        alt: "alt-text",
        title: "Royal Experiences",
        subtitle: "Relive the splendour of a royal bygone era"
    },
    {
        src: image3,
        alt: "alt-text",
        title: "Royal Experiences",
        subtitle: "Relive the splendour of a royal bygone era"
    }
]