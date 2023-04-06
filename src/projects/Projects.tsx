import React from 'react';
import s from './Projects.module.scss'
import {Project} from "./project/Project";
import {Title} from "../common/components/title/Title";
import cardsImage from '../assets/image/cards.png'
import todoImage from '../assets/image/todo.png'
import {Fade} from "react-awesome-reveal";

export const Projects = () => {
    const cards = {backgroundImage: 'url(' + cardsImage + ')'};

    const todo = {backgroundImage: 'url(' + todoImage + ')'};

    const descriptionCards = 'A project to create training cards on arbitrary topics using typescript & react-redux. The project implements registration and login forms, parameter filtering and interaction with server data, the creation of a personal account, etc.'

    const descriptionTodo = 'A project to create task lists using typescript, redux-toolkit, material-ui. The project implements the ability to create (delete) task lists, edit and sort them.'

    const imageName = (name: string) => {
        if (name === 'cards') {
            window.open('https://github.com/andreypats/cards');
        }
        if (name === 'todo') {
            window.open('https://github.com/andreypats/todolist-ts-01');
        }
    }

    return (
        <div id={'projects'} className={s.projectsBlock}>
            <Fade  duration={2000}>
                <div className={s.projectsContainer}>
                    <Title title={'Projects'}/>
                    <div className={s.projects}>
                        <Project id={'cards'} style={cards} title={'Learn cards'} description={descriptionCards} imageName={imageName}/>
                        <Project id={'todo'} style={todo} title={'Todolist'} description={descriptionTodo} imageName={imageName}/>
                    </div>
                </div>
            </Fade>
        </div>
    );
};