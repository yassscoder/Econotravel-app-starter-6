import * as React from 'react';
import {useEffect, useState} from "react";
import {FruitApi} from "../fruitApi"

export const FruitList = () => {

    const [fruits, setFruits] = useState([]);

    // useEffect con el parámetro "[]"
    // se puede usar para inicializar el componente.
    // Más info: https://es.reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects
    useEffect(() => {
        let fruitAPI = new FruitApi()
        fruitAPI.getFruits()
            .then( fruits => setFruits(fruits))
    }, []);

    return <div className={"fruitsList"}>
        <p className={"fruitsList__title"}>Fruit list!</p>
        <div className={"fruitsList__list"}>
            {fruits.map((fruit) =>
                <div className={"fruitsList__item fruit"}>
                    <div className={"fruit__name"}> {fruit.name} </div>
                    <div className={"fruit__details"}> {fruit.price + " €, " + fruit.quantity + " unidades" } </div>
                </div>
            )}
        </div>
    </div>

}
