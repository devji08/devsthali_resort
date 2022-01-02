import styled from 'styled-components'

export const RoomSec = styled.div`
padding: 160px 0;
background: ${({lightBg}) => (lightBg ? '#fff' : '#1723')};
`;

export const RoomRow = styled.div`
display: flex;
margin: 0 -15px -15px -15px;
flex-wrap: wrap;
align-items: center;
`;

export const RoomCol = styled.div`
margin-bottom: 15px;
padding-right: 15px;
padding-left: 15px;
flex: 1;
max-widht: 50%;
flex-basis: 50%;

@media screen and (max-width: 760px) {
    max-widht: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
}
`;

export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 60px;

@media screen and (max-width: 760px) {
    padding-bottom: 65px;
}
`;

export const Headline = styled.h1`
margin-bottom: 24px;
font-size: 48px;
letter-spacing: 5px;
line-height: 1.1;
color: #1c2237;
// color: ${({lightText}) => (lightText ? '#f7f8fa' : '#1c2237')};
`;

export const Content = styled.p`
max-widht: 440px;
margin-bottom: 35px;
font-size: 18px;
line=height: 24px;
color: #777;
// color: ${({lightText}) => (lightText ? '#a9b3c1' : '#1c2237')};
`;

export const ImgWrapper = styled.div`
max-width: 555px;
display: flex;
`;

export const Img = styled.img`
padding-right: 0;
border: 0;
max-width: 100%;
vertical-align: middle;
display: inline-block;
max-height: 500px;
`;