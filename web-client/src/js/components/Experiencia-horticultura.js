import * as React from "react";
import horticultura_grande from './assets/horticultura_grande.jpeg';
import horticultura_mini01 from './assets/horticultura_mini01.jpeg';
import horticultura_mini02 from './assets/horticultura_mini02.jpeg';
import iconoticket from './assets/icono_ticket.png';
import iconotiempo from './assets/icono_tiempo.png';
import iconoedades from './assets/icono_edades.png';
import {Link} from "react-router-dom";


export const ExperienciaHorticultura = () =>

    <section className="containerexperiencias">
        <header className={"cabeceraexperiencias"}>
            Del huerto a la mesa
        </header>
        <section className={"gallery"}>


            <img className={"foto-grande"} src={horticultura_grande} />
            <img className={"foto-mini1"} src={horticultura_mini01} />
            <img className={"foto-mini2"} src={horticultura_mini02} />
        </section>
        <div className={"linea-iconos"}>
            <div className={"apartadoiconos"}>
                <img className={"icono_ticket"} src={iconoticket} />
                <p className={"textoiconos"}> 145€ / persona</p>
            </div>
            <div className={"apartadoiconos"}>
                <img className={"icono_tiempo"} src={iconotiempo} />
                <p className={"textoiconos"}> Duración 3h</p>
            </div>
            <div className={"apartadoiconos"}>
                <img className={"icono_edades"} src={iconoedades} />
                <p className={"textoiconos"}>Todas las edades</p>
            </div>
            <Link className={"btn-reservas2"} to={"/reservas"} >Reserva</Link>
        </div>
        <h1 className={"experienciasmuseos"}>Cultiva y recolecta tus propias verduras</h1>
        <h5 className={"experienciascultura"}>Hunde tus manos en la tierra y come una de las ensaladas más
            frescas de tu vida.</h5>
        <article>Comparte con los más pequeños las maravillas de la naturaleza. En esta excursión breve
            de tres horas, podréis plantar vuestras propias hortalizas y verduras en el huerto de Can Gilabert,
            ubicado en el corazón del Montbaig. Durante una hora y media, aprenderéis a cuidar de vuestro
            propio huerto, plantaréis y abonaréis vuestras propias plantas, y también recogeréis parte de
            los ingredientes que los expertos chefs de Can Gilabert utilizarán para preparar la posterior cena,
            donde disfrutaréis de la experiencia de consumir productos recién recogidos de la tierra con vuestras
            propias manos. Actividad ideal para familiarizar a los más pequeños de la familia con el estilo de
            vida rural y la agricultura sostenible. Asimismo, obtendréis como obsequio una botella de aceite virgen
            extra cultivado y preparado en Can Gilabert, obra de la familia Gilabert, que lleva más de 80 años
            cultivando olivos.

        </article>

    </section>

