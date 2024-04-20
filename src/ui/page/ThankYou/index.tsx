import NavList from "../../component/NavList/NavList.tsx";
import {useLocation} from "react-router-dom";
import {Container} from "@mui/material";
import ThankYouDesign from "../../component/ThankYou/ThankYouDesign.tsx";
import Box from "@mui/material/Box";

export default function ThankYou() {
    // const location = useLocation();

    return(
        <Box className="shopping-cart-container">
            <NavList/>
            <ThankYouDesign/>
            {/*<h1>Thank You Page!</h1>*/}
            {/*<h3>Pathname: {location.pathname} </h3>*/}
        </Box>
    )
}