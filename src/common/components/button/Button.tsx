import s from './Button.module.scss'
import React from "react";

type ButtonPropsType = {
    title: string
}

export const Button = (props: ButtonPropsType) => {
    return (
        <div>
            <button className={s.button}>{props.title}</button>
        </div>
    );
};