import React from 'react';
import s from './Projects.module.css'
import styleContainer from '../../src/common/styles/Container.module.css'
import {Project} from "./project/Project";
import {Title} from "../common/components/title/Title";

export const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${styleContainer.container} ${s.projectsContainer}`   }>
                <Title title={'Projects'}/>
                <div className={s.projects}>
                    <Project title={'Project 1'} description={'Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...'}/>
                    <Project title={'Project 2'} description={'Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...'}/>
                </div>
            </div>
        </div>
    );
};