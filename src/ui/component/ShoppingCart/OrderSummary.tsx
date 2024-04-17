import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {Container} from "@mui/material";

type Props={
    totalPrice : number;
}
export default function OrderSummary({totalPrice}: Props) {
    return (
        <Container sx={{display: 'flex', width: '30vw'}}>
            <Box sx={{p: 2, border: '1px solid #ccc', borderRadius: '4px'}}>
                <Typography variant="h5" sx={{marginBottom: 2}}>Order Summary</Typography>

                <Typography variant="body1" sx={{marginBottom: 2}}>
                    Total Price: $ {totalPrice.toLocaleString()}
                </Typography>
                <Button variant="contained">
                    Checkout
                </Button>
            </Box>
        </Container>

    )
}