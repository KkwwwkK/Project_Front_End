import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Container, Divider} from "@mui/material";
import Typography from "@mui/material/Typography";
import PaymentForm from "./PaymentForm.tsx";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TransactionRow from "./TransactionRow.tsx";



interface Data {
    name: string;
}

function createData(name: string): Data {
    return { name };
}

const rows = [
    createData('India'),
    createData('China'),
    createData('Italy'),
    createData('United States'),
    createData('Canada'),
    createData('Australia'),
    createData('Germany'),
    createData('Ireland'),
    createData('Mexico'),
    createData('Japan'),
    createData('France'),
    createData('United Kingdom'),
    // createData('Russia'),
    // createData('Nigeria'),
    // createData('Brazil'),
];

export default function Transaction() {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);


    return (
        <Container sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center'
        }}>
            <Paper sx={{
                display: 'flex',
                width: '80vw',
                }}>
                <TableContainer sx={{ maxHeight: 585 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" colSpan={1}>
                                    <Typography variant='h5'>
                                        Order Summary
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                            <TableCell align="left">
                                                <TransactionRow/>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent:'center', ml: '20px'}}>
                <Box sx={{display: 'flex', flexDirection: 'column', justifyContent:'center'}}>
                    {/* Fixed row for Total Price */}
                        <Typography variant="h5" pl="24px" mb="24px">
                            Total Price: $xxx {/* Replace $xxx with actual total price */}
                        </Typography>
                </Box>
                <PaymentForm/>
            </Box>
        </Container>
    );
}
