import React, {useState, useEffect, useCallback} from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import styles from './Carousel.module.css';

const Carousel = ({height, slides, slideButton, tabButton, imageDescription}) => {

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
        <div id = 'carousel' className={styles.carousel}>
            {slideButton && <IoIosArrowBack className={`${styles.arrowButton} ${styles.left}`} onClick={prevSlide}/>}
            {slideButton &&<IoIosArrowForward className={`${styles.arrowButton} ${styles.right}`} onClick={nextSlide}/>}
            {tabButton && <div className={styles.slideButtons}>
                {slides.map((slide, index) => 
                    <button className ={index === current ? `${styles.slideButton} ${styles.activeSlideButton}` : styles.slideButton} key={index} onClick={()=>setSlide(index)}/>
                )}
            </div>}
            <div className={styles.slides}>
                {slides.map((slide, index) => {
                        return (
                            <div key = {index} className= {index === current ? `${styles.slide} ${styles.active}` : styles.slide}>
                                <img src = {slide.src} alt = {slide.alt} className={styles.carouselImg} style={{'height' : height}}/>
                                {imageDescription && <div className={styles.imgText}>
                                    <h1 className={styles.title}>{slide.title}</h1>
                                    <div className={styles.imgTextDivider}> </div>
                                    <h2 className={styles.subtitle}>{slide.subtitle}</h2>
                                </div>}
                            </div>
                        )})
                    }
            </div>
        </div>
        
    );
}

export default Carousel;