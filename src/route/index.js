import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from "../content/Home";
// import Register from "../content/Register"
import Login from "../content/Login"
import Logout from "../content/Logout"
import ForgetPass from "../content/ForgetPass";
import ChangePass from "../content/ChangePass";
import Form from "../content/Form";
import ConfirmRegister from "../content/ConfirmRegister";

import Course1 from "../content/user/Course1";
import Course2 from "../content/user/Course2";
import Course3 from "../content/user/Course3";
import Course4 from "../content/user/Course4";
import Course5 from "../content/user/Course5";
import HomeUser from "../content/user/HomeUser";
import ExamPre from "../content/user/ExamPre";
import ExamPostCourse4 from "../content/user/ExamPostCourse4";

import AdminHome from "../content/Admin/AdminHome";
import AdminTopScore from "../content/Admin/AdminTopScore";
import AdminDetail from "../content/Admin/AdminDetail";
import AdminStatistic from "../content/Admin/Adminstatistic";

export default class Index extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />

                <Route exact path="/HomeUser" component={HomeUser} />
                <Route exact path="/Course1" component={Course1} />
                <Route exact path="/Course2" component={Course2} />
                <Route exact path="/Course3" component={Course3} />
                <Route exact path="/Course4" component={Course4} />
                <Route exact path="/Course5" component={Course5} />
                <Route exact path="/ExamPre" component={ExamPre} />
                <Route exact path="/ExamPostCourse4" component={ExamPostCourse4} />
                <Route exact path="/ChangePass" component={ChangePass} />
                <Route exact path="/Form/:courseCode" component={Form} />
                <Route exact path="/ConfirmRegister/:ConfirmRegisterKey" component={ConfirmRegister} />

                {/* <Route exact path="/Register" component={Register} /> */}
                <Route exact path="/Login" component={Login} />
                <Route exact path="/ForgetPass" component={ForgetPass} />
                <Route exact path="/Logout" component={Logout} />

                <Route exact path="/Admin/Home" component={AdminHome} />
                <Route exact path="/Admin/TopScore" component={AdminTopScore} />
                <Route exact path="/Admin/Detail/:userId" component={AdminDetail} />
                <Route exact path="/Admin/Statistic" component={AdminStatistic} />
                
            </Switch>
        );
    }
}