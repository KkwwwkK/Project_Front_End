import { TableRow, TableCell } from '@mui/material';
// import QuantityInput from "../../../util/QuantityInput.tsx";
import DeleteIcon from '@mui/icons-material/Delete';
import {CartItemDto} from "../../../data/CartItem/CartItemDto.ts";
import CartQuantityInput from "../../../util/CartQuantityInput.tsx";
import {useState} from "react";

type Props = {
    listData: CartItemDto;
}
export default function ShoppingCartTableRow({listData}: Props){
    const[quantity, setQuantity] = useState<number>(listData.cart_quantity);
    const handleMinus = ()=> {
        if(quantity > 1){
            setQuantity((prevState:number) => (
                prevState - 1
            ))
        }
    }
    const handlePlus = ()=> {
        if(quantity < listData.stock){
            setQuantity((prevState:number) => (
                prevState + 1
            ))
        }
    }





    return (
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">
                <img src={listData.image_url}
                     alt="Product Image"
                    style={{
                    maxWidth: '100px', // Set the maximum width of the image
                    height: 'auto', // Maintain the aspect ratio
                    objectFit: 'contain', // Fit the image inside the specified width
                }}
                />
            </TableCell>
            <TableCell align="center">{listData.name}</TableCell>
            <TableCell align="center">${listData.price.toLocaleString()}</TableCell>
            {/*<TableCell align="center">{listData.cart_quantity}</TableCell>*/}
            <TableCell align="center"><CartQuantityInput quantity={quantity} handleMinus={handleMinus} handlePlus={handlePlus}/></TableCell>
            <TableCell align="center">$ {(listData.price * listData.cart_quantity).toLocaleString()}</TableCell>
            <TableCell align="center"><DeleteIcon/></TableCell>
        </TableRow>
    );
}

