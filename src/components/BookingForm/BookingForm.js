import React, {useState} from 'react';
import styles from './BookingForm.module.css';
import { send } from 'emailjs-com';
import Spinner from '../Spinner/Spinner';

const BookingForm = ({ handleClose, show }) => {
    const [toSend, setToSend] = useState({
        name: '',
        email: '',
        phone: '',
        checkInDate: '',
        checkOutDate: '',
        persons: ''
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
            name: toSend.name,
            email: toSend.email,
            phone: toSend.phone,
            checkInDate: toSend.checkInDate,
            checkOutDate: toSend.checkOutDate,
            persons: toSend.persons
        }
        
        console.log("help\n", templateParams);

        send(
            'service_5thvdtl',
            'template_6jwm1wg',
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
            name: '',
            email: '',
            phone: '',
            checkInDate: '',
            checkOutDate: '',
            persons: ''
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
                        <div className={styles.formCol}>
                            <label className={styles.label} htmlFor='name'>Full name<sup>*</sup></label>
                            <input className={styles.input} 
                                    type='text' 
                                    name = 'name' 
                                    id = 'name'
                                    placeholder='John Doe'
                                    value={toSend.name}
                                    onChange={handleChange} 
                                    required
                            />
                        </div>
                        <div className={styles.formCol}>
                            <label className={styles.label} htmlFor='checkInDate'>Check In Date<sup>*</sup></label>
                            <input className={styles.input} 
                                    type='text' 
                                    name = 'checkInDate' 
                                    id = 'checkInDate'
                                    placeholder='01-01-2022'
                                    value={toSend.checkInDate}
                                    onChange={handleChange} 
                                    required
                            />
                        </div>
                    </div>
                    <div className={styles.formRow}>
                        <div className={styles.formCol}>
                            <label className={styles.label} htmlFor='email'>Email<sup>*</sup></label>
                            <input className={styles.input} 
                                    type='email' 
                                    name = 'email' 
                                    id = 'email' 
                                    value={toSend.email}
                                    placeholder='username@mail.com' 
                                    onChange={handleChange} 
                                    required
                            />
                        </div>
                        <div className={styles.formCol}>
                            <label className={styles.label} htmlFor='checkOutDate'>Check Out Date<sup>*</sup></label>
                            <input className={styles.input} 
                                    type='text' 
                                    name = 'checkOutDate' 
                                    id = 'checkOutDate' 
                                    value={toSend.checkOutDate}
                                    placeholder='02-01-2022' 
                                    onChange={handleChange} 
                                    required
                            />
                        </div>
                    </div>
                    <div className={styles.formRow}>
                        <div className={styles.formCol}>
                            <label className={styles.label} htmlFor='phone'>Phone number<sup>*</sup></label>
                            <input className={styles.input} 
                                    type='tel' 
                                    name = 'phone' 
                                    id = 'phone' 
                                    value={toSend.phone}
                                    placeholder='+91' 
                                    onChange={handleChange} 
                                    required
                            />
                        </div>
                        <div className={styles.formCol}>
                            <label className={styles.label} htmlFor='persons'>No. of Persons<sup>*</sup></label>
                            <input className={styles.input} 
                                    type='text' 
                                    name = 'persons' 
                                    id = 'persons' 
                                    value={toSend.persons}
                                    placeholder='2' 
                                    onChange={handleChange} 
                                    required
                            />
                        </div>
                    </div>
                    <button className={styles.submitButton} type='submit'>
                        {isLoading ? <Spinner/> : 'Submit'}
                    </button>
                </form>
            </section>
        </div>
    )
}

export default BookingForm;