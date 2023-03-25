import Brand from "./Brand";
import ItemListContainer from "./ItemListContainer";
import CartWidget from "./CartWidget";
const NavBar = () => {
    return (
        <header>
            <div className="containerBrand">
                <Brand></Brand>
            </div>
            <nav className="containerItemList">
                <ItemListContainer
                itemUno = "Placas de video"
                itemDos = "Motherboards"
                itemTres = "Fuentes"
                itemCuatro = "Procesadores"
                />
            </nav>
            <div className="containerCart">
                <CartWidget></CartWidget>
            </div>
        </header>
    )
}

export default NavBar;