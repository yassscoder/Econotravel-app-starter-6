import * as React from "react";
import principalWho from './assets/equipo-prueba.jpg';
import carlosPic from './assets/profile-pic.jpg';
import marinaPic from './assets/marina-pic.jpg';
import sheilaPic from './assets/Sheilapic.jpg'

export const QuienesSomos  = () => (
    <section>
        <div className={"container-banner-img"}>
            <img className={"imgPrincipalAbout"} src={principalWho}/>
        </div>
        <section className={"team-info"}>
            <div className={"info-individual"}>
                <div className={"container-profile-pic"}>
                    <img className={"member-photo"} src={marinaPic}/>
                </div>
                <h4 className={"team-name"}>Marina Herrán</h4>
                <h5 className={"job"}>CMO & Founder</h5>
                <h5 className={"description-member"}>Apasionada de la naturaleza, ha visitado todos los Parques Naturales de España y parte de Alemania, su sueño es disfrutar de todos los que existen en el planeta!!</h5>
            </div>
            <div className={"info-individual"}>
                <div className={"container-profile-pic"}>
                    <img className={"member-photo"} src={carlosPic}/>
                </div>
                <h4 className={"team-name"}>Carlos Herrera</h4>
                <h5 className={"job"}>CTO</h5>
                <h5 className={"description-member"}>Aventurero y amante del código, dice que a 3000 metros de altura han salido sus mejores aplicaciones.</h5>
            </div>
            <div className={"info-individual"}>
                <div className={"container-profile-pic"}>
                    <img className={"member-photo"} src={sheilaPic}/>
                </div>
                <h4 className={"team-name"}>Sheila Camps</h4>
                <h5 className={"job"}>UI & UX</h5>
                <h5 className={"description-member"}></h5>
            </div>
        </section>


    </section>

)