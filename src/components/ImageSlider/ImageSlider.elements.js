import styled from 'styled-components'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
export const Carousel = styled.section`
position: relative;
height: 75vh;
display: flex;
justify-content: center;
align-items: center;
`;

export const LeftArrow = styled(IoIosArrowBack)`
position: absolute;
top: 50% - 10px;
left: 32px;
font-size: 2rem;
color: #999;
z-index: 10;
cursor: pointer;
user-select: none;

&:hover {
    transition: 0.2s ease;
    transform: scale(1.2);
}
`;

export const RightArrow = styled(IoIosArrowForward)`
position: absolute;
top: 50% - 10px;
right: 32px;
font-size: 2rem;
color: #999;
z-index: 10;
cursor: pointer;
user-select: none;

&:hover {
    transition: 0.1s ease;
    transform: scale(1.2);
}
`;

export const CarouselImageWrapper = styled.div`
display: flex;
height: 100%;
`;

export const CarouselImage = styled.div`
display: flex;
width: ${({active}) => active ? '100%' : 0};
height: 100%;
position: relative;
justify-content: center;
transition: all 1s ease;
`;

export const Image = styled.img`
width: 100%;
height: 100%;
`;

export const ImageTitle = styled.span`
position: absolute;
top: 60%;
text-align: center;
text-shadow: 1px 5px 10px #000000;
color: #fff;
font-family: Calibri-bold;
font-size: 2.25rem;
width: 60%;
z-index: 5;
`;

export const ImageSubTitle = styled.span`
position: absolute;
top: 75%;
text-align: center;
text-shadow: 1px 5px 10px #000000;
font-family: Calibri;
font-size: 1.25rem;
line-height: 1.2;
letter-spacing: normal;
text-align: center;
color: #ffffff;
`;
