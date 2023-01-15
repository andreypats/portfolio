import React from 'react';
import s from './Main.module.scss'
import myPhoto from '../assets/image/IAm.jpg'
import Typewriter from 'typewriter-effect';
import {Slide} from "react-awesome-reveal";

export const Main = () => {
    const mainPhoto = {
        backgroundImage: 'url(' + myPhoto + ')'
    };

    return (
        <div id={'main'} className={s.mainPage}>
            <div className={s.photo} style={mainPhoto}></div>
            <div className={s.mainBlock}>
                <div className={s.text}>
                    <Slide direction={'down'}>
                        <h6 className={s.name}>
                            <span className={s.name_1}>I Am  </span>
                            <span>ANDREY PATS</span>
                        </h6>
                    </Slide>
                    <div className={s.profession}>
                        <Typewriter
                            options={{
                                autoStart: true,
                                loop: true,
                                delay: 50,
                            }}
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString('A FRONTEND  DEVELOPER')
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .pauseFor(1000)
                                    .start();
                            }}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};