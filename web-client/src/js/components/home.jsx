import * as React from "react";
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import montseny from './assets/montseny.jpg';
import vela from './assets/vela.jpg';
import batllo from './assets/casa-batllo.png';
import huerto from './assets/huerto.jpg';
import montserrat from './assets/montserrat.jpg';
import bici from './assets/bici.png';
import montaña from './assets/montaña.png';
import barco from './assets/barco.png';
import ciudad from './assets/ciudad.png';
import restaurant from './assets/restaurant.png';


export const Home = () => (
    <div>
     <Carousel>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={montseny}
                alt="Montseny"
            />
            <Carousel.Caption>
                <h3>Excursiones en BTT</h3>
                <p> Descubre la naturaleza con nuestras originales ruta BTT </p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={vela}
                alt="Velero"
            />

            <Carousel.Caption>
                <h3>Salidas en Velero</h3>
                <p>Siente la inmensidad del gran azul y la fuerza del viento</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={batllo}
                alt="Modernismo"
            />

            <Carousel.Caption>
                <h3>Paseos por la ciudad</h3>
                <p>Descubre los secretos que esconden las ciudades de noche</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={huerto}
                alt="Horticultura"
            />

            <Carousel.Caption>
                <h3>Del campo a tu casa</h3>
                <p>Somos lo que comemos, aprende a cultivar tus propias verduras</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={montserrat}
                alt="Montserrat"
            />

            <Carousel.Caption>
                <h3>La montaña mágica</h3>
                <p>Descubre esta misteriosa montaña y sus rincones más ocultos</p>
            </Carousel.Caption>
        </Carousel.Item>
     </Carousel>
        <span className={"almohadilla"}>#Experiencias</span><span className={"eco"}>Econotravel</span>
           <div className={"iconos"}>
               <img className={"icon1"} src={bici} />
               <img className={"icon"} src={montaña} />
               <img className={"icon"} src={barco} />
               <img className={"icon"} src={ciudad} />
               <img className={"icon"} src={restaurant} />
           </div>
            <div className={"infIcon"}>
                <div>Bicicletas</div>
                <div>Montaña</div>
                <div>Velero</div>
                <div>Ciudad</div>
                <div>Comida</div>
            </div>
    </div>

)