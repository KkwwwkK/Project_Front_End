import {ChangeEvent, useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import Typography from "@mui/material/Typography";

type Props = {
    quantity: number;
    handleMinus: ()=>void;
    handlePlus: ()=>void;
}


export default function QuantityInput({quantity, handleMinus, handlePlus}: Props) {
    // const [quantity, setQuantity] = useState(1);

    // const handleDecrease = () => {
    //     if (quantity > 1) {
    //         setQuantity(quantity - 1);
    //     }
    // };
    //
    // const handleIncrease = () => {
    //     setQuantity(quantity + 1);
    // };

    // const handleInputChange = (event:ChangeEvent<HTMLInputElement>) => {
    //     const value = event.target.value;
    //     if (value === '' || /^\d+$/.test(value)) {
    //         setQuantity(parseInt(value) || 0);
    //     }
    // };


    return (
        <Box display="flex" alignItems="center">
            {/* Decrease Button */}
            <Button variant="contained" onClick={handleMinus}
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
            <Box sx={{display: 'flex'}}>
                <Typography component="input"
                            // type="number"
                            value={quantity}
                            // onChange={handleInputChange}
                            min={0}
                            sx={{
                                display: 'flex',
                                width: '50px',
                                height:'24px',
                                textAlign: 'center',
                                margin: '0 1px',
                                border: 'none',
                                borderRadius: '4px',
                                outline: 'none',
                            }}>
                </Typography>
            </Box>

            {/* Increase Button */}
            <Button variant="contained" onClick={handlePlus}
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
