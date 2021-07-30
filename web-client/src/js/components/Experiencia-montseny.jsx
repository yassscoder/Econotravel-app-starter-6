import * as React from "react";
import montsenybici from './assets/montsenybici.jpg';
import montseny_mini01 from './assets/montseny_mini01.jpg';
import montseny_mini02 from './assets/montseny_mini02.jpg';
import iconoticket from './assets/icono_ticket.png';
import iconotiempo from './assets/icono_tiempo.png';
import iconoedades from './assets/icono_edades.png';
import {Link} from "react-router-dom";
import iconoaccesibilidad from "./assets/icono_accesibilidad.png";


export const ExperienciaMontseny = () =>

<section className="containerexperiencias">
        <header className={"cabeceraexperiencias"}>
            Montseny mágico
        </header>
    <section className={"gallery"}>


        <img className={"foto-grande"} src={montsenybici} />
        <img className={"foto-mini1"} src={montseny_mini01} />
        <img className={"foto-mini2"} src={montseny_mini02} />
    </section>
        <div className={"linea-iconos"}>
            <div className={"apartadoiconos"}>
            <img className={"icono_ticket"} src={iconoticket} />
            <p className={"textoiconos"}> 250€ / persona</p>
            </div>
            <div className={"apartadoiconos"}>
            <img className={"icono_tiempo"} src={iconotiempo} />
            <p className={"textoiconos"}> Duración 5h</p>
            </div>
            <div className={"apartadoiconos"}>
            <img className={"icono_edades"} src={iconoedades} />
            <p className={"textoiconos"}>Todas las edades</p>
            </div>
            <div className={"apartadoiconos"}>
                <img className={"icono_accesibilidad"} src={iconoaccesibilidad} />
                <p className={"textoiconos"}>Bicicletas movilidad adaptada</p>
            </div>
            <Link className={"btn-reservas2"} to={"/reservas"} >Reserva</Link>
        </div>
        <h1 className={"experienciasmuseos"}>Paseo en bicicleta por el Montseny</h1>
    <h5 className={"experienciascultura"}>Disfruta de un hermoso paseo en bicicleta por el increíble Parque Natural
        del Montseny.</h5>
        <article className={"textodescricion"}>Una escapada veraniega perfecta para parejas, familias y amigos que nos permitirá conocer nuevos y
            sorprendentes lugares.
            El recorrido que os proponemos comienza con una larga subida con algunos descansos, combinando asfalto y
            pistas anchas, culminando en un mirador con magníficas vistas del Vallés y el mar. Desde aquí continuaremos
            la bajada combinando senderos, pistas y algún tramo de carretera y terreno mixto para visitar la zona de
            Santa Fe, donde descubriremos la Ermita y el Bosque de las Secuoyas. Para finalizar, acudiremos al
            restaurante María Rosa de Palautordera, donde disfrutaremos de una excelente comida casera con butifarra
            blanca y negra y munxetes del Montseny.

        </article>

</section>

