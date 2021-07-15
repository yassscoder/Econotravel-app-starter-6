export class FruitApi {

    // hace una llamada al backend y convierte el resultado en un JSON
    getFruits() {
        return fetch("/fruits")
            .then(response => response.json())
    }
}