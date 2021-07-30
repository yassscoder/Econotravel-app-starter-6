import * as React from "react";
import vela_grande from './assets/vela_grande.jpg';
import vela_mini01 from './assets/vela_mini01.jpg';
import vela_mini02 from './assets/vela_mini02.jpg';
import iconoticket from './assets/icono_ticket.png';
import iconotiempo from './assets/icono_tiempo.png';
import iconoedades from './assets/icono_edades.png';
import iconoaccesibilidad from './assets/icono_accesibilidad.png';
import {Link} from "react-router-dom";


export const ExperienciaVela = () =>

    <section className="containerexperiencias">
        <header className={"cabeceraexperiencias"}>
            La costa catalana desde el mar
        </header>
        <section className={"gallery"}>


            <img className={"foto-grande"} src={vela_grande} />
            <img className={"foto-mini1"} src={vela_mini01} />
            <img className={"foto-mini2"} src={vela_mini02} />
        </section>
        <div className={"linea-iconos"}>
            <div className={"apartadoiconos"}>
                <img className={"icono_ticket"} src={iconoticket} />
                <p className={"textoiconos"}> 280€ / persona</p>
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
                <p className={"textoiconos"}>Pasarela silla ruedas</p>
            </div>
            <Link className={"btn-reservas2"} to={"/reservas"} >Reserva</Link>
        </div>
        <h1 className={"experienciasmuseos"}>Salidas recreativas en velero</h1>
        <h5 className={"experienciascultura"}>Descubre la cosa catalana en barco de vela.</h5>
        <article className={"textodescricion"}>Disfruta de un hermoso paseo acuático en barco de vela por la increíble costa de Barcelona.
            Una escapada veraniega apta incluso para los días más calurosos del año. Descubre los encantadores
            alrededores de la ciudad de Barcelona y visita desde el mar sus más impresionantes playas y calas.
            Comenzaremos la excursión en el Puerto de Barcelona, desde donde partiremos hacia el norte para visitar
            playas como la Mar Bella, la Playa de la Mora y la Playa de los Pescadores.
            A bordo de la embarcación podremos disfrutar de una selección de quesos y embutidos catalanes acompañada
            de cava brut y zumos de frutas. Asimismo, pararemos cerca de la Playa de Montgat para realizar una
            actividad de buceo de superficie que nos permitirá apreciar la diversidad de la fauna marítima local
            y su ecosistema. Finalizaremos la excursión en el mismo puerto del que partimos.


        </article>

    </section>

