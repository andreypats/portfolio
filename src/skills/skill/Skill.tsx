import React from 'react';
import s from './Skill.module.scss'
import {CircularProgress, CircularProgressLabel} from "@chakra-ui/react";
import { Zoom } from 'react-awesome-reveal';

type SkillsType = {
    style: object
    title: string
    progress: string
}

export const Skill = (props: SkillsType) => {
    return (
        <div className={s.skill}>
            <div className={s.skillTitle}>{props.title}</div>
            <Zoom>
                <CircularProgress
                    value={+props.progress}
                    size='200px'
                    thickness='2px'
                    color='#cf1f1f'
                    trackColor='#646363'
                >
                    <CircularProgressLabel className={s.circularProgressLabel}>{props.progress}%</CircularProgressLabel>
                </CircularProgress>
            </Zoom>
            <div className={s.icon} style={props.style}></div>
        </div>
    );
};