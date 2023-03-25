import brand from "../img/brand.svg";
import { Link } from "react-router-dom";

const Brand = () => {
    return(
        <Link to="/">
            <img src={brand} alt="Tienda Fisgon" title="Tienda Fisgon"></img>
        </Link>
    )
}

export default Brand;