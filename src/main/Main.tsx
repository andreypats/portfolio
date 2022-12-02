import React from 'react';
import s from './Main.module.scss'
import styleContainer from '../../src/common/styles/Container.module.css'
import myPhoto from '../assets/image/IAm.jpg'

export const Main = () => {
    const mainPhoto = {
        backgroundImage: 'url(' + myPhoto + ')',
    };

    return (
        <div className={s.mainPage}>
            <div className={`${styleContainer.container} ${s.mainBlock}`}>
                <div className={s.text}>
                    <h6 className={s.name}>I Am Andrey Pats</h6>
                    <div className={s.profession}>A FRONTEND DEVELOPER</div>
                </div>
                <div className={s.photo} style={mainPhoto}></div>
            </div>
        </div>
    );
};