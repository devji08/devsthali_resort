import React, {useState} from 'react';
import styles from './ContactUsForm.module.css';
import { send } from 'emailjs-com';
import Spinner from '../Spinner/Spinner';

const ContactUsForm = () => {
    const [toSend, setToSend] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        query: ''
    });

    const [isLoading, setIsLoading] = useState(false);
    
    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        var templateParams = {
            from_name: 'DBR',
            to_name: 'Sales Team',
            firstname: toSend.firstname,
            lastname: toSend.lastname,
            email: toSend.email,
            phone: toSend.phone,
            query: toSend.query
        }
        
        send(
            'service_5thvdtl',
            'template_thpdd7r',
            templateParams,
            '8WcsRXP72BffuKvQs'
        )
        .then((response) => {
            setIsLoading(false);
            console.log('SUCCESS!', response.status, response.text);
        })
        .catch((err) => {
            console.log('FAILED...', err);
        });

        setToSend({
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            query: ''
        });
    };

    return(
        <form className={styles.form} onSubmit={onSubmit}>
            <div className={styles.formRow}>
                <label className={styles.label} for='firstname'>First name<sup>*</sup></label>
                <input className={styles.input} 
                        type='text' 
                        name = 'firstname' 
                        id = 'firstname' placeholder='John'
                        value={toSend.firstname}
                        onChange={handleChange} 
                        required/>
            </div>
            <div className={styles.formRow}>
                <label className={styles.label} for='lastname'>Last name<sup>*</sup></label>
                <input className={styles.input} 
                        type='text' 
                        name = 'lastname' 
                        id = 'lastname' 
                        value={toSend.lastname}
                        placeholder='Doe' 
                        onChange={handleChange} 
                        required/>
            </div>
            <div className={styles.formRow}>
                <label className={styles.label} for='email'>Email<sup>*</sup></label>
                <input className={styles.input} 
                        type='email' 
                        name = 'email' 
                        id = 'email' 
                        value={toSend.email}
                        placeholder='username@mail.com' 
                        onChange={handleChange} 
                        required/>
            </div>
            <div className={styles.formRow}>
                <label className={styles.label} for='phone'>Phone number<sup>*</sup></label>
                <input className={styles.input} 
                        type='tel' 
                        name = 'phone' 
                        id = 'phone' 
                        value={toSend.phone}
                        placeholder='+91' 
                        onChange={handleChange} 
                        required/>
            </div>
            <div className={styles.formRow}>
                <label className={styles.label} for='query'>How can we help you ?<sup>*</sup></label>
                <textarea className={styles.textarea} 
                        name = 'query' 
                        id = 'query' 
                        value={toSend.query}
                        placeholder='Place your query here...' 
                        onChange={handleChange} required/>
            </div>
            <button className={styles.submitButton} type='submit'>
                {isLoading ? <Spinner/> : 'Submit'}
            </button>
            <span className={styles.terms}>By clicking submit, you agree to Devsathali Terms and processing of your personal data as described in our Privacy Policy.</span>
        </form>
    )
}

export default ContactUsForm;