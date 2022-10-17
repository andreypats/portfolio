import React from 'react';
import s from './Projects.module.css'
import styleContainer from '../../src/common/styles/Container.module.css'
import {Project} from "./project/Project";

export const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${styleContainer.container} ${s.projectsContainer}`   }>
                <h2 className={s.title}>Projects</h2>
                <div className={s.projects}>
                    <Project title={'Project 1'} description={'Detailed description of the 1 project'}/>
                    <Project title={'Project 2'} description={'Detailed description of the 2 project'}/>
                </div>
            </div>
        </div>
    );
};