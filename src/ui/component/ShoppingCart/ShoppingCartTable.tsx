// import * as React from 'react';
import {TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Container} from '@mui/material';
import ShoppingCartTableRow from "./ShoppingCartTableRow.tsx";
import OrderSummary from "./OrderSummary.tsx";
import {CartItemDto} from "../../../data/CartItem/CartItemDto.ts";
import Typography from "@mui/material/Typography";

type Props={
    cartItemDto: CartItemDto[];
}

export default function ShoppingCartTable({cartItemDto}: Props){
    let totalPrice:number = 0;
    cartItemDto.forEach((value)=>{
        totalPrice += value.price * value.cart_quantity;
    })


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

