import React, {useState} from 'react';
import styles from './BookingForm.module.css';
import { send } from 'emailjs-com';

const BookingForm = ({ handleClose, show }) => {
    const [toSend, setToSend] = useState({
        name: '',
        email: '',
        phone: '',
    });
    
    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
    
        var templateParams = {
            from_name: 'DBR',
            to_name: 'Team',
            message: 'Name: ' + toSend.firstname + " " + toSend.lastname + '\nEmail: ' + toSend.email + '\nPhone: ' + toSend.phone + "\nQuery: " + toSend.query
        }
        
        console.log("help\n", templateParams);

        send(
            'service_5thvdtl',
            'template_6jwm1wg',
            templateParams,
            '8WcsRXP72BffuKvQs'
        )
        .then((response) => {
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

    const showHideClassName = show ? `${styles.modal} ${styles.display_block}` : `${styles.modal} ${styles.display_none}`;

    return(
        <div className={showHideClassName}>
            <section className={styles.modal_main}>
                <div className={styles.header}>
                    <div className={styles.title}>
                        Booking Form
                    </div>
                    <button onClick={handleClose} className={styles.close}>
                        Close
                    </button>
                </div>
                <form className={styles.form} onSubmit={onSubmit}>
                    <div className={styles.formRow}>
                        <label className={styles.label} for='name'>Full name<sup>*</sup></label>
                        <input className={styles.input} 
                                type='text' 
                                name = 'name' 
                                id = 'name'
                                placeholder='John Doe'
                                value={toSend.name}
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
                    <button className={styles.submitButton} type='submit'>Submit</button>
                </form>
            </section>
        </div>
    )
}

export default BookingForm;