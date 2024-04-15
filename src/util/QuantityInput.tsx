import {ChangeEvent, useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function QuantityInput() {
    const [quantity, setQuantity] = useState(1);

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleInputChange = (event:ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (value === '' || /^\d+$/.test(value)) {
            setQuantity(parseInt(value) || 0);
        }
    };

    return (
        <Box display="flex" alignItems="center">
            {/* Decrease Button */}
            <Button variant="contained" onClick={handleDecrease}
                    sx={{
                        backgroundColor: 'white',
                        color: 'black', // Text color (white) for contrast
                        minWidth: '40px', // Adjust width as needed
                        padding: '8px 0', // Adjust padding for button size
                        borderRadius: '4px', // Rounded corners
                    }}>
                -
            </Button>

            {/* Quantity Input Box */}
            <Box
                component="input"
                type="number"
                value={quantity}
                onChange={handleInputChange}
                min={0}
                sx={{
                    width: '50px',
                    height:'24px',
                    textAlign: 'center',
                    margin: '0 1px',
                    border: '2px solid #ccc',
                    borderRadius: '4px',
                    padding: '8px',
                    outline: 'none',
                }}
            />

            {/* Increase Button */}
            <Button variant="contained" onClick={handleIncrease}
                    sx={{
                        backgroundColor: 'white',
                        color: 'black', // Text color (white) for contrast
                        minWidth: '40px', // Adjust width as needed
                        padding: '8px', // Adjust padding for button size
                        borderRadius: '4px', // Rounded corners
                    }}
            >
                +
            </Button>
        </Box>
    );
}
