import React from 'react';
import s from './Contacts.module.scss'
import {Title} from '../common/components/title/Title';
import {Fade, Slide} from "react-awesome-reveal";
import {Remote} from "../remote/Remote";
import ContactsImage from "../assets/image/letter.png";
import { Formik, Field, Form } from 'formik';
import axios from "axios";

interface Values {
    name: string;
    email: string;
    phone: string;
    message: string;
}

export const Contacts = () => {

    const contactsPhoto = {backgroundImage: 'url(' + ContactsImage + ')'};

    return (
        <div id={'contacts'} className={s.contactsBlock}>
            <div className={s.photo} style={contactsPhoto}></div>
            <div className={s.contactsContainer}>
                <Title title={'Send message'}/>
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        phone: '',
                        message: '',
                    }}
                    onSubmit={async (
                        values: Values,
                    ) => {
                        await axios.post("http://localhost:5000/sendMessage", {
                            name: values.name,
                            email: values.email,
                            phone: values.phone,
                            message: values.message,
                        })
                        alert('Message send! Thanks! I`m call you!')
                    }}
                >
                    <Form className={s.form}>
                        <Slide direction={'down'}>
                            <Field id="name" name="name" placeholder="Your Name" type="text" className={s.input}/>
                        </Slide>
                        <Slide direction={'left'}>
                            <Field id="email" name="email" placeholder="Your Email" type="email" className={s.input}/>
                        </Slide>
                        <Slide direction={'right'}>
                            <Field id="phone" name="phone" placeholder="Your Phone" type="text" className={s.input}/>
                        </Slide>
                        <Fade  duration={2000}>
                            <Field id="message" name="message" placeholder="Your Message" type="text" className={s.input}/>
                        </Fade>
                        <div>
                            <button type="submit" className={s.btn}>Send</button>
                        </div>
                    </Form>
                </Formik>
            </div>
            <Remote />
        </div>

        /*<div id={'contacts'} className={s.contactsBlock}>
            <div className={s.photo} style={contactsPhoto}></div>
            <div className={s.contactsContainer}>
                <Title title={'Send message'}/>
                <form className={s.form}>
                    <Slide direction={'down'}>
                        <input type="text" placeholder={"Your Name"}/>
                    </Slide>
                    <Slide direction={'left'}>
                        <input type="text" placeholder={"Your Email"}/>
                    </Slide>
                    <Slide direction={'right'}>
                        <input type="text" placeholder={"Your Phone"}/>
                    </Slide>
                    <Fade  duration={2000}>
                        <textarea name="text" placeholder={"Your Message"}></textarea>
                    </Fade>

                </form>
                <div className={s.btn}>
                    <Button title={'Send'}/>
                </div>

            </div>
            <Remote />
        </div>*/
    );
};