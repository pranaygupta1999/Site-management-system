import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import Activity from './activity'
import AddFab from "../../components/addFab";
import ActivityForm from "./activityForm";
import CustomSnackbar from '../../components/snackbar'
import Spinner from '../../components/spinner'
import ContentLoading from '../../components/contentLoading'
import SERVER_URL from '../../config'
export default class Activities extends Component {
    state = { activities: [], isActivityFormOpen: false, showSnackbar: false, message: "", activitiesList: [], isUploading: false, isContentLoading: true, editActivity: null }

    toggleActivityFormClose = () => {
        this.setState((prevState) => {
            return { isActivityFormOpen: !prevState.isActivityFormOpen }
        });
    }
    handleActivityFormClose = () => {
        this.setState({ isActivityFormOpen: false, editActivity: null });
    }
    handleSnackBarClose = () => {
        this.setState({ showSnackbar: false, message: "" });
    }

    handleEdit = (activity) => {
        this.toggleActivityFormClose();
        this.setState({ editActivity: activity });
    }

    // =============== API Requests ===================
    addActivityToDatabase = async (activityBody) => {
        this.setState({ isUploading: true })
        const fetchData = await fetch(SERVER_URL + "/api/activities/add", {
            method: "post",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(activityBody)
        });
        this.setState({ isUploading: false })
        if (fetchData.status === 200) {
            this.setState({ showSnackbar: true, message: "Successfully added" });
        }
        else {
            this.setState({ showSnackbar: true, message: "Could not add Activity" });
        }
        this.reload();
    }

    deleteActivity = async (id) => {
        this.setState({ isUploading: true });
        const fetchData = await fetch("http://localhost:5000/api/activities/delete/" + id, { method: "delete" });
        this.setState({ isUploading: false })
        if (fetchData.status === 200) {
            this.setState({ showSnackbar: true, message: "Successfully deleted" });
        }
        else {
            this.setState({ showSnackbar: true, message: "Could not delete Activity" });
        }
        this.reload();
    }
    editActivityInDatabase = async (activityBody) => {
        this.setState({ isUploading: true })
        const fetchData = await fetch(SERVER_URL + "/api/activities/edit", {
            method: "put",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(activityBody)
        });
        this.setState({ isUploading: false })
        if (fetchData.status === 200) {
            this.setState({ showSnackbar: true, message: "Successfully edited" });
        }
        else {
            this.setState({ showSnackbar: true, message: "Could not edit Activity" });
        }
        this.reload();
    }

    async reload() {
        this.setState({ isContentLoading: true });
        const data = await fetch("http://localhost:5000/api/activities/getAll");
        const activities = await data.json();
        activities.forEach(activity => {
            activity.timeTo = activity.timeTo?.split('T')[0];
            activity.timeFrom = activity.timeFrom?.split('T')[0];
        });

        this.setState({ activities: activities });
        this.setState({ isContentLoading: false });
    }
    componentDidMount() {
        this.reload();
    }

    render() {
        return (
            [
                <div>
                    {
                        this.state.isContentLoading ?
                            <ContentLoading /> :
                            <Grid container spacing={3}>
                                {this.state.activities.length && this.state.activities.map((activity, index) => {
                                    return (<Activity eventKey={index} activity={activity} onDelete={this.deleteActivity} onEdit={this.handleEdit} />)
                                })}
                            </Grid>
                    }
                </div>,
                <AddFab onClick={this.toggleActivityFormClose} />,
                <div>
                    {
                        this.state.isActivityFormOpen ?
                            <ActivityForm open={this.state.isActivityFormOpen} onClose={this.handleActivityFormClose} onSave={this.addActivityToDatabase} onEdit={this.editActivityInDatabase} activity={this.state.editActivity} />
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
            ]
        )

    }
}