import * as React from "react";
import {Link} from "react-router-dom";
import logo from './assets/logo-eco-1.png';



export const NavigationBar = () => (
    <nav className={"navigationBar"}>
        <Link to={"/experiencias"}>Experiencias</Link>
        <Link to={"/quienessomos"}>Quiénes Somos</Link>

        <img className={"logo-eco"} src={logo} />
        <Link className={"btn-reservas"} to={"/reservas"} >Reservas</Link>
        <label htmlFor={"search"}></label>
        <input type={"text"} placeholder={"Busca tu experiencia"} />
        <input type={"submit"} value="Buscar"/>


    </nav>
)