import * as React from 'react';
import { slide as Menu } from 'react-burger-menu';
import {HashLink} from "react-router-hash-link";
import {Link} from "react-router-dom";

export const Sidebar = () => (

        <Menu>
            <Link className="menu-item" to={"/"} >
                Home
            </Link>
            <HashLink smooth to={"/#sectionExperiences"} className="menu-item">
                Experiencias
            </HashLink>
            <Link to={"/quienessomos"} className="menu-item">
                Quiénes Somos
            </Link>
            <Link className="menu-item" to={"/reservas"} >
                Reservas
            </Link>
        </Menu>
    )
