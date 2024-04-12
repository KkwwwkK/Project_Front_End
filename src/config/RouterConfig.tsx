import ProductListingPage from "../ui/page";
import {createBrowserRouter} from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <ProductListingPage/>
    },
    // {
    //     path: "/product/:productId/:userId",
    //     element: <ProductDetail/>
    // },
    // {
    //     path: "/shoppingcart",
    //     element: <ShoppingCart/>
    // },
    // {
    //     path: "/login",
    //     element: <LoginPage/>
    // },
    // {
    //     path: "/checkout/:transactionId",
    //     element: <Checkout/>
    // },
    // {
    //     path: "/thankyou",
    //     element: <ThankYou/>
    // }
])