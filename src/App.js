import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import User from './components/users/User';
import NotFound from "./components/pages/NotFound";

import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

class App extends Component {

    state = {
        loading: false,
        users: [],
        user: {},
        repos: [],
        alert: null
    };

    async componentDidMount() {
        this.setState({loading: true});
        const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        this.setState({users: res.data, loading: false});
    }

    render() {

        return (
            <GithubState>
                <AlertState>
                <Router>
                    <div className='App'>
                        <Navbar/>
                        <div className="container mt-3">
                            <Alert/>
                            <Switch>
                                {/*Home Page*/}
                                <Route exact path="/" component={Home}/>
                                {/*About Page*/}
                                <Route exact path="/about" component={About}/>
                                {/*User Details Page*/}
                                <Route exact path="/user/:login" component={User}/>
                                {/*Not Found Page*/}
                                <Route component={NotFound}/>
                            </Switch>

                        </div>
                    </div>
                </Router>
                </AlertState>
            </GithubState>
        );
    }
}

export default App;