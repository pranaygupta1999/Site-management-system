import React from 'react'
import { TableContainer, Table, Paper, TableHead, TableRow, TableBody, TableCell, IconButton } from "@material-ui/core"
import { Delete as DeleteIcon, Edit as EditIcon } from "@material-ui/icons"
export default function Expense(props) {
    return (
        <TableContainer component={Paper}>
            <Table className aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Type</TableCell>
                        <TableCell >Detail</TableCell>
                        <TableCell align="right">Amount</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell >Project</TableCell>
                        <TableCell align="right">Mode</TableCell>
                        <TableCell >Date</TableCell>
                        <TableCell >Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.expenses.map((expense, index) => (
                        <TableRow key={expense._id}>
                            <TableCell component="th" scope="row">
                                {expense.type}
                            </TableCell>
                            <TableCell >{expense.detail}</TableCell>
                            <TableCell align="right">{expense.amount}</TableCell>
                            <TableCell align="right">{expense.status}</TableCell>
                            <TableCell >{expense.project.name}</TableCell>
                            <TableCell align="right">{expense.image}</TableCell>
                            <TableCell >{new Date(expense.date).toDateString()}</TableCell>
                            <TableCell >
                                <IconButton onClick={() => props.onEdit(expense)}><EditIcon /></IconButton>
                                <IconButton color="secondary" onClick={() => props.onDelete(expense._id)}><DeleteIcon /></IconButton>
                            </TableCell>
                        </TableRow>
                    ))
                    }
                </TableBody>
            </Table>
        </TableContainer>

    )
}