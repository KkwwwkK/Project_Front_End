// import * as React from 'react';
import {TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Container} from '@mui/material';
import ShoppingCartTableRow from "./ShoppingCartTableRow.tsx";
import OrderSummary from "./OrderSummary.tsx";
import {CartItemDto} from "../../../data/CartItem/CartItemDto.ts";

type Props={
    cartItemDto: CartItemDto[];
}

export default function ShoppingCartTable({cartItemDto}: Props){
    let totalPrice:number = 0;
    cartItemDto.forEach((value)=>{
        totalPrice += value.price * value.cart_quantity;
    })


    return (
        <Container sx={{display: 'flex', flexDirection: 'row'}}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Image</TableCell>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Unit Price(HKD)</TableCell>
                            <TableCell align="center">Quantity</TableCell>
                            <TableCell align="center">Subtotal</TableCell>
                            <TableCell align="center"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            cartItemDto.map((data)=>(
                                <ShoppingCartTableRow key={data.pid} listData={data}/>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <OrderSummary totalPrice={totalPrice}/>
        </Container>
    );
}

