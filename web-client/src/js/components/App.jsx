import * as React from 'react';
import {NavigationBar} from "./navigationBar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

export const App = () => {

     return <Router>
                    <NavigationBar/>
                         <Switch>
                                <Route path="/experiencias">
                                    <Experiencias />
                                </Route>
                                 <Route path="/quienessomos">
                                     <QuiénesSomos />
                                 </Route>
                                 <Route path="/reservas">
                                     <Reservas />
                                 </Route>
                         </Switch>
            </Router>

}


