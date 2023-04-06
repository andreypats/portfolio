import React from "react";
import s from "./Skills.module.scss"
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import JSImage from "../assets/image/js.svg";
import TSImage from "../assets/image/typescript.svg";
import CSSImage from "../assets/image/css.svg";
import ReactImage from "../assets/image/react.svg";
import {Fade} from "react-awesome-reveal";

export const Skills = () => {
    const js = {backgroundImage: 'url(' + JSImage + ')'};
    const ts = {backgroundImage: 'url(' + TSImage + ')'};
    const css = {backgroundImage: 'url(' + CSSImage + ')'};
    const react = {backgroundImage: 'url(' + ReactImage + ')'};

    return (
        <div id={'skills'} className={s.skillsBlock}>
            <div className={s.photo}></div>
            <Fade duration={2000}>
                <div className={s.skillsContainer}>
                    <Title title={'Skills'}/>
                    <div className={s.skills}>
                        <Skill style={js} progress={'75.0'} title={'JavaScript'} />
                        <Skill style={ts} progress={'70.0'} title={'TypeScript'} />
                        <Skill style={css} progress={'78.0'} title={'CSS'} />
                        <Skill style={react} progress={'70.0'} title={'React'} />
                    </div>
                </div>
            </Fade>
        </div>
    );
};