import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {Container} from "@mui/material";

export default function OrderSummary() {
    return (
        <Container sx={{display: 'flex', width: '30vw'}}>
            <Box sx={{p: 2, border: '1px solid #ccc', borderRadius: '4px'}}>
                <Typography variant="h5" sx={{marginBottom: 2}}>Order Summary</Typography>

                <Typography variant="body1" sx={{marginBottom: 2}}>
                    Total Price:
                </Typography>
                <Button variant="contained">
                    Checkout
                </Button>
            </Box>
        </Container>

    )
}