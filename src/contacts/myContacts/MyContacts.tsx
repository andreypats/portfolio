import React from 'react';
import s from './MyContacts.module.scss'
import {Title} from "../../common/components/title/Title";
import {Fade} from "react-awesome-reveal";

export const MyContacts = () => {
    return (
        <div id={'remote'} className={s.myContactsBlock}>
            <div className={s.photos}></div>
            <Fade  duration={2000}>
                <div className={s.myContactsContainer}>
                    <Title title={'My contacts'}/>
                    <div className={s.contact}>
                        <div>
                            <div className={s.contactTitle}>Address</div>
                            <div className={s.contactValue}>Mogilev, Belarus</div>
                        </div>
                        <div>
                            <div className={s.contactTitle}>Email</div>
                            <div className={s.contactValue}>andrey.it.work@gmail.com</div>
                        </div>
                        <div>
                            <div className={s.contactTitle}>Call</div>
                            <div className={s.contactValue}>+375-44-494-88-10</div>
                        </div>
                    </div>
                    <div className={s.link}>
                        <div>
                            {/*<a href="https://t.me/andrey_it_work">*/}
                                <img src="src/assets/image/telegram.png" alt="Telegram" />
                            {/*</a>*/}
                        </div>
                        <div>LinkedIn</div>
                    </div>
                </div>
            </Fade>
        </div>
    );
};