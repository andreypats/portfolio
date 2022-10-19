import React from 'react';
import s from './Project.module.css'

type ProjectsType = {
    title: string
    description: string
}

export const Project = (props: ProjectsType) => {
    return (
        <div className={s.project}>
            <div className={s.image}>
                <button className={s.button}>Watch</button>
            </div>
            <h3>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
        </div>
    );
};