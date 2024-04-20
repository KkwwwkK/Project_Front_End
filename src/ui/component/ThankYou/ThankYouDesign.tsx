import {Container} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";

export default function ThankYouDesign(){

    const navigate = useNavigate();

    return(
        <Container>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between', // Adjust spacing between boxes
                alignItems: 'center', // Center content vertically
                height: '100vh', // Set the height of the container to full viewport height
                backgroundImage: `url('https://wallpapers.com/images/high/kawaii-robot-1280-x-1024-wallpaper-yz8uy0yxozyowy8k.webp')`,
                backgroundSize: 'cover', // Ensure the background image covers the box
                backgroundPosition: 'center', // Center the background image
                padding: '0 20vw', // Adjust padding horizontally
            }}>
                <Box>
                    <Typography><h1>Thanks for your order!</h1></Typography>
                    <Typography>in case you need anything else~</Typography>
                    <br/>
                    <Button
                        variant="contained"
                        onClick={()=>(navigate("/"))}
                        sx={{
                            backgroundImage: 'linear-gradient(to right, black, silver)', // Color gradient background
                            color: 'silver', // Silver-colored text
                            '&:hover': {
                                backgroundImage: 'linear-gradient(to right, silver, black)', // Hover effect
                            },
                            borderRadius: '24%'
                        }}
                    >
                        Go Home
                    </Button>
                </Box>
                {/*<Box sx={{display: 'flex', zIndex: '-1', pl: '20vw'}}>*/}
                {/*    <img src="https://wallpapers.com/images/high/kawaii-robot-1280-x-1024-wallpaper-yz8uy0yxozyowy8k.webp"/>*/}
                {/*</Box>*/}
            </Box>


        </Container>
    )
}