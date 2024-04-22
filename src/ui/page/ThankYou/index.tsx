import NavList from "../../component/NavList/NavList.tsx";
// import {useLocation} from "react-router-dom";
// import {Container} from "@mui/material";
import ThankYouDesign from "../../component/ThankYou/ThankYouDesign.tsx";
import Box from "@mui/material/Box";
import StickyFooter from "../../../util/Footer.tsx";

export default function ThankYou() {
    // const location = useLocation();

    return(
        <Box className="shopping-cart-container">
            <NavList/>
            <ThankYouDesign/>
            <StickyFooter/>
        </Box>
    )
}