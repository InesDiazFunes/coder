import { Link } from "react-router-dom";

const ItemListContainer = (props) => {
    return(
        <ul>
            <li>
                <Link to="category/Placas de video">
                    {props.itemUno}
                </Link>
            </li>
            <li>
                <Link to="category/Motherboards">
                    {props.itemDos}
                </Link>
            </li>
            <li>
                <Link to="category/Fuentes">
                    {props.itemTres}
                </Link>    
            </li>
            <li>
                <Link to="category/Procesadores">
                    {props.itemCuatro}
                </Link>    
            </li>
        </ul>
    );
}

export default ItemListContainer;