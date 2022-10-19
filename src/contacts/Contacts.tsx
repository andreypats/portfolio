import React from 'react';
import s from './Contacts.module.css'
import styleContainer from '../../src/common/styles/Container.module.css'

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <h2 className={s.title}>Contacts</h2>
                <form className={s.form}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea name="text"></textarea>
                </form>
                <button className={s.button}>Send</button>
            </div>
        </div>
    );
};