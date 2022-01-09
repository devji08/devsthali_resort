import React, {useState, useEffect, useCallback} from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import './Carousel.css';

const Carousel = ({slides}) => {

    const [current, setCurrent] = useState(0);
    const length = slides.length;
    

    const nextSlide = useCallback(() => {
        setCurrent(current === length-1 ? 0 : current + 1);
    }, [current, length])

    const prevSlide = () => {
        setCurrent(current === 0 ? length-1 : current - 1);
    }

    const setSlide = (index) => {
        setCurrent(index);
        console.log(index);
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

    return(
        <div className='carousel'>
            <IoIosArrowBack className='arrowButton left' onClick={prevSlide}/>
            <IoIosArrowForward className='arrowButton right' onClick={nextSlide}/>
            <div className='slideButtons'>
                {slides.map((slide, index) => <div className='slideButtonContainer' key={index} onClick={()=>setSlide(index)}><button className ='slideButton'/></div>)}
            </div>
            <ul className='slides'>
                {slides.map((slide, index) => {
                        return (
                            <li key = {index} className= {index === current ? 'slide active' : 'slide'} active>
                                <img src = {slide.src} alt = {slide.alt} className='img'/>
                                <div className='imgText'>
                                    <h1 className='title'>{slide.title}</h1>
                                    <h2 className='subtitle'>{slide.subtitle}</h2>
                                </div>
                            </li>
                        )})
                    }
            </ul>
        </div>
    );
}

export default Carousel;