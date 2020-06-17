import React, { Component } from "react";
import { Dialog, DialogTitle, DialogContentText, TextField, Button, DialogActions, DialogContent, MenuItem, Select, InputLabel } from "@material-ui/core";

export default class ActivityForm extends Component {
    constructor(props) {
        super(props);
        console.log("running again")
        if (props.activity) {
            this.state = { activity: { ...this.props.activity }, projectName: "", projectsList: [], projectId: "" };
        }
        else {
            this.state = {
                activity: {
                    name: "",
                    type: "",
                    detail: "",
                    timeFrom: "",
                    timeTo: "",
                    project: ""
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
        const activity = { ...this.state.activity };
        activity[key] = e.target.value
        this.setState({ activity: activity });
    }
    onProjectValueChange = (e) => {
        const projectId = this.state.projectsList[e.target.getAttribute('data-index')]._id;
        this.setState({ projectId: projectId });

    }
    handleOnSubmit = async (e) => {
        e.preventDefault();
        const activitytBody = this.state.activity;
        activitytBody.project = this.state.projectId;
        this.props.onSave(activitytBody);
        this.props.onClose();

    }

    render() {
        return (
            [
                <Dialog open={this.props.open} onClose={this.props.onClose} fullWidth={true} maxWidth="sm">
                    <DialogTitle>
                        Add Activity
                    </DialogTitle>
                    <form onSubmit={this.handleOnSubmit}>
                        <DialogContentText>

                            <DialogContent><TextField fullWidth onChange={this.onValueChange} name="name" label="Name" value={this.state.name} variant="outlined" /></DialogContent>
                            <DialogContent><TextField fullWidth onChange={this.onValueChange} name="type" label="Type" variant="outlined" value={this.state.type} /></DialogContent>
                            <DialogContent><TextField fullWidth onChange={this.onValueChange} name="detail" label="Detail" variant="outlined" multiline rows={4} value={this.state.detail} /></DialogContent>
                            <DialogContent><TextField fullWidth onChange={this.onValueChange} name="timeFrom" label="Start Date" value={this.state.timeFrom} type="datetime-local" InputLabelProps={{ shrink: true }} /></DialogContent>
                            <DialogContent><TextField fullWidth onChange={this.onValueChange} name="timeTo" label="End Time" value={this.state.timeTo} type="datetime-local" InputLabelProps={{ shrink: true }} /></DialogContent>
                            <DialogContent>
                                <InputLabel id="select-label">Select a project</InputLabel>
                                <Select
                                    labelId="select-label"
                                    fullWidth
                                    name="project"
                                    value={this.state.project}
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