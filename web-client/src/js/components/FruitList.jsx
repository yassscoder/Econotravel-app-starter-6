import * as React from 'react';
import {useEffect, useState} from "react";

const getFruits = async () => {
    return await fetch("/fruits")
        .then(r => r.json())
}

export const FruitList = () => {

    const [fruits, setFruits] = useState([]);

    useEffect(() => {
        fetch("/fruits")
            .then( response => response.json())
            .then( fruits => setFruits(fruits))
    }, []);

    return <div className={"fruitsList"}>
        <p className={"fruitsList__title"}>Fruit list!</p>
        <div className={"fruitsList__list"}>
            {fruits.map((fruit) =>
                <div>
                    { fruit.name + " - " + fruit.price + " - " + fruit.quantity }
                </div>
            )}
        </div>
    </div>

}
