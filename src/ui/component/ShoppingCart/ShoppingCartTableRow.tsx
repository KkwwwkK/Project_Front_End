import { TableRow, TableCell } from '@mui/material';
// import QuantityInput from "../../../util/QuantityInput.tsx";
import DeleteIcon from '@mui/icons-material/Delete';
import {CartItemDto} from "../../../data/CartItem/CartItemDto.ts";
import {useState} from "react";
import QuantityInput from "../../../util/QuantityInput.tsx";
import * as CartItemApi from "../../../api/CartItemApi.ts";

type Props = {
    listData: CartItemDto;
}
export default function ShoppingCartTableRow({listData}: Props){
    const[quantity, setQuantity] = useState<number>(listData.cart_quantity);
    const handleMinus = async ()=> {
        if(quantity > 1){
            setQuantity((prevState:number) => {
                const newQuantity = prevState - 1;
                updateQuantity(newQuantity);
                return newQuantity;
            })
        }
    }

    const handlePlus = async ()=> {
        if(quantity < listData.stock){
            setQuantity((prevState:number) => {
                const newQuantity = prevState + 1;
                updateQuantity(newQuantity);
                return newQuantity;
            })
        }
    }

    const updateQuantity = async (newQuantity: number) => {
        try {
            await CartItemApi.updateUserCartItemQuantity(listData.pid, newQuantity);
            setQuantity(newQuantity);
        } catch (error) {
            console.log(error);
            throw error;
        }
    };
    // const handlePlus = async ()=> {
    //     if(quantity < listData.stock){
    //         setQuantity((prevState:number) => (
    //             prevState + 1
    //         ))
    //     }
    //     try {
    //         await CartItemApi.updateUserCartItemQuantity(listData.pid, listData.cart_quantity);
    //     } catch (error) {
    //         console.log(error);
    //         throw error;
    //     }

    // }





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
            <TableCell align="center"><QuantityInput readOnly={true} quantity={quantity} handleMinus={handleMinus} handlePlus={handlePlus}/></TableCell>
            <TableCell align="center">$ {(listData.price * quantity).toLocaleString()}</TableCell>
            <TableCell align="center"><DeleteIcon/></TableCell>
        </TableRow>
    );
}

