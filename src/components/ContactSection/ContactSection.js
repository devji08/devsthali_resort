import React from 'react';
import styles from './Contact.module.css';

const FormSec = () => {
    return(
        <form className={styles.form}>
            <div className={styles.formRow}>
                <label className={styles.label} for='firstname'>First name<sup>*</sup></label>
                <input className={styles.input} type='text' name = 'firstname' id = 'firstname' placeholder='John' required/>
            </div>
            <div className={styles.formRow}>
                <label className={styles.label} for='lastname'>Last name<sup>*</sup></label>
                <input className={styles.input} type='text' name = 'lastname' id = 'lastname' placeholder='Doe' required/>
            </div>
            <div className={styles.formRow}>
                <label className={styles.label} for='email'>Email name<sup>*</sup></label>
                <input className={styles.input} type='email' name = 'email' id = 'email' placeholder='username@mail.com' required/>
            </div>
            <div className={styles.formRow}>
                <label className={styles.label} for='phone'>Phone number<sup>*</sup></label>
                <input className={styles.input} type='tel' name = 'phone' id = 'phone' placeholder='+91' required/>
            </div>
            <div className={styles.formRow}>
                <label className={styles.label} for='query'>How can we help you ?<sup>*</sup></label>
                <textarea className={styles.textarea} name = 'query' id = 'query' placeholder='Place your query here...' required/>
            </div>
            <button className={styles.submitButton} type='submit'>Submit</button>
            <span className={styles.terms}>By clicking submit, you agree to Devsathali Terms and processing of your personal data as described in our Privacy Policy.</span>
        </form>
    )
}

const ContactSection = ({title, statement, resort, address, direction, phone, email, img, alt, title2, statement2, statement3, statement4}) => {
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
                    <div className={styles.imgWrapper}>
                        <img className={styles.img} src={img} alt = 'something'/>
                    </div>
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
                    <FormSec/>
                </div>
            </div>
        </div>
    )
}

export default ContactSection;