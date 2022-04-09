import Room_1 from '../../images/Room_1.jpg';
import Room_2 from '../../images/Room_2.jpg';
import Room_3 from '../../images/Room_3.jpg';
import Room_4 from '../../images/Room_4.jpg';
import Room_5 from '../../images/Room_5.jpg';
import Room_6 from '../../images/Room_6.jpg';
import Room_7 from '../../images/Room_7.jpg';
import Back_Hut from '../../images/Back_Hut.jpg';
import Elephant_Hut from '../../images/Elephant_Hut.jpg';
import Front_View from '../../images/Front_View.jpg';
import Swing from '../../images/Swing.jpg';
import Restaurant_1 from '../../images/Restaurant_1.jpg';
import Restaurant_2 from '../../images/Restaurant_2.jpg';
import Restaurant_3 from '../../images/Restaurant_3.jpg';

export const BreadcrumbProps = {
    img: Room_1,
    alt: 'Image',
    title: 'Gallery',
    path: [
        {
            name: 'Gallery',
            url: '/gallery'
        },
    ]
};

export const GalleryObjOne = {
    title: 'Our Rooms',
    array: [
        {
            img: Room_1,
            alt: 'Image'
        },
        {
            img: Room_2,
            alt: 'Image'
        },
        {
            img: Room_3,
            alt: 'Image'
        },
        {
            img: Room_4,
            alt: 'Image'
        },
        {
            img: Room_5,
            alt: 'Image'
        },
        {
            img: Room_6,
            alt: 'Image'
        },
        {
            img: Room_7,
            alt: 'Image'
        }
    ]
};

export const GalleryObjTwo = {
    title: 'Our Ambience',
    array: [
        {
            img: Back_Hut,
            alt: 'Image'
        },
        {
            img: Elephant_Hut,
            alt: 'Image'
        },
        {
            img: Swing,
            alt: 'Image'
        },
        {
            img: Front_View,
            alt: 'Image'
        }
    ]
};

export const GalleryObjThree = {
    title: 'Restaurant',
    array: [
        {
            img: Restaurant_1,
            alt: 'Image'
        },
        {
            img: Restaurant_2,
            alt: 'Image'
        },
        {
            img: Restaurant_3,
            alt: 'Image'
        }
    ]
};