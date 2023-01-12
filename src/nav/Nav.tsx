import React from 'react';
import s from './Nav.module.scss';
import {NavLinkStyles} from "./navLinkStyles/NavLinkStyles";

export const Nav = () => {

    return (
        <div className={s.nav}>
            <NavLinkStyles to={"main"} linkName={"Main"}/>
            <NavLinkStyles to={"skills"} linkName={"Skills"}/>
            <NavLinkStyles to={"projects"} linkName={"Projects"}/>
            <NavLinkStyles to={"contacts"} linkName={"Contacts"}/>
        </div>
    );
};