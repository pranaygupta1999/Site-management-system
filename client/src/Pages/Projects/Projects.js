import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import Project from './project'
import AddFab from "../../components/addFab";
import ProjectForm from "./addProjectForm";
import CustomSnackbar from '../../components/snackbar'
import SERVER_URL from '../../config'

export default class Projects extends Component {
    state = { projects: [], isProjectFormOpen: false, showSnackbar: false, message: "" }

    toggleProjectFormClose = () => {
        this.setState((prevState) => {
            return { isProjectFormOpen: !prevState.isProjectFormOpen }
        });
    }
    handleProjectFormClose = () => {
        this.setState({ isProjectFormOpen: false });
    }
    handleSnackBarClose = () => {
        this.setState({ showSnackbar: false, message: "" });

    }
    addProjectToDatabase = async (projectBody) => {
        console.log(projectBody);
        const fetchData = await fetch(SERVER_URL + "/api/projects/add", {
            method: "post",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(projectBody)
        });
        if (fetchData.status === 200) {
            this.setState({ showSnackbar: true, message: "Successfully added" });
        }
        else {
            this.setState({ showSnackbar: true, message: "Could not add Project" });
        }
    }
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
                <AddFab onClick={this.toggleProjectFormClose} />,
                <div>
                    {
                        this.state.isProjectFormOpen ?
                            <ProjectForm open={this.state.isProjectFormOpen} onClose={this.handleProjectFormClose} onSave={this.addProjectToDatabase} />
                            :
                            null
                    }
                </div>,
                <CustomSnackbar open={this.state.showSnackbar} message={this.state.message} onClose={this.handleSnackBarClose} />

            ]

        )

    }
}