import * as React from "react";

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
                    <option value="1"> Vela -- 325€ -- </option>
                    <option value="1"> Modernismo -- 100€ -- </option>
                    <option value="1"> No me acuerdo -- 340€ -- </option>
                    <option value="1"> Sigo sin acordarme --200€ -- </option>
                </select>
            </fieldset>
            <fieldset>
                <select class="desplegable" type="text" tabIndex="4" required id="experiencia" name="experiencia">
                    <option select value={"experiencia"}> Número de personas </option>
                    <option value="1"> 1 </option>
                    <option value="1"> 2 </option>
                    <option value="1"> 3 </option>
                    <option value="1"> 4 </option>
                    <option value="1"> 5 </option>
                    <option value="1"> 6 </option>
                </select>
            </fieldset>

            <fieldset>
                <textarea placeholder="Type your message here...." tabIndex="5" required></textarea>
            </fieldset>

            <fieldset>
                <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
            </fieldset>

        </form>
    </div>


</section>