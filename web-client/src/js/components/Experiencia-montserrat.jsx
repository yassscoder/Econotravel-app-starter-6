import * as React from "react";
import montserrat_grande from './assets/montserrat_grande.jpg';
import montserrat_mini01 from './assets/montserrat_mini01.jpg';
import montserrat_mini02 from './assets/montserrat_mini02.jpg';
import iconoticket from './assets/icono_ticket.png';
import iconotiempo from './assets/icono_tiempo.png';
import iconoedades from './assets/icono_edades.png';
import {Link} from "react-router-dom";


export const ExperienciaMontserrat = () =>

    <section className="containerexperiencias">
        <header className={"cabeceraexperiencias"}>
            Montserrat, la montaña mágica
        </header>
        <section className={"gallery"}>


            <img className={"foto-grande"} src={montserrat_grande} />
            <img className={"foto-mini1"} src={montserrat_mini01} />
            <img className={"foto-mini2"} src={montserrat_mini02} />
        </section>
        <div className={"linea-iconos"}>
            <div className={"apartadoiconos"}>
                <img className={"icono_ticket"} src={iconoticket} />
                <p className={"textoiconos"}> 125€ / persona</p>
            </div>
            <div className={"apartadoiconos"}>
                <img className={"icono_tiempo"} src={iconotiempo} />
                <p className={"textoiconos"}> Duración 2h</p>
            </div>
            <div className={"apartadoiconos"}>
                <img className={"icono_edades"} src={iconoedades} />
                <p className={"textoiconos"}>Todas las edades</p>
            </div>
            <Link className={"btn-reservas2"} to={"/reservas"} >Reserva</Link>
        </div>
        <h1 className={"experienciasmuseos"}>Arte en la montaña sagrada</h1>
        <h5 className={"experienciascultura"}>Disfruta de la impresionante Montaña de Montserrat </h5>
        <article> Encontraréis el Museo con las salas
            modernistas de Puig i Cadafalch, lugar que acoge colecciones de gran valor en el corazón de la
            emblemática montaña. En el Museo encontraréis pinturas del Renacimiento y del Barroco que conviven
            con autores de los siglos XIX y XX, objetos del Próximo Oriente y orfebrería. Además de disfrutar de
            un paseo guiado por la montaña y el Museo, esta actividad incluye tentempié variado acompañado de vino
            espumoso, cava brut o refresco.

        </article>
    </section>
