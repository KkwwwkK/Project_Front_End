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
import {isAxiosError} from "axios";
import LoadingContainer from "../../component/ShoppingCart/LoadingContainer.tsx";
import StickyFooter from "../../../util/Footer.tsx";
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
            if (isAxiosError(error) && error.response && error.response.status === 404) {
                setCartItemDto([]);
            } else {
                // For other errors, navigate to error page or handle accordingly
                navigate('/error');
            }
        }
    }


    // const location = useLocation();
    useEffect(() => {
        if(loginUser){
            fetchUserCart().then();
        }
        // putCartItem();
    }, [loginUser]);


    // Handle logout navigation
    useEffect(() => {
        if (loginUser === null) {
            // User has logged out, navigate to home page
            navigate('/');
        }
    }, [loginUser]);

    useEffect(() => {
        document.title = "Smart Cart"
    }, []);


    return(
        <Box className="shopping-cart-container">
            <NavList/>
            {
                cartItemDto
                    ? <ShoppingCartTable cartItemDto={cartItemDto}/>
                    : <LoadingContainer/>
            }
            <StickyFooter/>
        </Box>

    )
}