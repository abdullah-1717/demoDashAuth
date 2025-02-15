"use client";
import React from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
} from '@mui/material';

const Transaction: React.FC = () => {
    return (
        <TableContainer style={{ width: '100%', backgroundColor: '#0c0238', padding: '20px', borderRadius: '8px' }}>
            <h2 style={{ marginBottom: '20px', color: 'white', fontWeight: "bold", fontSize:"20px" }}>Latest Transactions</h2>
            <Table style={{ width: '100%' }}>
                <TableHead>
                    <TableRow>
                        <TableCell style={{ color: 'white', fontWeight: "bold" }}>Status</TableCell>
                        <TableCell style={{ color: 'white', fontWeight: "bold" }}>Date</TableCell>
                        <TableCell style={{ color: 'white', fontWeight: "bold" }}>Amount</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {[
                        { status: 'Paid', date: '24/1/2025', amount: '$100' },
                        { status: 'Pending', date: '21/1/2025', amount: '$120' },
                        { status: 'Cancelled', date: '13/1/2025', amount: '$70' },
                        { status: 'Pending', date: '11/1/2025', amount: '$105' },
                        { status: 'Paid', date: '9/1/2025', amount: '$100' },
                        { status: 'Paid', date: '7/1/2025', amount: '$200' },
                    ].map((transaction, index) => (
                        <TableRow
                            key={index}
                            sx={{ cursor: 'pointer', '&: hover' : {backgroundColor: "#04011b"} }} 
                        >
                            <TableCell style={{ color: 'white' }}>{transaction.status}</TableCell>
                            <TableCell style={{ color: 'white' }}>{transaction.date}</TableCell>
                            <TableCell style={{ color: 'white' }}>{transaction.amount}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default Transaction;