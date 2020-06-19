import React, { Component } from "react";
import { Dialog, DialogTitle, DialogContentText, TextField, Button, DialogActions, DialogContent, MenuItem, Select, InputLabel } from "@material-ui/core";
import SERVER_URL from '../../config'
export default class ActivityForm extends Component {
    constructor(props) {
        super(props);
        if (props.activity) {
            this.state = { activity: { ...this.props.activity }, projectsList: [], projectId: "", projectName: this.props.activity.project.name };
            this.onSaveClickHandler = this.props.onEdit;
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
        const activity = { ...this.state.activity };
        activity[key] = e.target.value
        this.setState({ activity: activity });
    }
    onProjectValueChange = (e) => {
        let project = this.state.projectsList[e.target.getAttribute('data-index')]
        const projectId = project._id;
        this.setState({ projectId: projectId, projectName: project.name });

    }
    handleOnSubmit = async (e) => {
        e.preventDefault();
        const activitytBody = this.state.activity;
        activitytBody.project = this.state.projectId || this.state.activity.project._id;
        this.onSaveClickHandler(activitytBody);
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

                            <DialogContent><TextField required fullWidth onChange={this.onValueChange} name="name" label="Name" value={this.state.activity.name} variant="outlined" /></DialogContent>
                            <DialogContent><TextField required fullWidth onChange={this.onValueChange} name="type" label="Type" variant="outlined" value={this.state.activity.type} /></DialogContent>
                            <DialogContent><TextField fullWidth onChange={this.onValueChange} name="detail" label="Detail" variant="outlined" multiline rows={4} value={this.state.activity.detail} /></DialogContent>
                            <DialogContent><TextField required fullWidth onChange={this.onValueChange} name="timeFrom" label="Start Date" value={this.state.activity.timeFrom} type="date" InputLabelProps={{ shrink: true }} /></DialogContent>
                            <DialogContent><TextField required fullWidth onChange={this.onValueChange} name="timeTo" label="End Time" value={this.state.activity.timeTo} type="date" InputLabelProps={{ shrink: true }} /></DialogContent>
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