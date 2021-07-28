import * as React from "react";
import { HashLink } from 'react-router-hash-link';

export const SuccesfulBooking = () =>

    <div className={"containerBooking"}>
        <h2>Reserva realizada con éxito, nos vemos pronto!</h2>
        <h4>Si tienes alguna pregunta <HashLink smooth to={"/quienessomos/#sectionContact"}><span className={"bookingContact"}>contacta con nosotros</span></HashLink>, estaremos encantados de ayudarte.</h4>
    </div>