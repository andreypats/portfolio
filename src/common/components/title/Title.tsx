import React from 'react';
import s from './Title.module.css'

type TitlePropsType = {
    title: string
}

export const Title = (props: TitlePropsType) => {
    return (
        <div className={s.title}>
            <h2>{props.title}</h2>
            <div className={s.spaceBorder}></div>
        </div>
    );
};