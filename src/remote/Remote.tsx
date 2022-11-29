import React from 'react';
import s from './Remote.module.scss'
import styleContainer from '../../src/common/styles/Container.module.css'
import {Title} from "../common/components/title/Title";
import {Button} from "../common/components/button/Button";

export const Remote = () => {
    return (
        <div className={s.remoteBlock}>
            <div className={`${styleContainer.container} ${s.remoteContainer}`}>
                <Title title={'Considering remote work options'}/>
                <Button title={'Hire me'}/>
            </div>
        </div>
    );
};