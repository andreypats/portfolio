import React from 'react';
import s from './Project.module.scss'

type ProjectsType = {
    style: object
    title: string
    description: string
}

export const Project = (props: ProjectsType) => {
    return (
        <div className={s.project}>
            <div className={s.image} style={props.style}>
                <button className={s.button}>Watch</button>
            </div>
            <h4 className={s.projectTitle}>{props.title}</h4>
            <span className={s.description}>{props.description}</span>
        </div>
    );
};