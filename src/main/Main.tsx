import React from 'react';
import s from './Main.module.scss'
import Typewriter from 'typewriter-effect';
import {Slide} from "react-awesome-reveal";

export const Main = () => {
    return (
        <div id={'main'} className={s.mainPage}>
            <div className={s.photo}></div>
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
                    <div className={s.locate}>
                        <div className={s.country}>Belarus</div>
                        <div className={s.city}>Mogilev</div>
                    </div>
                </div>

            </div>
        </div>
    );
};