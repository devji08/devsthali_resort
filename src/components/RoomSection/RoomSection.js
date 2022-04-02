import React from 'react';
import styles from './RoomSection.module.css'
import Carousel from '../Carousel/Carousel.js';
import { useNavigate } from 'react-router-dom';

function RoomSection ({slides, content}) {
    const navigate = useNavigate();

    return(
        <div className={styles.container}>
            <div className={styles.title}>
                {content.title}
            </div>
            <div className={styles.images}>
                <Carousel className={styles.images} slides = {slides} height = '15rem' slideButton/>
            </div>
            <div className={styles.description}>
                {content.description}
                <ul className={styles.features}>
                    {content.features.map(feature =>
                        <li className = {styles.feature} key={feature.name}>
                            <div className = {styles.featureImage}> {feature.img} </div>
                            <section className = {styles.featureName}>{feature.name}</section>
                        </li>
                    )}
                </ul>
            </div>
            <div className={styles.button_div}>
                <button className={styles.button} onClick = {() => navigate("/contact-us")} >Book Now</button>
            </div>
        </div>
    )
}

export default RoomSection;