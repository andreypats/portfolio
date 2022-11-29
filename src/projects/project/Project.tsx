import React from 'react';
import s from './Project.module.scss'
import {Button} from "../../common/components/button/Button";

type ProjectsType = {
    style: object
    title: string
    description: string
}

export const Project = (props: ProjectsType) => {
    return (
        <div className={s.project}>
            <div className={s.image} style={props.style}>
                <div className={s.button}>
                    <Button title={'Watch'}/>
                </div>
            </div>
            <h4 className={s.projectTitle}>{props.title}</h4>
            <span className={s.description}>{props.description}</span>
        </div>
    );
};