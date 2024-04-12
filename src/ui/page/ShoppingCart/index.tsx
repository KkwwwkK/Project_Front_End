import NavList from "../../component/NavList";
import {useLocation} from "react-router-dom";

export default function ShoppingCart() {
    const location = useLocation();

    return(
        <div className="shopping-cart-container">
            <NavList/>
            <h1>Shopping Cart Page!</h1>
            <h3>Pathname: {location.pathname} </h3>

        </div>
    )
}