import React, {useEffect, useState} from 'react';
import s from './Header.module.scss';
import {Nav} from "../nav/Nav";

export const Header = () => {

    const [headerShow, setHeaderShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, [headerShow]);

    const handleScroll = () =>{
        (window.scrollY > 0) ? setHeaderShow(true) : setHeaderShow(false);
    }

    return (
        <div className={s.header} style={{
            backgroundColor: headerShow ? "#212529" : "transparent"
        }}>
            <Nav />
        </div>
    );
};