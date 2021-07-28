import * as React from "react";
import card01 from "./assets/card01.jpg";
import card02 from "./assets/card02.jpg";
import card03 from "./assets/card03.jpg";
import card04 from "./assets/card04.jpg";
import card05 from "./assets/card05.jpg";
import card06 from "./assets/card06.jpg";
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

export const Experiencias = () => <section id={"sectionExperiences"} className={"containerPageExperiences"}>
    <section className="tituloexp">
        <h1 className={"titleExp"}> Descubre nuestras experiencias únicas</h1>
        <h2 className={"titleExp1"}> Turismo responsable km0</h2>
    </section>
    <section className={"container-cards"}>
    <div className="card">
        <div className="card-header">
            <div className="profile">
                <span className="letter">Mountain</span>
            </div>
            <div className="card-title-group">
                <h5 className="card-title">Montserrat</h5>
                <div className="card-date">Arte en la montaña sagrada </div>
            </div>
        </div>
        <img className="card-image" src={card01} alt="Logo" />
        <div className="card-text">Disfruta de la impresionante Montaña de Montserrat donde encontraréis
            el Museo con las salas modernistas de Puig i Cadafalch, lugar que acoge colecciones de gran
            valor en el corazón de la emblemática montaña.</div>
        <h6 className={"durationExperience"}><i className="fas fa-stopwatch"></i> 2 horas</h6>
        <div className="card-like-bar">
            <h3 className={"priceExperience2"}>125€</h3>
            <div className="like-text">
                <Link to={"/Experiencia-montseny"}>
                    <button className={"buttonCard"} type={"button"}>Descubre más</button>
                </Link>
            </div>
        </div>
    </div>

    <div className="card">
        <div className="card-header">
            <div className="profile">
                <span className="letter">Mountain</span>
            </div>
            <div className="card-title-group">
                <h5 className="card-title">Montseny</h5>
                <div className="card-date">Paseo en BTT</div>
            </div>
        </div>
        <img className="card-image" src={card02} alt="Logo" />
        <div className="card-text">Disfruta de un hermoso paseo en bicicleta por el increíble
            Parque Natural del Montseny. Una escapada veraniega perfecta para parejas, familias
            y amigos que nos permitirá conocer nuevos y sorprendentes lugares</div>
        <h6 className={"durationExperience"}><i className="fas fa-stopwatch"></i> 5 horas</h6>
        <div className="card-like-bar">
            <h3 className={"priceExperience2"}>250€</h3>
            <div className="like-text">
                <Link  to={"/Experiencia-montseny"} >
                    <button className={"buttonCard"} type={"button"}>Descubre más</button>
                </Link>
            </div>
        </div>
    </div>

    <div className="card">
        <div className="card-header">
            <div className="profile">
                <span className="letter">Playa</span>
            </div>
            <div className="card-title-group">
                <h5 className="card-title">Velero</h5>
                <div className="card-date">Descubre la costa en barco de vela</div>
            </div>
        </div>
        <img className="card-image" src={card03} alt="Logo" />
        <div className="card-text">Disfruta de un hermoso paseo acuático en barco de vela por
            la increíble costa de Barcelona. Una escapada veraniega apta incluso para los días
            más calurosos del año.</div>
        <h6 className={"durationExperience"}><i className="fas fa-stopwatch"></i> 4 horas</h6>
        <div className="card-like-bar">
            <h3 className={"priceExperience2"}>280€</h3>
            <div className="like-text">
                <Link  to={"/reservas"} >
                <button className={"buttonCard"} type={"button"}>Descubre más</button>
                </Link>
            </div>
        </div>
    </div>

    <div className="card">
        <div className="card-header">
            <div className="profile">
                <span className="letter">Ciudad</span>
            </div>
            <div className="card-title-group">
                <h5 className="card-title">Barcelona</h5>
                <div className="card-date">BCN Modernista de noche</div>
            </div>
        </div>
        <img className="card-image" src={card04} alt="Logo" />
        <div className="card-text">Desplazarse a pie es una de las mejores formas de descubrir
            las maravillas modernistas que se esconden en el barcelonés distrito del Eixample,
            ubicado en el centro de la ciudad. Visitarás el interior de la Casa Batlló y la Sagrada Familia.</div>
        <h6 className={"durationExperience"}><i className="fas fa-stopwatch"></i> 4 horas</h6>
        <div className="card-like-bar">
            <h3 className={"priceExperience2"}>200€</h3>
            <div className="like-text">
                <Link  to={"/reservas"} >
                    <button className={"buttonCard"} type={"button"}>Descubre más</button>
                </Link>
            </div>
        </div>
    </div>

    <div className="card">
        <div className="card-header">
            <div className="profile">
                <span className="letter">City</span>
            </div>
            <div className="card-title-group">
                <h5 className="card-title">Horticultura</h5>
                <div className="card-date">Del huerto a la mesa</div>
            </div>
        </div>
        <img className="card-image" src={card05} alt="Logo" />
        <div className="card-text">Comparte con los más pequeños las maravillas de la naturaleza.
            En esta excursión breve de tres horas, podréis plantar vuestras propias hortalizas y
            verduras en el huerto de Can Gilabert, ubicado en el corazón del Montbaig.</div>
        <h6 className={"durationExperience"}><i className="fas fa-stopwatch"></i> 3 horas</h6>
        <div className="card-like-bar">
            <h3 className={"priceExperience2"}>145€</h3>
            <div className="like-text">
                <Link  to={"/reservas"} >
                    <button className={"buttonCard"} type={"button"}>Descubre más</button>
                </Link>
            </div>
        </div>
    </div>
    <div className="card">
        <div className="card-header">
            <div className="profile">
                <span className="letter">Ciudad</span>
            </div>
            <div className="card-title-group">
                <h5 className="card-title">Colonia Güell</h5>
                <div className="card-date">Una joya a 5 minutos de BCN</div>
            </div>
        </div>
        <img className="card-image" src={card06} alt="Logo" />
        <div className="card-text">Visita los tres espacios de la Colonia Güell:
            la Cripta de Gaudí, declarada Patrimonio de la Humanidad por la UNESCO en 2005,
            la Colonia Güell y la exposición permanente,
            ubicada en la antigua cooperativa de la Colonia, inaugurada en el año 2008.</div>
        <h6 className={"durationExperience"}><i className="fas fa-stopwatch"></i> 1 hora</h6>
        <div className="card-like-bar">
            <h3 className={"priceExperience2"}>150€</h3>
            <div className="like-text">
                <Link  to={"/reservas"} >
                    <button className={"buttonCard"} type={"button"}>Descubre más</button>
                </Link>
            </div>
        </div>
    </div>

    </section>


</section>


