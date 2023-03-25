import "../styles/cardItems.css"
import Image from "./Image";
import Description from "./Description";
import ButtonDetail from "./ButtonDetail";
import ButtonAddCart from "./ButtonAddCart";


const CardItem = (props) =>{
    return(
        <div className="cardItems">
            <Image imagen={props.imagen} ></Image>
            <Description 
            title={props.title}
            cant={props.cant}
            prices={props.prices}
            ></Description>
            <div className="buttons">
                <ButtonDetail></ButtonDetail>
                <ButtonAddCart></ButtonAddCart>
            </div>
        </div>
    );
}

export default CardItem; 