import Box from '@mui/material/Box';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";

export default function LoadingContainer() {
    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'transparent', // Semi-transparent black overlay
                zIndex: 2000, // Higher z-index to cover other elements
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <FontAwesomeIcon icon={faSpinner}
                             spin={true}
                style={{
                    width: '50px', // Adjust the width of the spinner image
                    height: '50px', // Adjust the height of the spinner image
                    backgroundColor: 'transparent', // Set the background color of the image to transparent
                }}
            />
        </Box>
    );
}
