import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";

const Error = () => {

    const navigate = useNavigate();
    return (
        <Box>
            {/* Container for stars */}
            <Box
                className="container container-star"
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100vh',
                    overflow: 'hidden',
                    backgroundImage:
                        'linear-gradient(to bottom, white, silver, white)',
                }}
            ></Box>

            {/* Container for title and moon */}
            <Box
                className="container-title"
                sx={{
                    width: 600,
                    height: 450,
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    position: 'absolute',
                    color: 'black',
                    lineHeight: 1,
                    fontWeight: 700,
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    display: 'flex',
                }}
            >
                {/* Title with moon and facial features */}
                <Typography variant="h1">
                    <span className="number">4</span>
                    <span className="number">0</span>
                    <span className="number">4</span>
                </Typography>

                {/* Subtitle */}
                <Typography variant="subtitle1" className="subtitle">
                    Oops. Looks like you took a wrong turn.
                </Typography>

                {/* Button */}
                <Button
                    variant="contained"
                    onClick={()=>(navigate("/"))}
                    sx={{
                        mt: '40px',

                        backgroundImage: 'linear-gradient(to bottom, white, silver, white)', // Color gradient background
                        color: 'black', // Silver-colored text
                        '&:hover': {
                            backgroundImage: 'linear-gradient(to top, black, silver, white))', // Hover effect
                        },
                        borderRadius: '24%'
                    }}
                >
                    Go Home
                </Button>
            </Box>
        </Box>
    );
};

export default Error;

// import Box from "@mui/material/Box";
// import NavList from "../NavList/NavList.tsx";
//
// export default function ErrorPage(){
//     return(
//         <Box>
//             <Box display='flex' justifyContent='center' alignItems='center' height='90vh'>
//                 <img
//                     src='https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-page-templates.jpg'
//                 />
//             </Box>
//         </Box>
//     )
// }