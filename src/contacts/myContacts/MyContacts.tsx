import React from 'react';
import s from './MyContacts.module.scss'
import {Title} from "../../common/components/title/Title";
import {Fade, Zoom} from "react-awesome-reveal";
import telegram from "../../../src/assets/image/telegram.svg";
import linkedin from "../../../src/assets/image/linkedin.svg";


export const MyContacts = () => {
    return (
        <div id={'remote'} className={s.myContactsBlock}>
            <div className={s.photos}></div>
            <Fade  duration={2000}>
                <div className={s.myContactsContainer}>
                    <Title title={'My contacts'}/>
                    <div className={s.contact}>
                        <Zoom delay={1000}>
                            <div>
                                <div className={s.contactTitle}>Address</div>
                                <div className={s.contactValue}>Mogilev, Belarus</div>
                            </div>
                        </Zoom>
                        <Zoom delay={500}>
                            <div>
                                <a href="https://t.me/andrey_it_work">
                                    <img src={telegram} alt="Telegram" />
                                </a>
                            </div>
                        </Zoom>
                        <Zoom delay={100}>
                            <div>
                                <div className={s.contactTitle}>Email</div>
                                <div className={s.contactValue}>andrey.it.work@gmail.com</div>
                            </div>
                        </Zoom>
                        <Zoom delay={500}>
                            <div>
                                <a href="https://www.linkedin.com/in/andrey-pats/">
                                    <img src={linkedin} alt="Linkedin" />
                                </a>
                            </div>
                        </Zoom>
                        <Zoom delay={1000}>
                            <div>
                                <div className={s.contactTitle}>Call</div>
                                <div className={s.contactValue}>+375-44-494-88-10</div>
                            </div>
                        </Zoom>

                    </div>
                </div>
            </Fade>
        </div>
    );
};