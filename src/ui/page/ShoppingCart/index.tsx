import NavList from "../../component/NavList/NavList.tsx";
// import {useLocation} from "react-router-dom";
import ShoppingCartTable from "../../component/ShoppingCart/ShoppingCartTable.tsx";
// import OrderSummary from "../../component/ShoppingCart/OrderSummary.tsx";
import * as CartItemApi from "../../../api/CartItemApi.ts";
import {useEffect, useState} from "react";
import mockData from "./response.json";
import {CartItemDto} from "../../../data/CartItem/CartItemDto.ts";

export default function ShoppingCart() {
    const[cartItemDto, setCartItemDto] = useState<CartItemDto[] | undefined>(undefined);

    const putCartItem = async ()=>{
        CartItemApi.putCartItem("1", "1");
    }

    // const location = useLocation();

    useEffect(() => {
        setCartItemDto(mockData)
        putCartItem();
    }, []);

    return(
        <div className="shopping-cart-container">
            <NavList/>
            {
                cartItemDto &&
                <ShoppingCartTable cartItemDto={cartItemDto}/>
            }
        </div>
    )
}