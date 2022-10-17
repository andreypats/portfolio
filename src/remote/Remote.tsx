import React from 'react';
import s from './Remote.module.css'
import styleContainer from '../../src/common/styles/Container.module.css'

export const Remote = () => {
    return (
        <div className={s.remoteBlock}>
            <div className={`${styleContainer.container} ${s.remoteContainer}`   }>
                <h2 className={s.title}>Considering remote work options</h2>
                <div className={s.button}>
                    <button>Hire me</button>
                </div>
            </div>
        </div>
    );
};