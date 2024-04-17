import NavList from "../../component/NavList/NavList.tsx";
// import {useLocation} from "react-router-dom";
import ShoppingCartTable from "../../component/ShoppingCart/ShoppingCartTable.tsx";
// import OrderSummary from "../../component/ShoppingCart/OrderSummary.tsx";
import * as CartItemApi from "../../../api/CartItemApi.ts";
import {useEffect, useState} from "react";
import mockData from "./response.json";
import {CartItemDto} from "../../../data/CartItem/CartItemDto.ts";
import Box from "@mui/material/Box";

export default function ShoppingCart() {
    const[cartItemDto, setCartItemDto] = useState<CartItemDto[] | undefined>(undefined);
    // const[cartItemQuantity, setCartItemQuantity] = useState<number>(0);


    const putCartItem = async ()=>{
        CartItemApi.putCartItem("1", "1");
    }

    // const location = useLocation();
    useEffect(() => {
        setCartItemDto(mockData);
        // // Get the cart items number for showing on cart logo
        // if (cartItemDto && cartItemDto.length > 0) {
        //     setCartItemQuantity(cartItemDto.length);
        // }
        putCartItem();
    }, []);
    //
    // useEffect(() => {
    //     // Update cartItemQuantity when cartItemDto changes
    //     if (cartItemDto && cartItemDto.length > 0) {
    //         setCartItemQuantity(cartItemDto.length);
    //     }
    // }, [cartItemDto]);


    return(
        <Box className="shopping-cart-container">
            <NavList />
            {
                cartItemDto &&
                <ShoppingCartTable cartItemDto={cartItemDto}/>
            }
        </Box>
    )
}