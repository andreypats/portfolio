import React from 'react';
import s from './Skills.module.css'
import styleContainer from '../../src/common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`   }>
                <Title title={'Skills'}/>
                <div className={s.skills}>
                    <Skill title={'JS'} description={'Detailed description of the JS project'}/>
                    <Skill title={'CSS'} description={'Detailed description of the CSS project'}/>
                    <Skill title={'React'} description={'Detailed description of the React project'}/>
                </div>
            </div>
        </div>
    );
};