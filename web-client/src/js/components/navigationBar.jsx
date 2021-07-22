import * as React from "react";
import {Link} from "react-router-dom";
import logo from './assets/logo-negativo.jpg';
import lupa from './assets/lupa.png';


export const NavigationBar = () => (
    <nav className={"navigationBar"}>
        <div className={"containerExpWho"}>
        <Link to={"/experiencias"} className={"exp-who"}>Experiencias</Link>
        <Link to={"/quienessomos"} className={"exp-who"}>Quiénes Somos</Link>
        </div>

        <img className={"logo-eco"} src={logo} />
            <div className={"containerSearchBar"}>
                <label htmlFor={"search"}></label>
                <input type={"text"} placeholder={"Busca tu experiencia"} />
                <button className={"btn-search"} type="submit"><i className={"fa fa-search"}></i></button>

            </div>

            <Link className={"btn-reservas"} to={"/reservas"} >Reservas</Link>

    </nav>
)