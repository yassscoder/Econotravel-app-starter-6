import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Redirect} from "react-router";

export function Reservas() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [submitted, setSubmitted] = useState(false);
    const onSubmit = () => {
        setSubmitted(true);

    }

    if (submitted) {
        return <Redirect to={"/Booking-done"}>

        </Redirect>
    }
    return (
        <div className="fondo">
            <form id="contact" onSubmit={handleSubmit(onSubmit)}>
                <h3>Formulario de reserva</h3>
                <h4>Rellena los datos para realizar la reserva</h4>
                <fieldset>
                    <input type="text" placeholder="Nombre" {...register("Nombre", {required: true, maxLength: 80})} />
                    {errors.Nombre?.type === 'required' && "No te olvides de rellenar este campo"}
                </fieldset>
                <fieldset>
                    <input type="text" placeholder="Apellidos" {...register("Apellidos", {
                        required: true,
                        maxLength: 100
                    })} />
                    {errors.Apellidos?.type === 'required' && "Campo obligatorio"}
                </fieldset>
                <fieldset>
                    <input type="text" placeholder="Email" {...register("Email", {
                        required: true,
                        pattern: /^\S+@\S+$/i
                    })} />
                    {errors.Email?.type === 'required' && "mail para enviarte la confirmación"}
                </fieldset>
                <fieldset>
                    <input type="tel" placeholder="Número móvil" {...register("Mobile_number", {
                        required: true,
                        minLength: 6,
                        maxLength: 12
                    })} />
                    {errors.Mobile_number?.type === 'required' && "Sólo te llamaremos por una urgencia"}
                </fieldset>
                <fieldset>
                    <select className="desplegable" type="text"{...register("Experiencias", {required: true})}>
                        <option value={"experiencia"}> Selecciona tu experiencia</option>
                        <option value="Experiencia Montseny -- 250€ --">Experiencia Montseny -- 250€ --</option>
                        <option value=" Experiencia Montserrat --125€ --"> Experiencia Montserrat --125€ --</option>
                        <option value=" Experiencia Velero -- 280€ --"> Experiencia Velero -- 280€ --</option>
                        <option value=" Experiencia Horticultura -- 145€ --"> Experiencia Horticultura -- 145€ --
                        </option>
                        <option value=" Experiencia Colonia Güell -- 250€ --"> Experiencia Colonia Güell -- 50€ --
                        </option>
                        <option value=" Experiencia Modernismo -- 200€ --"> Experiencia Modernismo -- 200€ --</option>
                    </select>
                    {errors.Experiencias?.type === 'required' && "Selecciona una experiencia"}
                </fieldset>
                <fieldset>
                    <select className="desplegable" {...register("Personas", {required: true})}>
                        <option value={"experiencia"}> Número de personas</option>
                        <option value="1">1</option>
                        <option value=" 2"> 2</option>
                        <option value=" 3"> 3</option>
                        <option value=" 4"> 4</option>
                        <option value=" 5"> 5</option>
                        <option value=" 6"> 6</option>
                    </select>
                    {errors.Personas?.type === 'required' && "Selección obligatoria"}
                </fieldset>
                <fieldset>
                    <input name="submit" type="submit" id="contact-submit"/>
                </fieldset>

            </form>
        </div>
    );
}