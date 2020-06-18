import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Header from './Header'
import Projects from '../Projects/Projects'
import { Container } from "react-bootstrap";
import Activities from "../Activities/Activities";
import Dashboard from "../Dashboard/Dashboard"
import Expenses from "../Expenses/Expenses"
export default class Home extends Component {

    render() {
        return (
            <Router>
                <Header />
                <Container style={{paddingTop:"15px", paddingBottom:"15px"}}>
                <Switch>
                    <Route exact path="/projects">
                        <Projects/>
                    </Route>
                    <Route exact path="/activities">
                        <Activities/>
                    </Route>
                    <Route exact path="/dashboard">
                        <Dashboard/>
                    </Route>
                    <Route exact path="/expenses">
                        <Expenses/>
                    </Route>
                </Switch>

                </Container>
            </Router>
        );
    }
}