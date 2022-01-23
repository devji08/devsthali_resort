import React from 'react';
// import { Container } from '../../globalStyles.js';
// import {RoomSec, RoomRow, RoomCol, TextWrapper, Headline, Content, ImgWrapper, Img} from './RoomSection.elements.js'
import styles from './RoomSection.module.css'
import Carousel from '../Carousel/Carousel.js';

function RoomSection ({slides, content}) {
    return(
        // <RoomSec lightBg = {lightBg}>
        //     <Container>
        //         <RoomRow>
        //             <RoomCol>
        //                 <TextWrapper>
        //                     <Headline lightText = {lightText}>{title}</Headline>
        //                     <Content lightText = {lightText}>{content}</Content>
        //                 </TextWrapper>
        //             </RoomCol>
        //             <RoomCol>
        //                 <ImgWrapper>
        //                     <Img src = {img} alt = {alt}></Img>
        //                 </ImgWrapper>
        //             </RoomCol>
        //         </RoomRow>
        //     </Container>
        // </RoomSec>
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.title}>
                    {content.title}
                </div>
                <div className={styles.description}>
                    {content.description}
                </div>
                <button className={styles.button}>Book Now</button>
            </div>
            <Carousel styles = {{flex: 2}} slides = {slides} height = '15rem'/>
        </div>
    )
}

export default RoomSection;