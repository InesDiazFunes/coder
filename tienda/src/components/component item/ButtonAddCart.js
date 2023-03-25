import cartWhite from "../img/cart.svg";

const ButtonAddCart = () =>{
    return(
        <button id="AddCart">
            <img src={cartWhite} alt="add"></img>
        </button>
    );
}

export default ButtonAddCart;