import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from "../content/Home";
import Register from "../content/Register"
import Login from "../content/Login"

import Course1 from "../content/user/Course1";
import HomeUser from "../content/user/HomeUser";
export default class Index extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />

                <Route exact path="/Course1" component={Course1} />
                <Route exact path="/HomeUser" component={HomeUser} />
                <Route exact path="/Register" component={Register} />
                <Route exact path="/Login" component={Login} />
            </Switch>
        );
    }
}