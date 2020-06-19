import React, { useContext } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import Header from './Header'
import Projects from '../Projects/Projects'
import { Container } from "react-bootstrap";
import Activities from "../Activities/Activities";
import Dashboard from "../Dashboard/Dashboard"
import Expenses from "../Expenses/Expenses"
import { UserContext } from "../../Context/UserContext";
import Login from "../Login/Login"
export default function Home(props) {
    const { loggedIn, setLoggedIn } = useContext(UserContext);
    return (
        <React.Fragment>
            {
                loggedIn ?

                    <Router>
                        <Header onLogout={setLoggedIn} />
                        <Container style={{ paddingTop: "15px", paddingBottom: "15px" }}>
                            <Switch>
                                <Route exact path="/projects">
                                    <Projects />
                                </Route>
                                <Route exact path="/activities">
                                    <Activities />
                                </Route>
                                <Route exact path="/dashboard">
                                    <Dashboard />
                                </Route>
                                <Route exact path="/expenses">
                                    <Expenses />
                                </Route>
                                <Route path="/">
                                    <Redirect to="/dashboard" />
                                </Route>
                            </Switch>

                        </Container>
                    </Router> :
                    <Login />
            }
        </React.Fragment>
    );
}
