import React from 'react';
import s from './Footer.module.scss'
import styleContainer from "../common/styles/Container.module.css";

export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <div className={s.body}>
                    <div className={s.bodyElement}>
                        <a href="https://ru-ru.facebook.com/">Facebook</a>
                    </div>
                    <div className={s.bodyElement}>
                        <a href="https://twitter.com/?lang=ru">Twitter</a>
                    </div>

                    <div className={s.bodyElement}>
                        <a href="https://ru.linkedin.com/">Linkedln</a>
                    </div>
                </div>
                <div className={s.copyrights}>&copy; 2022 All rights reserved - Andrey Pats</div>
            </div>
        </div>
    );
};