import cart from "../img/cart.svg";

const CartWidget = () => {
    return(
        <div className="containerLength">
            <img className="cart" src={cart} alt="cart"></img>
            <span className="cantCart">
                1
            </span>
        </div>
    );
}

export default CartWidget;