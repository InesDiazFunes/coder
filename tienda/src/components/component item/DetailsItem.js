import Image from "./Image";
import Description from "./Description";
import ButtonDetail from "./ButtonDetail";
import AddCantCart from "./AddCantCart";
import "../styles/detailsItem.css";

const DetailsItem = (props) => {
    return(
        <div className="detailsItem">
            <div className="containterleft">
                <Image 
                    imagen={props.imagen}
                />
            </div>
            <div className="containerRight">
                <Description
                    title={props.title}
                    parrafo={props.parrafo}
                    cantidad={props.cantidad}
                    precio={props.precio}
                />
            </div>
            <div className="buttons">
                <AddCantCart
                    cant={5}
                />
                <ButtonDetail
                    txt="Add to cart"
                />
            </div>
        </div>
        
    );
}

export default DetailsItem;