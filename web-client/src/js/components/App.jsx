import * as React from 'react';
import {NavigationBar} from "./navigationBar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {Experiencias} from "./Experiencias.jsx";
import {Reservas} from "./reservas";
import {QuienesSomos} from "./quienesSomos";
import {Home} from "./home";

export const App = () => {

     return <Router>
                    <NavigationBar/>
                         <Switch>
                             <Route exact path="/">
                                 <Home />
                             </Route>
                                <Route path="/experiencias">
                                    <Experiencias />
                                </Route>
                                 <Route path="/quienessomos">
                                     <QuienesSomos />
                                 </Route>
                                 <Route path="/reservas">
                                     <Reservas />
                                 </Route>
                         </Switch>

            </Router>

}


