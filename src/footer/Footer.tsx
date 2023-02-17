import React from 'react';
import s from './Footer.module.scss'

export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.footerContainer}>
                <div className={s.copyrights}>&copy; 2022 All rights reserved - <span>Andrey Pats</span></div>
            </div>
        </div>
    );
};