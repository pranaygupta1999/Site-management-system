import React, { Component } from "react";
import SERVER_URL from "../../config"
import ProjectOverview from "./projectsOverview"
import ExpensesOverview from "./expensesOverview";
export default class Dashboard extends Component {
    state = {
        totalProjectsCount: 0,
        activeProjectsCount: 0,
        completedProjectsCount: 0,
        expenses: []
    }
    async fetchTotalProjects() {
        const res = await fetch(SERVER_URL + '/api/projects/gettotalcount');
        const data = await res.json();
        this.setState({ totalProjectsCount: data.count });
    }
    async fetchActiveProjects() {
        const res = await fetch(SERVER_URL + '/api/projects/getactivecount');
        const data = await res.json();
        this.setState({ activeProjectsCount: data.count });
    }
    async fetchCompletedProjects() {
        const res = await fetch(SERVER_URL + '/api/projects/getcompletedcount');
        const data = await res.json();
        this.setState({ completedProjectsCount: data.count });
    }
    async fetchSortedExpense() {
        const res = await fetch(SERVER_URL + '/api/expenses/getsorted');
        const data = await res.json();
        this.setState({ expenses: data });

    }
    componentDidMount() {
        this.fetchTotalProjects();
        this.fetchCompletedProjects();
        this.fetchActiveProjects();
        this.fetchSortedExpense();
    }
    render() {
        return (
            <React.Fragment>
                {
                    this.state.expenses.length ?
                        <ExpensesOverview data={this.state.expenses} /> :
                        null
                }
                <br/>
                <ProjectOverview totalProjectsCount={this.state.totalProjectsCount} completedProjectsCount={this.state.completedProjectsCount} activeProjectsCount={this.state.activeProjectsCount} />
            </React.Fragment>
        );

    }
}