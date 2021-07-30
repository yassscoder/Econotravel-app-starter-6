import * as React from "react";
import modernismo_grande from './assets/modernismo_grande.jpg';
import modernismo_mini01 from './assets/modernismo_mini01.jpg';
import modernismo_mini02 from './assets/modernismo_mini02.jpg';
import iconoticket from './assets/icono_ticket.png';
import iconotiempo from './assets/icono_tiempo.png';
import iconoedades from './assets/icono_edades.png';
import {Link} from "react-router-dom";
import iconoaccesibilidad from "./assets/icono_accesibilidad.png";


export const ExperienciaModernista = () =>

    <section className="containerexperiencias">
        <header className={"cabeceraexperiencias"}>
            Barcelona, una joya del modernismo catalán
        </header>
        <section className={"gallery"}>


            <img className={"foto-grande"} src={modernismo_grande} />
            <img className={"foto-mini1"} src={modernismo_mini01} />
            <img className={"foto-mini2"} src={modernismo_mini02} />
        </section>
        <div className={"linea-iconos"}>
            <div className={"apartadoiconos"}>
                <img className={"icono_ticket"} src={iconoticket} />
                <p className={"textoiconos"}> 200€ / persona</p>
            </div>
            <div className={"apartadoiconos"}>
                <img className={"icono_tiempo"} src={iconotiempo} />
                <p className={"textoiconos"}> Duración 4h</p>
            </div>
            <div className={"apartadoiconos"}>
                <img className={"icono_edades"} src={iconoedades} />
                <p className={"textoiconos"}>Todas las edades</p>
            </div>
            <div className={"apartadoiconos"}>
                <img className={"icono_accesibilidad"} src={iconoaccesibilidad} />
                <p className={"textoiconos"}>Adaptada para silla ruedas</p>
            </div>
            <Link className={"btn-reservas2"} to={"/reservas"} >Reserva</Link>
        </div>
        <h1 className={"experienciasmuseos"}>Descubre la Barcelona Modernista de noche</h1>
        <h5 className={"experienciascultura"}>Ven a conocer los secretos que esconde el modernismo arquitectónico </h5>
        <article className={"textodescricion"}> Desplazarse a pie es una de las mejores formas de descubrir las maravillas modernistas que
            se esconden en el barcelonés distrito del Eixample, ubicado en el centro de la ciudad. En esta excursión
            de cuatro horas, descubriremos los principales emblemas del modernismo y visitaremos los templos y
            edificios más célebres del arquitecto Gaudí.
            El tour incluye visita guiada al interior de la Casa Batlló y la Sagrada Familia, así como parada para
            cenar en el restaurante típico catalán Can Masiá, donde disfrutaremos de las mejores carnes de la región
            acompañadas de vinos de las tierras del Baix Empordá. El restaurante también ofrece opciones vegetarianas
            y veganas así como menú para niños. Cava aparte.


        </article>
    </section>
