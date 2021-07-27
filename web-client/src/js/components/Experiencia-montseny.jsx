import * as React from "react";
import montsenybici from './assets/montsenybici.jpg';
import montseny_mini01 from './assets/montseny_mini01.jpg';
import montseny_mini02 from './assets/montseny_mini02.jpg';


export const ExperienciaMontseny = () =>

<section className="containerexperiencias">
        <header className={"cabeceraexperiencias"}>
            Descubre la Barcelona ecofriendly
        </header>
    <section className={"gallery"}>
        <img className={"montseny-bici"} src={montsenybici} />
        <img className={"montseny-mini1"} src={montseny_mini01} />
        <img className={"montseny-mini2"} src={montseny_mini02} />
    </section>

        <h1 className={"experienciasmuseos"}>7 museos junto al mar en el Catalunya</h1>
    <h5 className={"experienciascultura"}>Lugares para descubrir la costa catalana y disfrutar de la cultura</h5>
        <article>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </article>
    Lore
</section>

