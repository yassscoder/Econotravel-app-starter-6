import '../scss/main.scss'
import React from 'react'
import ReactDOM from 'react-dom'

import {FruitList} from './components/FruitList'

ReactDOM.render(
    React.createElement(FruitList),
    document.getElementById("app")
)