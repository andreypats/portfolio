import React from 'react';
import {Link} from "react-scroll";

type PropsType = {
    to: string
    linkName: string
}

export const NavLinkStyles = (props: PropsType) => {
    return (
        <Link
            activeStyle={{ color: '#cf1f1f' }}
            to={props.to}
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
        >{props.linkName}</Link>
    );
};