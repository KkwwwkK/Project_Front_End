import {Container} from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import QuantityInput from "./QuantityInput.tsx";



export default function ProductDetailInfo(){
    return(
        <Container sx={{display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "80vh"}}>
            <Box
                height={400}
                width={300}
                my={4}
                display="flex"
                alignItems="center"
                gap={4}
                p={2}
                sx={{}}
            >
                <img src="https://m.media-amazon.com/images/I/713+ykRgTIL._AC_SL1500_.jpg"
                     alt="Product Image"
                     style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                />
            </Box>
            <Card
                sx={{
                        height: 435,
                        width: 400
                }}
                >
                <CardContent>
                    <Typography  component="div">
                        Smart WiFi Wireless Ultrasonic Diffuser
                    </Typography>
                    <Typography sx={{ mb: 1.5,
                    margin: "24px 0 0 0"}} color="text.secondary">
                        Description:
                    </Typography>
                    <Typography>
                        Aromatherapy 400ml Ultrasonic Diffuser & Humidifier with Alexa & Google Home Phone App & Voice Control - Create Schedules - LED & Timer Settings Dark
                        Brand	Sierra Modern Home
                        Color	Dark Brown
                        Scent	Aromatherapy
                        Recommended Uses For Product	Home
                        Special Feature	Timer
                    </Typography>
                    <Typography variant="body2" sx={{
                        margin: '16px 0'
                    }}>
                        Price: $313.09
                        <br />
                    </Typography>
                    Quantity:
                    <QuantityInput/>
                </CardContent>
                <CardActions sx={{
                    paddingLeft: '16px', // Set left padding to 16px
                    justifyContent: 'flex-start', // Align items to the left
                }}>
                    <Button size="small" variant="contained">Add to Cart</Button>
                </CardActions>
            </Card>
        </Container>
    )
}