import NavList from "../../component/NavList/NavList.tsx";
// import {useLocation} from "react-router-dom";
import ShoppingCartTable from "../../component/ShoppingCart/ShoppingCartTable.tsx";
// import OrderSummary from "../../component/ShoppingCart/OrderSummary.tsx";
import * as CartItemApi from "../../../api/CartItemApi.ts";
import {useEffect} from "react";

export default function ShoppingCart() {
    const putCartItem = async ()=>{
        CartItemApi.putCartItem("1", "1");
    }

    // const location = useLocation();

    useEffect(() => {
        putCartItem();
    }, []);

    return(
        <div className="shopping-cart-container">
            <NavList/>
            {/*<h1>Shopping Cart Page!</h1>*/}
            <ShoppingCartTable/>
            {/*<h3>Pathname: {location.pathname} </h3>*/}
        </div>
    )
}