import React from 'react';
import s from './Footer.module.css'
import styleContainer from "../common/styles/Container.module.css";

export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={`${styleContainer.container} ${s.footerContainer}`   }>
                <h2 className={s.title}>Andrey Pats</h2>
                <div className={s.body}>
                    <div className={s.bodyElement}></div>
                    <div className={s.bodyElement}></div>
                    <div className={s.bodyElement}></div>
                    <div className={s.bodyElement}></div>
                </div>
                <h4 className={s.copyrights}>&copy; 2022 All rights reserved</h4>
            </div>
        </div>
    );
};