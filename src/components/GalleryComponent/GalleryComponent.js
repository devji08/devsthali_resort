import React from 'react';
import styles from './GalleryComponent.module.css';

const GalleryComponent = (props) => {
    console.log(props);
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{props.title}</h2>
            <div className={styles.media_scoller}>
                {
                    props.array.map((obj) => {
                        return (
                            <div className={styles.media_element}>
                                <img src={obj.img} alt={obj.alt} className={styles.img}></img>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        
    )
}

export default GalleryComponent;