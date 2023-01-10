import React from 'react';
import s from './Contacts.module.scss'
import {Title} from '../common/components/title/Title';
import {Button} from '../common/components/button/Button';

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={s.contactsContainer}>
                <Title title={'Contacts'}/>
                <form className={s.form}>
                    <input type="text" placeholder={"Your Name"}/>
                    <input type="text" placeholder={"Your Email"}/>
                    <input type="text" placeholder={"Your Phone"}/>
                    <textarea name="text" placeholder={"Your Message"}></textarea>
                </form>
                <div className={s.button}>
                    <Button title={'Send'}/>
                </div>
            </div>
        </div>
    );
};