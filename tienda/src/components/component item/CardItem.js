import "../styles/cardItems.css"
import Image from "./Image";
import Description from "./Description";
import ButtonDetail from "./ButtonDetail";
import ButtonAddCart from "./ButtonAddCart";
import ImgPrueba from "../img/placa.svg"


const CardItem = () =>{
    return(
        <div className="cardItems">
            <Image imagen={ImgPrueba} ></Image>
            <Description 
            title="Placa de vídeo asus ROG strix rtx 3080 "
            cant={5}
            prices={250000}
            ></Description>
            <div className="buttons">
                <ButtonDetail></ButtonDetail>
                <ButtonAddCart></ButtonAddCart>
            </div>
        </div>
    );
}

export default CardItem; 