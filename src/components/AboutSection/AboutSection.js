import React from 'react'
import styles from './AboutSection.module.css'

const AboutSection = (props) => {
    return (
        <div className={styles.container}>
            <img src={props.image1} alt='img' className={styles.img1}></img>
            <img src={props.image2} alt='img' className={styles.img2}></img>
            <h2 className={styles.title}>{props.title}</h2>
            <p className={`${styles.content1} ${styles.content}`}>{props.para1}</p>
            <p className={`${styles.content2} ${styles.content}`}>{props.para2}</p>
            <p className={`${styles.content3} ${styles.content}`}>{props.para3}</p>
            <p className={`${styles.content4} ${styles.content}`}>{props.para4}</p>
        </div>
    )
}

export default AboutSection;