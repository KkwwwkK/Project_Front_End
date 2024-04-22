import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundImage: `url('https://wallpapers.com/images/high/robot-pictures-049zn0b2q7ld5nlw.webp')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white',
                textAlign: 'center',
                padding: '0 20px', // Add padding for content on the left side
            }}
        >
            <Box
                sx={{
                    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent overlay
                    padding: '20px',
                    borderRadius: '8px',
                    position: 'absolute',
                    left: '300px', // Adjust the left position as needed
                    textAlign: 'center', // Align text to the left
                }}
            >
                {/* Title */}
                <Typography variant="h1" gutterBottom>
                    404
                </Typography>

                {/* Subtitle */}
                <Typography variant="subtitle1" gutterBottom>
                    Oops. Looks like you took a wrong turn.
                </Typography>

                {/* Button */}
                <Button
                    variant="contained"
                    onClick={() => navigate('/')}
                    sx={{
                        marginTop: '20px',
                        borderRadius: '24px',
                        backgroundImage: 'linear-gradient(to bottom, silver, white, silver)', // Gradient background
                        color: 'black', // Text color
                        '&:hover': {
                            backgroundImage: 'linear-gradient(to top, silver, white, silver)', // Hover effect
                        },
                    }}
                >
                    Go Home
                </Button>
            </Box>
        </Box>
    );
};

export default Error;
