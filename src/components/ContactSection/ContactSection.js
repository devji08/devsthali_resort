import React from 'react';
import styles from './Contact.module.css';
import ContactUsForm from '../ContactUsForm/ContactUsForm.js';

const ContactSection = ({title, statement, resort, address, direction, phone, email, img, title2, statement2, statement3, salesObj}) => {
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.col}>
                    <h1 className={styles.title}>{title}</h1>
                    <h2 className={styles.statement}>{statement}</h2>
                    <div className={styles.contactWrapper}>
                        <p className={styles.contactDetail}>{resort}</p>
                        <p className={styles.contactDetail}>{address}</p>
                        <p className={styles.contactDetail}>Phone: {phone}</p>
                        <p className={styles.contactDetail}>Email: {email}</p>
                        <a className={styles.direction} href={direction} target = '_blank' rel='noreferrer'>Get Direction →</a>
                    </div>
                </div>
                <div className={styles.col}>
                    <h1 className={styles.title}>{salesObj.title}</h1>
                    <h2 className={styles.statement}>{salesObj.statement}</h2>
                    <div className={styles.contactWrapper}>
                        <p className={styles.contactDetail}>{salesObj.address}</p>
                        <p className={styles.contactDetail}>Phone: {salesObj.phone}</p>
                        <p className={styles.contactDetail}>Email: {salesObj.email}</p>
                        <a className={styles.direction} href={salesObj.direction} target = '_blank' rel='noreferrer'>Get Direction →</a>
                    </div>
                    {/* <div className={styles.imgWrapper}>
                        <img className={styles.img} src={img} alt = 'something'/>
                    </div> */}
                </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.row}>
                <div className={styles.col}>
                    <h1 className={styles.title}>{title2}</h1>
                    <h2 className={styles.statement}>{statement2}</h2>
                    <h2 className={styles.statement}>{statement3}</h2>
                    <div className={styles.imgWrapper}>
                        <img className={styles.img} src = {img} alt='something'/>
                    </div>
                </div>
                <div className={styles.col}>
                    <ContactUsForm/>
                </div>
            </div>
        </div>
    )
}

export default ContactSection;