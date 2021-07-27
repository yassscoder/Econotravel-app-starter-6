import * as React from 'react';
import {NavigationBar} from "./navigationBar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {Experiencias} from "./Experiencias.jsx";
import {Reservas} from "./reservas";
import {QuienesSomos} from "./quienesSomos";
import {Home} from "./home";

import {QuienesSomos2} from "./QuienesSomos2";
import {Footer} from "./Footer";

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
                         </Switch>
                    <Footer/>
            </Router>

}


