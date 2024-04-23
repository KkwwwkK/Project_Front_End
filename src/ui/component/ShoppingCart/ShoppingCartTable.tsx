// import * as React from 'react';
import {TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Container} from '@mui/material';
import ShoppingCartTableRow from "./ShoppingCartTableRow.tsx";
import OrderSummary from "./OrderSummary.tsx";
import {CartItemDto} from "../../../data/CartItem/CartItemDto.ts";
import Typography from "@mui/material/Typography";
import {useEffect, useState} from "react";
/* Import Roboto font from Google Fonts */

type Props={
    cartItemDto: CartItemDto[];
}

export default function ShoppingCartTable({cartItemDto}: Props){
    const[totalPrice, setTotalPrice] = useState<number>(0);
    const[newCartItem, setNewCartItem] = useState<CartItemDto[]>(cartItemDto);

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
            marginTop: '100px',
            justifyContent: 'center',
            marginBottom:"400px"
        }}>
            <TableContainer component={Paper} sx={{ width: 'calc(100vw + 400px)' }}> {/* Adjust width here */}
                <Table aria-label="simple table">
                    <TableHead sx={{ backgroundImage: 'linear-gradient(to bottom, silver, black, silver)', // Gradient background
                        color: 'white', // Text color
                        '&:hover': {
                            backgroundImage: 'linear-gradient(to top, silver, black, silver)', // Hover effect
                        }, }}>
                        <TableRow>
                            <TableCell align="center"><Typography variant="subtitle1" sx={{ color: 'white' }}>Product</Typography></TableCell>
                            <TableCell align="center"><Typography></Typography></TableCell>
                            <TableCell align="center"><Typography variant="subtitle1" sx={{ color: 'white' }}>Unit Price</Typography></TableCell>
                            <TableCell align="center"><Typography variant="subtitle1" sx={{ color: 'white' }}>Quantity</Typography></TableCell>
                            <TableCell align="center"><Typography variant="subtitle1" sx={{ color: 'white' }}>Subtotal</Typography></TableCell>
                            <TableCell align="center"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {newCartItem.length === 0 ? (
                            <TableRow style={{ height: '150px' }}>
                                <TableCell colSpan={6} align="center">
                                    <img
                                        src="https://wallpapers.com/images/high/cute-blue-robot-uw9xkb35giaa6uag.webp"
                                        alt="Empty cart"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'relative' }}
                                    />
                                    <Typography
                                        variant="h5"
                                        style={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '32%',
                                            transform: 'translate(-50%, -50%)',
                                            color: 'white',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        Nothing Here Yet~~
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        ) : (
                            newCartItem.map((data) => (
                                <ShoppingCartTableRow
                                    key={data.pid}
                                    listData={data}
                                    updateCartItem={handleUpdateCartItem}
                                    handleRemoveCartItem={handleRemoveCartItem}
                                />
                            ))
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <OrderSummary totalPrice={totalPrice}/>
        </Container>
    );
}

