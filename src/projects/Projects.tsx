import React from 'react';
import s from './Projects.module.scss'
import {Project} from "./project/Project";
import {Title} from "../common/components/title/Title";
import todoImage from './../assets/image/todo.jpg'
import socialImage from './../assets/image/social_media.jpg'

export const Projects = () => {
    const social = {
        backgroundImage: 'url(' + socialImage + ')',
    };

    const todo = {
        backgroundImage: 'url(' + todoImage + ')',
    };

    const descriptionSocial = 'Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...'

    const descriptionTodo = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.'

    return (

        <div className={s.projectsBlock}>
            <div className={s.projectsContainer}>
                <Title title={'Projects'}/>
                <div className={s.projects}>
                    <Project style={social} title={'Social Network'} description={descriptionSocial}/>
                    <Project style={todo} title={'Todolist'} description={descriptionTodo}/>
                </div>
            </div>
        </div>
    );
};