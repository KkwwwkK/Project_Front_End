import NavList from "../../component/NavList/NavList.tsx";
// import {useLocation} from "react-router-dom";
import ShoppingCartTable from "../../component/ShoppingCart/ShoppingCartTable.tsx";
// import OrderSummary from "../../component/ShoppingCart/OrderSummary.tsx";
import * as CartItemApi from "../../../api/CartItemApi.ts";
import {useContext, useEffect, useState} from "react";
// import mockData from "./response.json";
import {CartItemDto} from "../../../data/CartItem/CartItemDto.ts";
import Box from "@mui/material/Box";
import {useNavigate} from "react-router-dom";
import {UserData} from "../../../data/user/UserData.tsx";
import {LoginUserContext} from "../../../context/LoginUserContext.ts";

export default function ShoppingCart() {
    const[cartItemDto, setCartItemDto] = useState<CartItemDto[] | undefined>(undefined);
    // const[cartItemQuantity, setCartItemQuantity] = useState<number>(0);

    const loginUser = useContext<UserData | undefined | null>(LoginUserContext);

    const navigate = useNavigate();

    // Fetch User Cart
    const fetchUserCart = async ()=> {
        try {
            setCartItemDto(undefined);
            const responseCartItemDto:CartItemDto[] = await CartItemApi.getUserCart();
            setCartItemDto(responseCartItemDto);
        } catch(error){
            navigate("/error");
        }
    }

    // const putCartItem = async ()=>{
    //     await CartItemApi.putCartItem(1, 1);
    // }

    // const location = useLocation();
    useEffect(() => {
        if(loginUser){
            fetchUserCart().then();
        }
        // putCartItem();
    }, [loginUser]);

    // // const location = useLocation();
    // useEffect(() => {
    //     setCartItemDto(mockData);
    //     putCartItem();
    // }, []);



    return(
        <Box className="shopping-cart-container">
            <NavList/>
            {
                cartItemDto &&
                <ShoppingCartTable cartItemDto={cartItemDto}/>
            }
        </Box>
    )
}