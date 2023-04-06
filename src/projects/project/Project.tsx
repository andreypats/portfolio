import React from 'react';
import s from './Project.module.scss'

type ProjectsType = {
    id: string
    style: object
    title: string
    description: string
    imageName: (name: string)=>void
}

export const Project = (props: ProjectsType) => {

    const onclickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        props.imageName(e.currentTarget.id)
    }

   return (
        <div className={s.project}>
            <div id={props.id} className={s.image} style={props.style} onClick={e=>onclickHandler(e)}></div>
            <h4 className={s.projectTitle}>{props.title}</h4>
            <span className={s.description}>{props.description}</span>
        </div>
    );
};