import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import {ChangeEvent} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";


type Props = {
    quantity: number;
    handleMinus: ()=>void;
    handlePlus: ()=>void;
    handleInputChange?: (event:ChangeEvent<HTMLInputElement>)=>void;
    readOnly?: boolean;
    isLoading?: boolean;
}


export default function QuantityInput({quantity, handleMinus, handlePlus, handleInputChange, readOnly, isLoading = false}: Props) {

    // const handleInputChange = (event:ChangeEvent<HTMLInputElement>) => {
    //     const value = event.target.value;
    //     if (value === '' || /^\d+$/.test(value)) {
    //         setQuantity(parseInt(value) || 0);
    //     }
    // };


    return (
        <Box display="flex" alignItems="center">
            {/* Decrease Button */}
            <Button variant="contained" onClick={handleMinus} disabled={isLoading}
                    sx={{
                        backgroundColor: 'white',
                        color: 'black', // Text color (white) for contrast
                        minWidth: '40px', // Adjust width as needed
                        padding: '8px 0', // Adjust padding for button size
                        borderRadius: '50%', // Rounded corners

                    }}>
                <RemoveIcon/>
            </Button>

            {/* Quantity Input Box */}
            <Box
                sx={{
                    display: 'flex',
                    width: '40px', // Set a consistent width for both spinner and input box
                    height: '24px',
                    alignItems: 'center',

                    borderRadius: '4px',
                    paddingX: '4px', // Add horizontal padding to center content
                    justifyContent: 'center', // Center content horizontally
                }}
            >
                {isLoading ? (
                    <FontAwesomeIcon icon={faSpinner} spin/>
                ) : (
                    <input
                        value={quantity}
                        onChange={handleInputChange}
                        readOnly={readOnly}
                        style={{
                            width: '100%',
                            height: '100%',
                            border: readOnly ? 'none' : '1px solid lightgrey',
                            outline: 'none',
                            textAlign: 'center',
                        }}
                    />
                )}
            </Box>

            {/* Increase Button */}
            <Button variant="contained" onClick={handlePlus} disabled={isLoading}
                    sx={{
                        backgroundColor: 'white',
                        color: 'black', // Text color (white) for contrast
                        minWidth: '40px', // Adjust width as needed
                        padding: '8px', // Adjust padding for button size
                        borderRadius: '50%', // Rounded corners
                    }}
            >
                <AddIcon/>
            </Button>
        </Box>
    );
}
