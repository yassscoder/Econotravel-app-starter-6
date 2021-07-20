import * as React from "react";
import {Link} from "react-router-dom";

export const NavigationBar = () => (
    <nav className={"navigationBar"}>
        <Link to={"/experiencias"}>Experiencias</Link>
        <Link to={"/quienessomos"}>Quiénes Somos</Link>
        <Link to={"/reservas"} >Reservas</Link>
    </nav>
)