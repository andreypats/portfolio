import React from 'react';
import s from './Contacts.module.scss'
import {Title} from '../common/components/title/Title';
import {Fade, Slide} from "react-awesome-reveal";
import {MyContacts} from "./myContacts/MyContacts";
import {useFormik, FormikValues, FormikErrors} from 'formik';
import axios from "axios";

const validate = (values: FormikValues) => {
    const errors: FormikErrors<FormikValues> = {};
    if (!values.name) {
        errors.name = 'Name is required';
    }
    if (!values.email) {
        errors.email = 'Email is required';
    } else if (!/^[A-Z\d._%+-]+@[A-Z\d.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if (!values.phone) {
        errors.phone = 'Phone is required';
    }
    if (!values.message) {
        errors.message = 'Message is required';
    } else if (values.message.length <= 3) {
        errors.message = 'Message must be more then 3 characters';
    }
    return errors;
};

export const Contacts = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            message: '',
        },
        validate,
        onSubmit: async (values, { resetForm }) => {
            try {
                await axios.post("http://localhost:5000/sendMessage", {
                    name: values.name,
                    email: values.email,
                    phone: values.phone,
                    message: values.message,
                })
                alert('Message sent! Thank you! I will get back to you shortly!')
            } catch (e) {
                alert('Excuse me! There\'s been a mistake (' + e + ')! Please resend the message!')
            }
            resetForm();
        },
    });

    return (
        <div id={'contacts'} className={s.contactsBlock}>
            <div className={s.contactsContainer}>
                <Title title={'Send message'}/>
                <form className={s.form} onSubmit={formik.handleSubmit}>
                    <Slide direction={'down'}>
                        <input
                            id="name"
                            type="text"
                            placeholder="Your Name*"
                            {...formik.getFieldProps("name")}
                        />
                    </Slide>
                    {formik.touched.name && formik.errors.name
                        ? <div className={s.error}>{formik.errors.name}</div>
                        : null}

                    <Slide direction={'left'}>
                        <input
                            id="email"
                            type="text"
                            placeholder="Your Email* - example@gmail.com"
                            {...formik.getFieldProps("email")}
                        />
                    </Slide>
                    {formik.touched.email && formik.errors.email
                        ? <div className={s.error}>{formik.errors.email}</div>
                        : null}

                    <Slide direction={'right'}>
                        <input
                            id="phone"
                            type="text"
                            placeholder="Your Phone* - +375(29)123-45-67"
                            {...formik.getFieldProps("phone")}
                        />
                    </Slide>
                    {formik.touched.phone && formik.errors.phone
                        ? <div className={s.error}>{formik.errors.phone}</div>
                        : null}

                    <Fade  duration={3000}>
                        <textarea
                            id="message"
                            placeholder="Your Message*"
                            {...formik.getFieldProps("message")}
                        ></textarea>
                    </Fade>
                    {formik.touched.message && formik.errors.message
                        ? <div className={s.error}>{formik.errors.message}</div>
                        : null}

                    <div>
                        <button type="submit" className={s.btn}>Send</button>
                    </div>
                </form>
            </div>
            <MyContacts />
        </div>
    );
};