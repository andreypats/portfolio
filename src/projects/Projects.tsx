import React from 'react';
import s from './Projects.module.scss'
import {Project} from "./project/Project";
import {Title} from "../common/components/title/Title";
import cardsImage from '../assets/image/cards.png'
import todoImage from '../assets/image/todo.jpg'
import socialImage from '../assets/image/social_media.jpg'
import {Fade} from "react-awesome-reveal";

export const Projects = () => {
    const cards = {backgroundImage: 'url(' + cardsImage + ')'};

    const social = {backgroundImage: 'url(' + socialImage + ')'};

    const todo = {backgroundImage: 'url(' + todoImage + ')'};

    const descriptionCards = 'A project to create training cards on arbitrary topics using typescript & react-redux. The project implements registration and login forms, parameter filtering and interaction with server data, the creation of a personal account, etc.'

    const descriptionSocial = 'Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...'

    const descriptionTodo = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.'

    const imageName = (name: string) => {
        if (name === 'cards') {
            // window.location.href='https://cards-nikskozlov.vercel.app/'
            window.open('https://cards-nikskozlov.vercel.app/');
        }
        if (name === 'social') {
            window.open('https://andreypats.github.io/portfolio/');
        }
        if (name === 'todo') {
            window.open('https://andreypats.github.io/portfolio/');
        }
    }

    return (
        <div id={'projects'} className={s.projectsBlock}>
            <Fade  duration={2000}>
                <div className={s.projectsContainer}>
                    <Title title={'Projects'}/>
                    <div className={s.projects}>
                        <Project id={'cards'} style={cards} title={'Learn cards'} description={descriptionCards} imageName={imageName}/>
                        <Project id={'social'} style={social} title={'Social Network'} description={descriptionSocial} imageName={imageName}/>
                        <Project id={'todo'} style={todo} title={'Todolist'} description={descriptionTodo} imageName={imageName}/>
                    </div>
                </div>
            </Fade>
        </div>
    );
};