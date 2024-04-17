import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {Container} from "@mui/material";
import {useState} from "react";

type Props={
    totalPrice : number;
}
export default function OrderSummary({totalPrice}: Props) {
    // const [isSticky, setIsSticky] = useState(false);
    //
    // // Handle scroll event to toggle sticky behavior
    // const handleScroll = () => {
    //     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    //     setIsSticky(scrollTop > 100); // Example threshold for sticky behavior
    // };
    //
    // // Attach scroll event listener when component mounts
    // useState(() => {
    //     window.addEventListener("scroll", handleScroll);
    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, []);

    return (
        <Container sx={{
            display: 'flex', width: '30vw', maxHeight: "30vh",
            // position: isSticky ? 'fixed' : 'static', // Toggle position based on isSticky state
            // top: 0, // Adjust top position for fixed positioning
            // right: 0, // Adjust right position for fixed positioning
            // zIndex: 1000
        }}>
            <Box sx={{p: 2, border: '1px solid #ccc', borderRadius: '4px'}}>
                <Typography variant="h5" sx={{ marginBottom: 2, fontSize: '1.5rem' }}>Order Summary</Typography>

                <Typography  sx={{margin: "24px 0"}}>
                    Total Price:
                    $ {totalPrice.toLocaleString()}
                </Typography>
                <Button variant="contained">
                    Checkout
                </Button>
            </Box>
        </Container>
    )
}