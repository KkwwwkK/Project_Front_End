import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Container } from "@mui/material";



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
    createData('Russia'),
    createData('Nigeria'),
    createData('Brazil'),
];

export default function TransactionRecord() {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);


    return (
        <Container sx={{ width: '50vw' }}>
            <Paper sx={{}}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" colSpan={1}>
                                    Country
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                            <TableCell align="left">{row.name}</TableCell>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Container>
    );
}
