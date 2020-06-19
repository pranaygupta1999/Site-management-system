import React, { Component } from "react";
import { Dialog, DialogTitle, DialogContentText, TextField, Button, DialogActions, DialogContent, MenuItem, Select, InputLabel } from "@material-ui/core";
import SERVER_URL from "../../config";

export default class ExpenseForm extends Component {
    constructor(props) {
        super(props);
        console.log("running again")
        if (props.expense) {
            this.state = { expense: { ...this.props.expense }, projectName: this.props.expense.project.name, projectsList: [], projectId: "" };
            this.onSaveClickHandler = this.props.onEdit;
        }
        else {
            this.state = {
                expense: {
                    type: "",
                    detail: "",
                    amount: "",
                    status: "",
                    image: "",
                    project: "",
                    date: "",
                },
                projectName: "",
                projectId: "",
                projectsList: []
            };
            this.onSaveClickHandler = this.props.onSave;
        }
    }
    async componentDidMount() {
        const data = await fetch(SERVER_URL + "/api/projects/getnames");
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
        let project = this.state.projectsList[e.target.getAttribute('data-index')]
        const projectId = project._id;
        console.log(projectId);
        this.setState({ projectId: projectId, projectName: project.name });

    }
    handleOnSubmit = async (e) => {
        e.preventDefault();
        const expenseBody = this.state.expense;
        expenseBody.project = this.state.projectId || this.state.expense.project._id;
        this.onSaveClickHandler(expenseBody);
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

                            <DialogContent><TextField required fullWidth onChange={this.onValueChange} name="type" label="Type" variant="outlined" value={this.state.expense.type} /></DialogContent>
                            <DialogContent><TextField fullWidth onChange={this.onValueChange} name="detail" label="Detail" variant="outlined" multiline rows={4} value={this.state.expense.detail} /></DialogContent>
                            <DialogContent><TextField required fullWidth onChange={this.onValueChange} name="amount" label="Amount" variant="outlined" type="number" value={this.state.expense.amount} /></DialogContent>
                            <DialogContent><TextField required fullWidth onChange={this.onValueChange} name="status" label="Status" variant="outlined" value={this.state.expense.status} /></DialogContent>
                            <DialogContent><TextField required fullWidth onChange={this.onValueChange} name="image" label="Mode" variant="outlined" value={this.state.expense.image} /></DialogContent>
                            <DialogContent><TextField required fullWidth onChange={this.onValueChange} name="date" label="Date" value={this.state.expense.date} type="date" InputLabelProps={{ shrink: true }} /></DialogContent>
                            <DialogContent>
                                <InputLabel id="select-label">Select a project</InputLabel>
                                <Select
                                    required
                                    labelId="select-label"
                                    fullWidth
                                    name="project"
                                    value={this.state.projectName}
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