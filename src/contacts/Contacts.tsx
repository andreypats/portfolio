import React from 'react';
import s from './Contacts.module.scss'
import {Title} from '../common/components/title/Title';
import {Button} from '../common/components/button/Button';
import {Fade, Slide} from "react-awesome-reveal";
import {Remote} from "../remote/Remote";

export const Contacts = () => {
    return (
        <div id={'contacts'} className={s.contactsBlock}>
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
                <div className={s.button}>
                    <Button title={'Send'}/>
                </div>
            </div>
            <Remote />
        </div>
    );
};