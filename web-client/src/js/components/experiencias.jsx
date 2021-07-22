import * as React from "react";
import montsenybici from './assets/montsenybici.jpg';


export const Experiencias = () =>

<section className="containerexperiencias">
        <header className={"cabeceraexperiencias"}>
            Descubre la Barcelona ecofriendly
        </header>
        <img className={"montseny-bici"} src={montsenybici} />
        <h1 className={"experienciasmuseos"}>7 museos junto al mar en el Catalunya</h1>
    <h5 className={"experienciascultura"}>Lugares para descubrir la costa catalana y disfrutar de la cultura</h5>
        <article>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </article>
</section>

