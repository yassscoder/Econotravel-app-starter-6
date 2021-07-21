import * as React from "react";
import {Link} from "react-router-dom";
import logo from './assets/logo-eco-1.png';



export const NavigationBar = () => (
    <nav className={"navigationBar"}>
        <Link to={"/experiencias"}>Experiencias</Link>
        <Link to={"/quienessomos"}>Quiénes Somos</Link>
        <Link className={"prueba"} to={"/reservas"} >Reservas</Link>
        <img className={"logo-eco"} src={logo} />


    </nav>
)