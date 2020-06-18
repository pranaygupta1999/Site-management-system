import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import Project from './project'
import AddFab from "../../components/addFab";
import ProjectForm from "./addProjectForm";
import CustomSnackbar from '../../components/snackbar'
import Spinner from '../../components/spinner'
import ContentLoading from '../../components/contentLoading'
import SERVER_URL from '../../config'

export default class Projects extends Component {
    state = { projects: [], isProjectFormOpen: false, showSnackbar: false, message: "", isUploading: false, isContentLoading: true, editProject: null }

    toggleProjectFormClose = () => {
        this.setState((prevState) => {
            return { isProjectFormOpen: !prevState.isProjectFormOpen }
        });
    }
    handleProjectFormClose = () => {
        this.setState({ isProjectFormOpen: false, editProject: null });
    }
    handleSnackBarClose = () => {
        this.setState({ showSnackbar: false, message: "" });

    }
    handleEdit = (project) => {
        this.toggleProjectFormClose();
        this.setState({ editProject: project });
    }

    //========= API REQUESTS ===============
    addProjectToDatabase = async (projectBody) => {
        this.setState({ isUploading: true })
        const fetchData = await fetch(SERVER_URL + "/api/projects/add", {
            method: "post",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(projectBody)
        });
        this.setState({ isUploading: false })
        if (fetchData.status === 200) {
            this.setState({ showSnackbar: true, message: "Successfully added" });
        }
        else {
            this.setState({ showSnackbar: true, message: "Could not add Project" });
        }
        this.reload();
    }
    deleteProject = async (id) => {
        this.setState({ isUploading: true });
        const fetchData = await fetch("http://localhost:5000/api/projects/delete/" + id, { method: "delete" });
        this.setState({ isUploading: false })
        if (fetchData.status === 200) {
            this.setState({ showSnackbar: true, message: "Successfully deleted" });
        }
        else {
            this.setState({ showSnackbar: true, message: "Could not delete Project" });
        }
        this.reload();
    }
    editProjectInDatabase = async (projectBody) => {
        this.setState({ isUploading: true })
        const fetchData = await fetch(SERVER_URL + "/api/projects/edit", {
            method: "put",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(projectBody)
        });
        this.setState({ isUploading: false })
        if (fetchData.status === 200) {
            this.setState({ showSnackbar: true, message: "Successfully edited" });
        }
        else {
            this.setState({ showSnackbar: true, message: "Could not edit Project" });
        }
        this.reload();
    }
    async reload() {
        this.setState({ isContentLoading: true });
        const data = await fetch("http://localhost:5000/api/projects/getAll");
        const projects = await data.json();
        projects.forEach(project => {
            console.log(project);
            project.startDate = project.startDate.split('T')[0];
            if (project.completionDate)
                project.completionDate = project?.completionDate.split('T')[0];
            if (project.expectedCompletionDate)
                project.expectedCompletionDate = project?.expectedCompletionDate.split('T')[0];
        });
        this.setState({ projects: projects });
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
                                {this.state.projects.length && this.state.projects.map((project, index) => {
                                    return (<Project eventKey={index} project={project} onDelete={this.deleteProject} onEdit={this.handleEdit} />)
                                })}
                            </Grid>
                    }
                </div>,
                <AddFab onClick={this.toggleProjectFormClose} />,
                <div>
                    {
                        this.state.isProjectFormOpen ?
                            <ProjectForm open={this.state.isProjectFormOpen} onClose={this.handleProjectFormClose} onSave={this.addProjectToDatabase} project={this.state.editProject} onEdit={this.editProjectInDatabase} />
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