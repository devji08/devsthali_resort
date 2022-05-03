import React from 'react';
import styles from './Utilities.module.css';

const Utilities = ({utilityArray}) => {
    return(
        <div className={styles.container}>
            <div className = {styles.header}>
                Our Amenities
            </div>
            <div className={styles.utilities}>
                {
                    utilityArray.map((utility) => {
                        return(
                            <div className={styles.utility} key={utility.name}>
                                <div className={styles.utilityImage}>{utility.img}</div>
                                <span className={styles.utilityName}>{utility.name}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Utilities;