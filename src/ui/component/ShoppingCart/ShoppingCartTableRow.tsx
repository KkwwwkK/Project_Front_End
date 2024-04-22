import { TableRow, TableCell } from '@mui/material';
// import QuantityInput from "../../../util/QuantityInput.tsx";
import DeleteIcon from '@mui/icons-material/Delete';
import {CartItemDto} from "../../../data/CartItem/CartItemDto.ts";
import {useContext, useState} from "react";
import QuantityInput from "../../../util/QuantityInput.tsx";
import * as CartItemApi from "../../../api/CartItemApi.ts";
import CircularProgress from "@mui/material/CircularProgress";
import {useNavigate} from "react-router-dom";
import {CartContext, CartContextType} from "../../../context/CartContext.ts";

type Props = {
    listData: CartItemDto;
    updateCartItem: (updatedItem: CartItemDto) => void;
    handleRemoveCartItem: (pid: number) => void;
}
export default function ShoppingCartTableRow({listData, updateCartItem, handleRemoveCartItem}: Props){
    const[quantity, setQuantity] = useState<number>(listData.cart_quantity);
    const[isQuantityPatching, setIsQuantityPatching] = useState<boolean>(false);
    const[isItemDeleting, setIsItemDeleting] = useState<boolean>(false);

    const navigate = useNavigate();

    // Ensure cartContext is defined before accessing properties
    const cartContext = useContext<CartContextType | undefined>(CartContext); // Consume context values
    const setCartItemNumber = cartContext?.setCartItemNumber;

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
            setQuantity(newQuantity);
            const updatedItem = { ...listData, cart_quantity: newQuantity };
            updateCartItem(updatedItem);
            setIsQuantityPatching(true);
            await CartItemApi.updateUserCartItemQuantity(listData.pid, newQuantity);
            setIsQuantityPatching(false);
        } catch (error) {
            setIsQuantityPatching(false);
            console.log(error);
            throw error;
        }
    };


    const removeCartItem = async () => {
        try {
            setIsItemDeleting(true);
            await CartItemApi.removeItemByPid(listData.pid);
            setIsItemDeleting(false);
            if(setCartItemNumber){
                setCartItemNumber((prevCount) => Math.max(prevCount - 1, 0));
            }
            handleRemoveCartItem(listData.pid);
        } catch(error){
            setIsItemDeleting(false);
            console.log(error);
            throw error;
        }
    }


    return (
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row" onClick={()=>navigate(`/product/${listData.pid}/:userId`)} style={{ cursor: 'pointer'}}>
                <img src={listData.image_url}
                     alt="Product Image"
                    style={{
                    maxWidth: '100px', // Set the maximum width of the image
                    height: 'auto', // Maintain the aspect ratio
                    objectFit: 'contain', // Fit the image inside the specified width
                }}
                />
            </TableCell>
            <TableCell align="center" style={{ minWidth: '150px' }}>{listData.name}</TableCell>
            <TableCell align="center">${listData.price.toLocaleString()}</TableCell>
            <TableCell align="center"><QuantityInput readOnly={true} quantity={quantity} handleMinus={handleMinus} handlePlus={handlePlus} isLoading={isQuantityPatching}/></TableCell>
            <TableCell align="center" style={{ minWidth: '100px' }}>$ {(listData.price * quantity).toLocaleString()}</TableCell>
                {
                    isItemDeleting
                        ?<TableCell align="center"><CircularProgress size={20} color="success"/></TableCell>
                        :<TableCell align="center"><DeleteIcon onClick={removeCartItem} style={{
                            cursor: 'pointer',
                            color: '#757575', // Bright silver color for the icon
                        }}/></TableCell>
                }
        </TableRow>
    );
}

