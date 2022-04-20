import React from 'react'
import styles from './PolicyComponent.module.css';

const PrivacyPolicy = ({title, content, commingSoon}) => {
  return (
    <div className={styles.container}>
        <div className={styles.title}>
            {title}
        </div>
        {
            content.map((para) => {
                return (
                    <div className={styles.contentContainer}>
                        {para.title && <span className={styles.contentTitle}> {para.title} </span>}
                        <span className={styles.contentContent}> {para.content} </span>
                    </div>
                );
            })
        }
        <div className={styles.footer}>
            {commingSoon}
        </div>
    </div>
  );
}

export default PrivacyPolicy;
