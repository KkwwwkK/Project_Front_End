import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import {ChangeEvent} from "react";

type Props = {
    quantity: number;
    handleMinus: ()=>void;
    handlePlus: ()=>void;
    handleInputChange?: (event:ChangeEvent<HTMLInputElement>)=>void;
    readOnly?: boolean;
}


export default function QuantityInput({quantity, handleMinus, handlePlus, handleInputChange, readOnly}: Props) {

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
            <Box sx={{display: 'flex', mr: '8px'}}>
                <input
                    value={quantity}
                    onChange={handleInputChange}
                    readOnly={readOnly}
                    style={{
                        display: 'flex',
                        width: '32px',
                        height: '24px',
                        justifyContent: 'center',
                        border: readOnly ? 'none' : '1px solid grey',
                        borderRadius: '4px',
                        outline: 'none',
                        textAlign: 'center',
                        marginLeft: '8px', // Add margin for spacing
                    }}
                />
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
