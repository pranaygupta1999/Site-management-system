import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import Activity from './activity'
import AddFab from "../../components/addFab";
import ActivityForm from "./activityForm";
import CustomSnackbar from '../../components/snackbar'
import SERVER_URL from '../../config'
export default class Activities extends Component {
    state = { activities: [], isActivityFormOpen: false, showSnackbar: false, message: "", projectsList: [] }

    toggleActivityFormClose = () => {
        this.setState((prevState) => {
            return { isActivityFormOpen: !prevState.isActivityFormOpen }
        });
    }
    handleActivityFormClose = () => {
        this.setState({ isActivityFormOpen: false });
    }
    handleSnackBarClose = () => {
        this.setState({ showSnackbar: false, message: "" });

    }
    addActivityToDatabase = async (activityBody) => {
        console.log(activityBody);
        const fetchData = await fetch(SERVER_URL + "/api/activities/add", {
            method: "post",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(activityBody)
        });
        if (fetchData.status === 200) {
            this.setState({ showSnackbar: true, message: "Successfully added" });
        }
        else {
            this.setState({ showSnackbar: true, message: "Could not add Activity" });
        }
    }


    async componentDidMount() {
        const data = await fetch("http://localhost:5000/api/activities/getAll");
        const activities = await data.json();
        this.setState({ activities: activities });
    }

    render() {
        return (
            [
                <Grid container spacing={3}>
                    {this.state.activities.length && this.state.activities.map((activity, index) => {
                        return ([<Activity eventKey={index} activity={activity} />, <br />])
                    })}
                </Grid>,
                <AddFab onClick={this.toggleActivityFormClose} />,
                <div>
                    {
                        this.state.isActivityFormOpen ?
                            <ActivityForm open={this.state.isActivityFormOpen} onClose={this.handleActivityFormClose} onSave={this.addActivityToDatabase} />
                            :
                            null
                    }
                </div>,
                <CustomSnackbar open={this.state.showSnackbar} message={this.state.message} onClose={this.handleSnackBarClose} />


            ]
        )

    }
}