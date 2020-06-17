import React, { Component } from "react";
import { Dialog, DialogTitle, DialogContentText, TextField, Button, DialogActions, DialogContent } from "@material-ui/core";

export default class ProjectForm extends Component {
    constructor(props) {
        super(props);
        console.log("running again")
        if (props.project) {
            this.state = { project: { ...this.props.project } };
        }
        else {
            this.state = {
                project: {
                    name: "",
                    address: "",
                    startDate: "",
                    completionDate: "",
                    expectedCompletionDate: ""
                },
            };
        }
    }
    onValueChange = (e) => {
        const key = e.target.name;
        const project = { ...this.state.project };
        project[key] = e.target.value
        this.setState({ project: project });
    }
    handleOnSubmit = async (e) => {
        e.preventDefault();
        const projectBody = this.state.project
        this.props.onSave(projectBody);
        this.props.onClose();

    }

    render() {
        return (
            [
                <Dialog open={this.props.open} onClose={this.props.onClose} fullWidth={true} maxWidth="sm">
                    <DialogTitle>
                        Add Project- {this.state.submitted}
                    </DialogTitle>
                    <form onSubmit={this.handleOnSubmit}>
                        <DialogContentText>

                            <DialogContent><TextField fullWidth onChange={this.onValueChange} name="name" label="Name" value={this.state.name} variant="outlined" /></DialogContent>
                            <DialogContent><TextField fullWidth onChange={this.onValueChange} name="address" label="Address" variant="outlined" multiline rows={4} value={this.state.address} /></DialogContent>
                            <DialogContent><TextField fullWidth onChange={this.onValueChange} name="startDate" label="Start Date" value={this.state.startDate} type="date" InputLabelProps={{ shrink: true }} /></DialogContent>
                            <DialogContent><TextField fullWidth onChange={this.onValueChange} name="completionDate" label="Completion Date" value={this.state.completionDate} type="date" InputLabelProps={{ shrink: true }} /></DialogContent>
                            <DialogContent><TextField fullWidth onChange={this.onValueChange} name="expectedCompletionDate" label="Expected End Date" value={this.state.expectedCompletionDate} type="date" InputLabelProps={{ shrink: true }} /></DialogContent>
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
                </Dialog>,
            ]

        );
    }
}