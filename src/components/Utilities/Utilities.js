import React from 'react';
import styles from './Utilities.module.css';

const Utilities = ({utilityArray}) => {
    return(
        <div className={styles.container}>
            <div className = {styles.header}>
                Book Direct
            </div>
            <div className={styles.utilities}>
                {
                    utilityArray.map((utility) => {
                        return(
                            <div className={styles.utility}>
                                <div className={styles.utilityImage}>{utility.img}</div>
                                {/* <img src={utility.img} className={styles.utilityImage} alt='something'/> */}
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