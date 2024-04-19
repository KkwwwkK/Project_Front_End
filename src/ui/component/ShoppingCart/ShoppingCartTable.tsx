// import * as React from 'react';
import {TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Container} from '@mui/material';
import ShoppingCartTableRow from "./ShoppingCartTableRow.tsx";
import OrderSummary from "./OrderSummary.tsx";
import {CartItemDto} from "../../../data/CartItem/CartItemDto.ts";
import Typography from "@mui/material/Typography";
import {useEffect, useState} from "react";

type Props={
    cartItemDto: CartItemDto[];
}

export default function ShoppingCartTable({cartItemDto}: Props){
    const[totalPrice, setTotalPrice] = useState<number>(0);
    const[newCartItem, setNewCartItem] = useState<CartItemDto[]>(cartItemDto);


    // useEffect(() => {
    //     let newTotalPrice = 0;
    //     cartItemDto.forEach((value)=>{
    //         newTotalPrice += value.price * value.cart_quantity;
    //     })
    //     setTotalPrice(newTotalPrice)
    // }, [cartItemDto]);

    const updateTotalPrice = (items: CartItemDto[]) => {
        let newTotalPrice = 0;
        items.forEach((value) => {
            newTotalPrice += value.price * value.cart_quantity;
        });
        setTotalPrice(newTotalPrice);
    };

    const handleUpdateCartItem = (updatedItem: CartItemDto) => {
        const updatedItems = newCartItem.map(
            (item) =>(
            item.pid === updatedItem.pid ? updatedItem : item
            ));
        updateTotalPrice(updatedItems);
    };

    const handleRemoveCartItem = (pid: number) => {
        const updatedItems = newCartItem.filter(
            (item)=>(
                item.pid !== pid
            ))
        setNewCartItem(updatedItems);
        updateTotalPrice(updatedItems);
    }


    useEffect(() => {
        updateTotalPrice(newCartItem);
    }, [newCartItem]);



    return (
        <Container sx={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: '40px',
            justifyContent: 'center'
        }}>
            <TableContainer component={Paper} sx={{ width: 'calc(100vw + 400px)' }}> {/* Adjust width here */}
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center"><Typography>Image</Typography></TableCell>
                            <TableCell align="center"><Typography>Name</Typography></TableCell>
                            <TableCell align="center"><Typography>Unit Price(HKD)</Typography></TableCell>
                            <TableCell align="center"><Typography>Quantity</Typography></TableCell>
                            <TableCell align="center"><Typography>Subtotal</Typography></TableCell>
                            <TableCell align="center"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            newCartItem.map((data)=>(
                                <ShoppingCartTableRow
                                    key={data.pid}
                                    listData={data}
                                    updateCartItem={handleUpdateCartItem}
                                    handleRemoveCartItem={handleRemoveCartItem}
                                />
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <OrderSummary totalPrice={totalPrice}/>
        </Container>
    );
}

