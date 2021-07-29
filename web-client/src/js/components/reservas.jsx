import * as React from "react";
import {Link} from "react-router-dom";

export const Reservas  = () => <section>

    <div className="fondo">
        <form id="contact" action="" method="post">
            <h3>Formulario de reserva</h3>
            <h4>Rellena los datos para realizar la reserva</h4>
            <fieldset>
                <input placeholder="Tu nombre" type="text" tabIndex="1" required autoFocus />
            </fieldset>
            <fieldset>
                <input placeholder="Tu dirección de Email" type="email" tabIndex="2" required />
            </fieldset>
            <fieldset>
                <input placeholder="Tu número de móvil (opcional)" type="tel" tabIndex="3" required />
            </fieldset>
           <fieldset>
                <select class="desplegable" type="text" tabIndex="4" required id="experiencia" name="experiencia">
                    <option value={"experiencia"}> Selecciona tu experiencia </option>
                    <option value="1"> Montseny -- 250€ --  </option>
                    <option value="2"> Vela -- 280€ -- </option>
                    <option value="3"> Modernismo -- 200€ -- </option>
                    <option value="4"> Huerto -- 145€ -- </option>
                    <option value="5"> Montserrat --125€ -- </option>
                </select>
            </fieldset>
            <fieldset>
                <select class="desplegable" type="text" tabIndex="4" required id="experiencia" name="experiencia">
                    <option select value={"experiencia"}> Número de personas </option>
                    <option value="1"> 1 </option>
                    <option value="2"> 2 </option>
                    <option value="3"> 3 </option>
                    <option value="4"> 4 </option>
                    <option value="5"> 5 </option>
                    <option value="6"> 6 </option>
                </select>
            </fieldset>

            <fieldset>
                <textarea placeholder="Type your message here...." tabIndex="5" required></textarea>
            </fieldset>

            <fieldset>
                <Link to={"/Booking-done"} >
                <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                </Link>
            </fieldset>

        </form>
    </div>


</section>