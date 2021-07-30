import * as React from "react";
import colonia_grande from './assets/colonia_grande.jpeg';
import colonia_mini01 from './assets/colonia_mini01.jpeg';
import colonia_mini02 from './assets/colonia_mini02.jpeg';
import iconoticket from './assets/icono_ticket.png';
import iconotiempo from './assets/icono_tiempo.png';
import iconoedades from './assets/icono_edades.png';
import {Link} from "react-router-dom";
import iconoaccesibilidad from "./assets/icono_accesibilidad.png";


export const ExperienciaColonia = () =>

    <section className="containerexperiencias">
        <header className={"cabeceraexperiencias"}>
            Colonia Güell, el laboratorio del modernismo
        </header>
        <section className={"gallery"}>


            <img className={"foto-grande"} src={colonia_grande} />
            <img className={"foto-mini1"} src={colonia_mini01} />
            <img className={"foto-mini2"} src={colonia_mini02} />
        </section>
        <div className={"linea-iconos"}>
            <div className={"apartadoiconos"}>
                <img className={"icono_ticket"} src={iconoticket} />
                <p className={"textoiconos"}> 50€ / persona</p>
            </div>
            <div className={"apartadoiconos"}>
                <img className={"icono_tiempo"} src={iconotiempo} />
                <p className={"textoiconos"}> Duración 3h</p>
            </div>
            <div className={"apartadoiconos"}>
                <img className={"icono_edades"} src={iconoedades} />
                <p className={"textoiconos"}>Todas las edades</p>
            </div>
            <div className={"apartadoiconos"}>
                <img className={"icono_accesibilidad"} src={iconoaccesibilidad} />
                <p className={"textoiconos"}>Pasarela silla ruedas</p>
            </div>
            <Link className={"btn-reservas2"} to={"/reservas"} >Reserva</Link>
        </div>
        <h1 className={"experienciasmuseos"}>Visita a la Colonia Güell, una joya del modernismo</h1>
        <h5 className={"experienciascultura"}>Descubre la cripta de este laboratorio de la arquitectura modernista</h5>
        <article className={"textodescricion"}>La Colonia Güell es una pequeña colonia industrial situada a 10 minutos de Barcelona.
            Está considerada uno de los referentes para estudiar la arquitectura de Antoni Gaudí y
            es también uno de los conjuntos modernistas y atractivos turísticos más importantes de Cataluña.
            A diferencia de la gran mayoría de colonias industriales de Cataluña, Eusebi Güell
            procuró mejoras sociales para los trabajadores y aplicó su condición de mecenas de la cultura.
            Así, dotó a la Colonia Güell de equipamientos culturales y religiosos, e incorporó la corriente
            modernista a las nuevas construcciones. Destaca especialmente la iglesia diseñada por el propio
            Antoni Gaudí, inacabada pero que asienta las bases de lo que sería la Sagrada Familia de Barcelona.

        </article>

    </section>

