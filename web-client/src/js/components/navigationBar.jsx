import * as React from "react";
import {Link} from "react-router-dom";
import logo from './assets/logo-center.png';
import {HashLink} from "react-router-hash-link";
import {Sidebar} from "./Sidebar";



export const NavigationBar = () => (
   <router>
       <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        <nav className={"navigationBar"}>
        <div className={"containerExpWho"}>
        <HashLink smooth to={"/#sectionExperiences"} className={"exp-who"}>Experiencias</HashLink>
        <Link to={"/quienessomos"} className={"exp-who"}>Quiénes Somos</Link>
        </div>
        <Link to={"/"} >
            <img className={"logo-eco"} src={logo} />
        </Link>
            <div className={"containerSearchBar"}>
                <section>
                    <label htmlFor={"search"}></label>
                    <input type={"text"} placeholder={"Busca tu experiencia"} />
                    <button className={"btn-search"} type="submit"><i className={"fa fa-search"}></i></button>
                </section>
                <Link className={"btn-reservas"} to={"/reservas"} >Reservas</Link>
            </div>



    </nav>
   </router>
)

