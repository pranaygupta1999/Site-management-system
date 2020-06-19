import React, { Component } from "react"
import Expense from "./expense";
import ExpenseForm from "./expenseForm"
import AddFab from "../../components/addFab";
import CustomSnackbar from '../../components/snackbar'
import Spinner from '../../components/spinner'
import ContentLoading from '../../components/contentLoading'
import SERVER_URL from '../../config'

export default class Expenses extends Component {
    state = { expenses: [], isExpenseFormOpen: false, showSnackbar: false, message: "", isUploading: false, isContentLoading: true, editExpense: null }

    toggleExpenseFormClose = () => {
        this.setState((prevState) => {
            return { isExpenseFormOpen: !prevState.isExpenseFormOpen }
        });
    }
    handleExpenseFormClose = () => {
        this.setState({ isExpenseFormOpen: false });
    }
    handleSnackBarClose = () => {
        this.setState({ showSnackbar: false, message: "" });

    }
    handleEdit = (expense) => {
        this.toggleExpenseFormClose();
        this.setState({ editExpense: expense });
    }

    //========= API REQUESTS ===============
    addExpenseToDatabase = async (projectBody) => {
        this.setState({ isUploading: true })
        const fetchData = await fetch(SERVER_URL + "/api/expenses/add", {
            method: "post",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(projectBody)
        });
        this.setState({ isUploading: false })
        if (fetchData.status === 200) {
            this.setState({ showSnackbar: true, message: "Successfully added" });
        }
        else {
            this.setState({ showSnackbar: true, message: "Could not add Expense" });
        }
        this.reload();
    }
    deleteExpense = async (id) => {
        this.setState({ isUploading: true });
        const fetchData = await fetch(SERVER_URL + "/api/expenses/delete/" + id, { method: "delete" });
        this.setState({ isUploading: false })
        if (fetchData.status === 200) {
            this.setState({ showSnackbar: true, message: "Successfully deleted" });
        }
        else {
            this.setState({ showSnackbar: true, message: "Could not delete Expense" });
        }
        this.reload();
    }
    editExpenseInDatabase = async (expenseBody) => {
        this.setState({ isUploading: true })
        const fetchData = await fetch(SERVER_URL + "/api/expenses/edit", {
            method: "put",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(expenseBody)
        });
        this.setState({ isUploading: false })
        if (fetchData.status === 200) {
            this.setState({ showSnackbar: true, message: "Successfully edited" });
        }
        else {
            this.setState({ showSnackbar: true, message: "Could not edit Expense" });
        }
        this.reload();
    }
    async reload() {
        this.setState({ isContentLoading: true });
        const data = await fetch(SERVER_URL + "/api/expenses/getAll");
        const expenses = await data.json();
        expenses.forEach(expense => {
            expense.date = expense.date?.split('T')[0];
        });
        this.setState({ expenses: expenses });
        this.setState({ isContentLoading: false });
    }

    componentDidMount() {
        this.reload();
    }
    render() {
        return ([
            < div >
                {
                    this.state.isContentLoading ?
                        <ContentLoading /> :
                        <Expense expenses={this.state.expenses} onDelete={this.deleteExpense} onEdit={this.handleEdit} />
                }
            </div >,
            <AddFab onClick={this.toggleExpenseFormClose} />,
            <div>
                {
                    this.state.isExpenseFormOpen ?
                        <ExpenseForm open={this.state.isExpenseFormOpen} onClose={this.handleExpenseFormClose} onSave={this.addExpenseToDatabase} onEdit={this.editExpenseInDatabase} expense={this.state.editExpense} />
                        :
                        null
                }
            </div>,
            <CustomSnackbar open={this.state.showSnackbar} message={this.state.message} onClose={this.handleSnackBarClose} />,
            <div>
                {
                    this.state.isUploading ?
                        <Spinner /> : null
                }
            </div>
        ]);
    }
}