import React, {useState, useEffect, useCallback} from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import styles from './Carousel.module.css';

const Carousel = ({height, slides}) => {
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
            <IoIosArrowBack className={`${styles.arrowButton} ${styles.left}`} onClick={prevSlide}/>
            <IoIosArrowForward className={`${styles.arrowButton} ${styles.right}`} onClick={nextSlide}/>
            <div className={styles.slideButtons}>
                {slides.map((slide, index) => 
                    <div className={index === current ? `${styles.activeSlideButtonContainer} ${styles.slideButtonContainer}` : styles.slideButtonContainer} key={index} onClick={()=>setSlide(index)}>
                        <button className ={styles.slideButton}/>
                    </div>
                )}
            </div>
            <div className={styles.slides}>
                {slides.map((slide, index) => {
                        return (
                            <li key = {index} className= {index === current ? `${styles.slide} ${styles.active}` : styles.slide}>
                                <img src = {slide.src} alt = {slide.alt} className={styles.carouselImg} style={{'height' : height}}/>
                                <div className={styles.imgText}>
                                    <h1 className={styles.title}>{slide.title}</h1>
                                    <h2 className={styles.subtitle}>{slide.subtitle}</h2>
                                </div>
                            </li>
                        )})
                    }
            </div>
        </div>
        
    );
}

export default Carousel;