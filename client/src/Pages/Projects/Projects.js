import React, { Component } from "react";
import { Grid, Modal } from "@material-ui/core";
import Project from './project'
import AddFab from "../../components/addFab";

export default class Projects extends Component {
    state = { projects: [], isProjectFormOpen: false }
    async componentDidMount() {
        const data = await fetch("http://localhost:5000/api/projects/getAll");
        const projects = await data.json();
        this.setState({ projects: projects })
        console.log(projects, "working here");
    }
    render() {
        return (
            [
                <Grid container spacing={3}>
                    {this.state.projects.length && this.state.projects.map((project, index) => {
                        return (<Project eventKey={index} project={project} />)
                    })}

                </Grid>,
                <AddFab />
            ]

        )

    }
}