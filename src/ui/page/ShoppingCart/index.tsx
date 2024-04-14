import NavList from "../../component/NavList/NavList.tsx";
import {useLocation} from "react-router-dom";
import ShoppingCartTable from "../../component/ShoppingCart/ShoppingCartTable.tsx";
import OrderSummary from "../../component/ShoppingCart/OrderSummary.tsx";

export default function ShoppingCart() {
    const location = useLocation();

    return(
        <div className="shopping-cart-container">
            <NavList/>
            {/*<h1>Shopping Cart Page!</h1>*/}
            <ShoppingCartTable/>
            {/*<h3>Pathname: {location.pathname} </h3>*/}
        </div>
    )
}