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
                    <Route exact path="/expenses"></Route>
                    <Route exact path="/dashboard"></Route>
                </Switch>

                </Container>
            </Router>
        );
    }
}