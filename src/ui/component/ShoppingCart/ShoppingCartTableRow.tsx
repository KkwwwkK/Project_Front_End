import { TableRow, TableCell } from '@mui/material';
import QuantityInput from "../../../util/QuantityInput.tsx";
import DeleteIcon from '@mui/icons-material/Delete';


export default function ShoppingCartTableRow(){
    return (
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">
                <img src="https://m.media-amazon.com/images/I/713+ykRgTIL._AC_SL1500_.jpg"
                     alt="Product Image"
                    style={{
                    maxWidth: '100px', // Set the maximum width of the image
                    height: 'auto', // Maintain the aspect ratio
                    objectFit: 'contain', // Fit the image inside the specified width
                }}
                />
            </TableCell>
            <TableCell align="center">2-in-1 Dish Soap Dispenser with Sponge Holder</TableCell>
            <TableCell align="center">$78.29</TableCell>
            <TableCell align="center"><QuantityInput /></TableCell>
            <TableCell align="center">Subtotal</TableCell>
            <TableCell align="center"><DeleteIcon/></TableCell>
        </TableRow>
    );
}

