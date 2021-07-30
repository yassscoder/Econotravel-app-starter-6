import * as React from 'react';
import {NavigationBar} from "./navigationBar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {Experiencias} from "./Experiencias.jsx";
import {Reservas} from "./reservas";
import {QuienesSomos} from "./quienesSomos";
import {Home} from "./home";
import {ExperienciaMontseny} from "./Experiencia-montseny";
import {ExperienciaMontserrat} from "./Experiencia-montserrat";
import {ExperienciaVela} from "./Experiencia-vela";
import {ExperienciaModernista} from "./Experiencia-bcnmodernista";
import {ExperienciaHorticultura} from "./Experiencia-horticultura";
import {ExperienciaColonia} from "./Experiencia-colonia";
import {QuienesSomos2} from "./QuienesSomos2";
import {Footer} from "./Footer";
import {ExperiencePanel} from "./ExperiencePanel";
import {SuccesfulBooking} from "./SuccesfulBooking";
import {Sidebar} from "./Sidebar";


export const App = () => {

     return <Router>

                    <NavigationBar/>

                         <Switch>
                             <Route exact path="/">
                                 <Home />
                                 <Experiencias/>
                             </Route>
                                <Route path="/experiencias">
                                    <Experiencias />
                                </Route>
                                 <Route path="/quienessomos">

                                     <QuienesSomos2/>
                                 </Route>
                                 <Route path="/reservas">
                                     <Reservas />
                                 </Route>
                             <Route path="/Experiencia-montseny">
                                 <ExperienciaMontseny />
                             </Route>
                             <Route path="/Experiencia-montserrat">
                                 <ExperienciaMontserrat />
                             </Route>
                             <Route path="/Experiencia-vela">
                                 <ExperienciaVela />
                             </Route>
                             <Route path="/Experiencia-bcnmodernista">
                                 <ExperienciaModernista />
                             </Route>
                             <Route path="/Experiencia-horticultura">
                                 <ExperienciaHorticultura />
                             </Route>
                             <Route path="/Experiencia-colonia">
                                 <ExperienciaColonia />
                             </Route>
                             <Route path="/Booking-done">
                                 <SuccesfulBooking />
                             </Route>

                         </Switch>
                    <Footer/>
            </Router>

}


