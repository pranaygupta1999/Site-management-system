import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import Activity from './activity'
import AddFab from "../../components/addFab";
export default class Activities extends Component {
    state = { activities: [] }
    async componentDidMount() {
        const data = await fetch("http://localhost:5000/api/activities/getAll");
        const activities = await data.json();
        this.setState({ activities: activities })
        console.log(activities, "working here");
    }
    render() {
        return (
            [
                <Grid container spacing={3}>
                    {this.state.activities.length && this.state.activities.map((activity, index) => {
                        return ([<Activity eventKey={index} activity={activity} />, <br />])
                    })}
                </Grid>,
                <AddFab/>
            ]
        )

    }
}