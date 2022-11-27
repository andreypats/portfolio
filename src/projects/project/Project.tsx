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
            <h4 className={s.projectTitle}>{props.title}</h4>
            <span className={s.description}>{props.description}</span>
        </div>
    );
};