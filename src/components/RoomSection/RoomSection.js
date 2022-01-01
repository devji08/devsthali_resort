import React from 'react';
import { Container } from '../../globalStyles.js';
import {RoomSec, RoomRow, RoomCol, TextWrapper, Headline, Content, ImgWrapper, Img} from './RoomSection.elements.js'

function RoomSection ({lightBg, title, content, lightText, img, alt}) {
    return(
    <>        
        <RoomSec lightBg = {lightBg}>
            <Container>
                <RoomRow>
                    <RoomCol>
                        <TextWrapper>
                            <Headline lightText = {lightText}>{title}</Headline>
                            <Content lightText = {lightText}>{content}</Content>
                        </TextWrapper>
                    </RoomCol>
                    <RoomCol>
                        <ImgWrapper>
                            <Img src = {img} alt = {alt}></Img>
                        </ImgWrapper>
                    </RoomCol>
                </RoomRow>
            </Container>
        </RoomSec>
    </>
    )
}

export default RoomSection;