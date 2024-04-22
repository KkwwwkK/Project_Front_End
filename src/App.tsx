
import './App.css'
import {RouterProvider} from "react-router-dom";
import {router} from "./config/RouterConfig.tsx";
import {useEffect, useState} from "react";
import {UserData} from "./data/user/UserData.tsx";
import * as FirebaseAuthService from "./authService/FirebaseAuthService.tsx";
import {LoginUserContext} from "./context/LoginUserContext.ts";
import {CartContext} from "./context/CartContext.ts";
import {CartItemDto} from "./data/CartItem/CartItemDto.ts";
import * as CartItemApi from "./api/CartItemApi.ts";
function App() {
    const[loginUser, setLoginUser] = useState<UserData | null | undefined >(undefined);
    const[cartItemNumber, setCartItemNumber] = useState(0);

    const fetchUserCart = async ()=> {
        try {
            const responseCartItemDto:CartItemDto[] = await CartItemApi.getUserCart();
            if (loginUser){
                setCartItemNumber(responseCartItemDto.length);
            } else {
                setCartItemNumber(0);
            }
        } catch(error){
            console.log(error);
        }
    }

    // const location = useLocation();
    useEffect(() => {
        if(loginUser){
            fetchUserCart().then();
        }
        // putCartItem();
    }, [loginUser, cartItemNumber]);

    useEffect(() => {
        FirebaseAuthService.handleOnAuthStateChanged(setLoginUser);
    }, []);

  return (
    <>
            <LoginUserContext.Provider value={loginUser}>
                <CartContext.Provider value={{cartItemNumber, setCartItemNumber}}>
                    <RouterProvider router={router}/>
                </CartContext.Provider>
            </LoginUserContext.Provider>
    </>
  )
}

export default App
