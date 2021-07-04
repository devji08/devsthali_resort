import React, {useState, useEffect, useCallback} from 'react'
import {
    Carousel,
    CarouselImageWrapper,
    LeftArrow,
    RightArrow,
    CarouselImage,
    Image,
    ImageTitle,
    ImageSubTitle
} from './ImageSlider.elements'

function ImageSlider({slides}) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    

    const nextSlide = useCallback(() => {
        setCurrent(current === length-1 ? 0 : current + 1);
    }, [current, length])

    const prevSlide = () => {
        setCurrent(current === 0 ? length-1 : current - 1);
    }

    useEffect(() => {
        const interval = setInterval(() => {
          nextSlide();
        }, 5000);
        return () => clearInterval(interval);
      }, [nextSlide]);

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    
    return (
        <Carousel>
            <LeftArrow onClick = {prevSlide}/>
            <RightArrow onClick = {nextSlide}/>
            <CarouselImageWrapper>
                {slides.map((slide, index) => {
                    return (
                        <CarouselImage key = {index} active = {index===current ? true : false}>
                            <Image src = {slide.src} alt = {slide.alt}/>
                            {index === current && (<ImageTitle>{slide.title}</ImageTitle>)}
                            {index === current && (<ImageSubTitle>{slide.subtitle}</ImageSubTitle>)}
                        </CarouselImage>
                    )})
                }
            </CarouselImageWrapper>
        </Carousel>
    )
}

export default ImageSlider
