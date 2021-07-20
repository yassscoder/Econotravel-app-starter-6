import '../scss/main.scss'
import React from 'react'
import ReactDOM from 'react-dom'


import {NavigationBar} from "./components/navigationBar";

ReactDOM.render(
    React.createElement(NavigationBar),
    document.getElementById("app")
)



