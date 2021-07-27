import * as React from "react";
import {Fragment, useState} from "react";
import {PeopleList} from "./PeopleList";
import carlosPic from './assets/profile-pic.jpg';
import marinaPic from './assets/marina-pic.jpg';
import sheilaPic from './assets/Sheilapic.jpg';
import principalWho from './assets/banner-pareja.png';


export function QuienesSomos2() {
    const [people, setPeople  ] = useState([
        {
            id: 1,
            pic: marinaPic,
            name: "María Herrán",
            job: "CMO & founder",
            aboutMe: "Apasionada de la naturaleza, ha visitado todos los Parques Naturales de España y parte de Alemania, su sueño es disfrutar de todos los que existen en el planeta!!",
        },
        {
            id: 2,
            pic: carlosPic,
            name: "Alejandro Ferrera",
            job: "CTO",
            aboutMe: "Aventurero y amante del código limpio, en ninguna de sus escapadas puede faltar su pórtatil Sus mayores pasiones son la escalada, el refactoring y una buena hackaton."
        },
        {
            id: 3,
            pic: sheilaPic,
            name: "Sheila Camps",
            job: "UX/UI",
            aboutMe: "Donde algunos ven gris ella ve una paleta de colores. Su pasión por el diseño sólo la iguala la pasión por la naturaleza. Envianos tus fotos de una de nuestras actividades y te hará un lienzo inolvidable."
        }
    ]);

    return (
        <Fragment>

                    <img className={"imgPrincipalAbout"} src={principalWho}/>
            <div className={"wrapper"}>
            <section className={"aboutUs"}>
                <h2>Nuestra historia</h2>
                Nuestra empresa se fundó a raíz de un viaje que nuestra fundadora, Marina Herrán, realizó en bicicleta por Cataluña en el verano de 2001. Durante ese periodo, descubrió que las opciones turísticas que ofrecían ciudades como Barcelona, Girona y Reus dependían de transportes contaminantes y actividades poco respetuosas con la naturaleza y el entorno, algo que causaba un progresivo deterioro de los increíbles parajes naturales de Cataluña.
                <br/>
                Preocupada por la falta de alternativas eco-friendly, Marina se propuso fundar una agencia de experiencias turísticas donde el respeto por la naturaleza fuera la principal prioridad. Así nació Econotravel Barcelona.
            </section>
            <PeopleList people={people}/>
            <section className={"contactUs"}>
                <div className={"where"}>
                    <h2>Ven a vernos</h2>
                    <p>Visitanos en Carrer dels Viatgers 28 de Barcelona</p>
                </div>
                <div className={"contactPhone"}>
                    <h2>Llámanos</h2>
                    <p>+ 34 93 000 00 00</p>
                </div>
                <div className={"contactMail"}>
                    <h2>Mándanos un email</h2>
                    <p>info@econotravel.com</p>
                </div>
            </section>
        </div>
        </Fragment>
    );
}