import React from 'react';
import s from './Project.module.css'

type ProjectsType = {
    title: string
    description: string
}

export const Project = (props: ProjectsType) => {
    return (
        <div className={s.project}>
            <div className={s.icon}>
                <div className={s.button}>
                    <button>Watch</button>
                </div>
            </div>
            <h3>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
        </div>
    );
};