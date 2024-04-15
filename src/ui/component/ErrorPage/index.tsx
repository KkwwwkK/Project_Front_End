import Box from "@mui/material/Box";
import NavList from "../NavList/NavList.tsx";

export default function ErrorPage(){
    return(
        <Box>
            <NavList/>
            <Box display='flex' justifyContent='center' alignItems='center' height='90vh'>
                <img
                    src='https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-page-templates.jpg'
                />
            </Box>
        </Box>
    )
}