import {Container} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

export default function ThankYouDesign(){

    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(20);

    useEffect(() => {
        const timer = setInterval(() => {
            if (countdown > 0) {
                setCountdown((prevCount) => prevCount - 1);
            } else {
                navigate("/");
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [countdown, navigate]);


    return(
        <Container
            sx={{
                position: "relative",
                width: "100vw",
                height: "100vh",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width:'100%',
                    height: '100%'
                }}
            >
                <Typography variant="h3">Thank You Very Much!</Typography>
                <br />
                <Typography>in case you need anything else~</Typography>
                <Button
                    variant="contained"
                    onClick={() => navigate("/")}
                    sx={{
                        marginTop: "20px",
                        borderRadius: "24px",
                        backgroundImage:
                            "linear-gradient(to bottom, silver, black, silver)", // Gradient background
                        color: "white", // Text color
                        "&:hover": {
                            backgroundImage:
                                "linear-gradient(to top, silver, black, silver)", // Hover effect
                        },
                    }}
                >
                    Go Home in {countdown} s
                </Button>
            </Box>
            {/* Image placed to the right */}
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    right: "0",
                    transform: "translateY(-50%)",
                }}
            >
                <img
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/cd1c9a80364113.5cdec491b07d9.gif"
                    alt="Thank You"
                    style={{ width: "400px", height: "auto" }} // Adjust size as needed
                />
            </Box>
        </Container>
        // <Container>
        //     <Box sx={{
        //         display: 'flex',
        //         flexDirection: 'row',
        //         justifyContent: 'space-between', // Adjust spacing between boxes
        //         alignItems: 'center', // Center content vertically
        //         height: '100vh', // Set the height of the container to full viewport height
        //         backgroundImage: `url('https://mir-s3-cdn-cf.behance.net/project_modules/disp/cd1c9a80364113.5cdec491b07d9.gif')`,
        //         backgroundSize: 'cover', // Ensure the background image covers the box
        //         backgroundPosition: 'center', // Center the background image
        //         padding: '0 20vw', // Adjust padding horizontally
        //     }}>
        //         <Box>
        //             <Typography variant="h5">Your home got Smarter now!!!</Typography>
        //             <br/>
        //             <Typography>in case you need anything else~</Typography>
        //             <Button
        //                 variant="contained"
        //                 onClick={()=>(navigate("/"))}
        //                 sx={{
        //                     marginTop: '20px',
        //                     borderRadius: '24px',
        //                     backgroundImage: 'linear-gradient(to bottom, silver, black, silver)', // Gradient background
        //                     color: 'white', // Text color
        //                     '&:hover': {
        //                         backgroundImage: 'linear-gradient(to top, silver, black, silver)', // Hover effect
        //                     },
        //                 }}
        //             >
        //                 Go Home in {countdown}
        //             </Button>
        //
        //         </Box>
        //     </Box>
        //
        //
        // </Container>
    )
}