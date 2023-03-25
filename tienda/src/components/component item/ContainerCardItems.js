import CardItem from "./CardItem";
import FetchSimulation from "../utils/FetchSimulation";
import productos from "../utils/products";
import {useState, useEffect} from 'react';
import "../styles/containerCardItems.css";

const ContainerCardItems = () =>{
    
    const [ datos, setDatos] = useState ( [ ] );

    useEffect(() => {
        FetchSimulation(productos, 1250).then(resp =>setDatos(resp)).catch(error => console.log(error))
    }, [])

    
    return (
        <div className="containerCardItems">
        {
            datos.map( product => (
                <CardItem
                key={product.id}
                imagen={product.imageProduct.firstImage}
                title={product.title}
                cant= {product.stock}
                prices={product.price}             
                />
            ))
        }
        </div>
    );
}

export default ContainerCardItems; 