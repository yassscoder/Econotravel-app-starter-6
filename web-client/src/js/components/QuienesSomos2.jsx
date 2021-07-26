import * as React from "react";
import {Fragment, useState} from "react";
import {PeopleList} from "./PeopleList";
import carlosPic from './assets/profile-pic.jpg';
import marinaPic from './assets/marina-pic.jpg';
import sheilaPic from './assets/Sheilapic.jpg';


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
            aboutMe: "Aventurero y amante del código, dice que a 3000 metros de altura han salido sus mejores aplicaciones."
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
            <PeopleList people={people}/>
        </Fragment>
    );
}