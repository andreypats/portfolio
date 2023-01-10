import React from 'react';
import s from './Skills.module.scss'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import JSImage from "../assets/image/js.svg";
import CSSImage from "../assets/image/css.svg";
import ReactImage from "../assets/image/react.svg";

export const Skills = () => {
    const js = {
        backgroundImage: 'url(' + JSImage + ')',
    };

    const css = {
        backgroundImage: 'url(' + CSSImage + ')',
    };

    const react = {
        backgroundImage: 'url(' + ReactImage + ')',
    };

    return (
        <div className={s.skillsBlock}>
            <div className={s.skillsContainer}>
                <Title title={'Skills'}/>
                <div className={s.skills}>
                    <Skill style={js} title={'JS'} description={'Detailed description of the JS project'}/>
                    <Skill style={css} title={'CSS'} description={'Detailed description of the CSS project'}/>
                    <Skill style={react} title={'React'} description={'Detailed description of the React project'}/>
                </div>
            </div>
        </div>
    );
};