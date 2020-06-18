import React, { Component } from "react";
import { Dialog, DialogTitle, DialogContentText, TextField, Button, DialogActions, DialogContent, MenuItem, Select, InputLabel } from "@material-ui/core";

export default class ExpenseForm extends Component {
    constructor(props) {
        super(props);
        console.log("running again")
        if (props.expense) {
            this.state = { expense: { ...this.props.expense }, projectName: "", projectsList: [], projectId: "" };
        }
        else {
            this.state = {
                expense: {
                    type: "",
                    detail: "",
                    amount:"",
                    status:"",
                    image:"",
                    project: "",
                    date: "",
                },
                projectName: "",
                projectId: "",
                projectsList: []
            };
        }
    }
    async componentDidMount() {
        const data = await fetch("http://localhost:5000/api/projects/getnames");
        const projectsList = await data.json();
        this.setState({ projectsList: projectsList });
    }
    onValueChange = (e) => {
        const key = e.target.name;
        const expense = { ...this.state.expense };
        expense[key] = e.target.value
        this.setState({ expense: expense });
    }
    onProjectValueChange = (e) => {
        const projectId = this.state.projectsList[e.target.getAttribute('data-index')]._id;
        this.setState({ projectId: projectId });

    }
    handleOnSubmit = async (e) => {
        e.preventDefault();
        const expenseBody = this.state.expense;
        expenseBody.project = this.state.projectId;
        this.props.onSave(expenseBody);
        this.props.onClose();
    }

    render() {
        return (
            [
                <Dialog open={this.props.open} onClose={this.props.onClose} fullWidth={true} maxWidth="sm">
                    <DialogTitle>
                        Add Expense
                    </DialogTitle>
                    <form onSubmit={this.handleOnSubmit}>
                        <DialogContentText>

                            <DialogContent><TextField fullWidth onChange={this.onValueChange} name="type" label="Type" variant="outlined" value={this.state.expense.type} /></DialogContent>
                            <DialogContent><TextField fullWidth onChange={this.onValueChange} name="detail" label="Detail" variant="outlined" multiline rows={4} value={this.state.expense.detail} /></DialogContent>
                            <DialogContent><TextField fullWidth onChange={this.onValueChange} name="amount" label="Amount" variant="outlined"  type="number" value={this.state.expense.amount} /></DialogContent>
                            <DialogContent><TextField fullWidth onChange={this.onValueChange} name="status" label="Status" variant="outlined"  value={this.state.expense.status} /></DialogContent>
                            <DialogContent><TextField fullWidth onChange={this.onValueChange} name="image" label="Mode" variant="outlined"  value={this.state.expense.image} /></DialogContent>
                            <DialogContent><TextField fullWidth onChange={this.onValueChange} name="date" label="Date" value={this.state.expense.date} type="date" InputLabelProps={{ shrink: true }} /></DialogContent>
                            <DialogContent>
                                <InputLabel id="select-label">Select a project</InputLabel>
                                <Select
                                    labelId="select-label"
                                    fullWidth
                                    name="project"
                                    value={this.state.project}
                                    displayEmpty
                                    onChange={this.onValueChange}
                                >
                                    {this.state.projectsList.map((project, index) =>
                                        <MenuItem value={project.name} key={index} data-index={index} onClick={this.onProjectValueChange}>{project.name}</MenuItem>
                                    )}
                                </Select>
                            </DialogContent>
                        </DialogContentText>
                        <DialogActions>
                            <Button onClick={this.props.onClose} color="primary">
                                Cancel
                        </Button>
                            <Button onClick={this.handleOnSubmit} type="submit" color="primary">
                                Save
                        </Button>
                        </DialogActions>
                    </form>
                </Dialog>
            ]

        );
    }
}