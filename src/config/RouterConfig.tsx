import ProductListingPage from "../ui/page/ProductListingPage";
import {createBrowserRouter} from "react-router-dom";
import ProductDetail from "../ui/page/ProductDetail/index..tsx";
import LoginPage from "../ui/page/LoginPage";
import ShoppingCart from "../ui/page/ShoppingCart";
import Checkout from "../ui/page/Checkout";
import {Error} from "@mui/icons-material";
import ErrorPage from "../ui/component/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <ProductListingPage/>
    },
    {
        path: "/product/:productId/:userId",
        element: <ProductDetail/>
    },
    {
        path: "/shoppingcart",
        element: <ShoppingCart/>
    },
    {
        path: "/login",
        element: <LoginPage/>
    },
    {
        path: "/checkout/:transactionId",
        element: <Checkout/>
    },
    // {
    //     path: "/thankyou",
    //     element: <ThankYou/>
    // }
    {
        path:"/error",
        element: <ErrorPage/>
    },
])