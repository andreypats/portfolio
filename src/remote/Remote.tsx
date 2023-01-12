import React from 'react';
import s from './Remote.module.scss'
import {Title} from "../common/components/title/Title";
import {Fade} from "react-awesome-reveal";

export const Remote = () => {
    return (
        <div id={'remote'} className={s.remoteBlock}>
            <Fade  duration={2000}>
                <div className={s.remoteContainer}>
                    <Title title={'My contacts'}/>
                </div>
            </Fade>
        </div>
    );
};