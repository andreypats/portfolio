import React from 'react';
import s from './Skill.module.scss'

type SkillsType = {
    style: object
    title: string
    description: string
}

export const Skill = (props: SkillsType) => {
    return (
        <div className={s.skill}>
            <div className={s.icon} style={props.style}></div>
            <div className={s.skillTitle}>{props.title}</div>
            <span className={s.description}>{props.description}</span>
        </div>
    );
};