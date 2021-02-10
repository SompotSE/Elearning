import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from "../content/Home";
import Register from "../content/Register"
import Login from "../content/Login"
import Logout from "../content/Logout"
import ForgetPass from "../content/ForgetPass";
import ChangePass from "../content/ChangePass";
import Form from "../content/Form";

import Course1 from "../content/user/Course1";
import HomeUser from "../content/user/HomeUser";
import ExamPre from "../content/user/ExamPre";
import ExamPost from "../content/user/ExamPost";

import AdminHome from "../content/Admin/AdminHome";
import AdminTopScore from "../content/Admin/AdminTopScore";

export default class Index extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />

                <Route exact path="/HomeUser" component={HomeUser} />
                <Route exact path="/Course1" component={Course1} />
                <Route exact path="/ExamPre" component={ExamPre} />
                <Route exact path="/ExamPost" component={ExamPost} />
                <Route exact path="/ChangePass" component={ChangePass} />
                <Route exact path="/Form" component={Form} />

                <Route exact path="/Register" component={Register} />
                <Route exact path="/Login" component={Login} />
                <Route exact path="/ForgetPass" component={ForgetPass} />
                <Route exact path="/Logout" component={Logout} />

                <Route exact path="/Admin/Home" component={AdminHome} />
                <Route exact path="/Admin/TopScore" component={AdminTopScore} />
                
            </Switch>
        );
    }
}