import React from 'react';
import s from './Remote.module.scss'
import {Title} from "../common/components/title/Title";
import {Button} from "../common/components/button/Button";

export const Remote = () => {
    return (
        <div className={s.remoteBlock}>
            <div className={s.remoteContainer}>
                <Title title={'Considering remote work options'}/>
                <div>
                    <Button title={'Hire me'}/>
                </div>
            </div>
        </div>
    );
};