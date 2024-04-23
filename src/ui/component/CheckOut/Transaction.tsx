// import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Container} from "@mui/material";
import Typography from "@mui/material/Typography";
import PaymentForm from "./PaymentForm.tsx";
import Box from "@mui/material/Box";
// import Stack from "@mui/material/Stack";
import TransactionRow from "./TransactionRow.tsx";
import {TransactionDto} from "../../../data/Transaction/TransactionDto.tsx";
import StickyFooter from "../../../util/Footer.tsx";



type Props = {
    transactionByTidDto: TransactionDto;
}

export default function Transaction({transactionByTidDto}: Props) {

    return (
        <Container sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            ml: '64px',
        }}>
            <Paper sx={{
                display: 'flex',
                minWidth: '58%',
                minHeight: 612,
                maxHeight: 612,
                }}>
                <TableContainer sx={{ maxHeight: 612 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead >
                            <TableRow>
                                <TableCell align="center" colSpan={1} sx={{ backgroundImage: 'linear-gradient(to bottom, silver, black, silver)', // Gradient background
                                    color: 'white', // Text color
                                    '&:hover': {
                                        backgroundImage: 'linear-gradient(to top, silver, black, silver)', // Hover effect
                                    }, }}>
                                    <Typography variant='h5'>
                                        Order Summary
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {transactionByTidDto.Items.length > 0 ? (
                                transactionByTidDto.Items.map((data) => (
                                    <TableRow hover role="checkbox" key={data.tpid}>
                                        <TableCell align="left">
                                            <TransactionRow listData={data} />
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell align="center" colSpan={1}>
                                        <Typography variant="body1">No products found</Typography>
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
            <Box sx={{display: 'flex', flexDirection:
                    'column', justifyContent:'center',
                mt:'8px', ml: '20px',

            }}>
                <Box sx={{display: 'flex', flexDirection: 'column', justifyContent:'center',
                    }}>
                    {/* Fixed row for Total Price */}
                        <Typography variant="h5" pl="24px" mb="24px">
                            Total Price: ${transactionByTidDto.total.toLocaleString()}
                        </Typography>
                </Box>
                <PaymentForm transactionByTidDto={transactionByTidDto}/>
            </Box>
        </Container>
    );
}
