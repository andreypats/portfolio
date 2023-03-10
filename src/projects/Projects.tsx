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

    return (
        <div id={'projects'} className={s.projectsBlock}>
            <Fade  duration={2000}>
                <div className={s.projectsContainer}>
                    <Title title={'Projects'}/>
                    <div className={s.projects}>
                        <Project style={cards} title={'Learn cards'} description={descriptionCards}/>
                        <Project style={social} title={'Social Network'} description={descriptionSocial}/>
                        <Project style={todo} title={'Todolist'} description={descriptionTodo}/>
                    </div>
                </div>
            </Fade>
        </div>
    );
};