import React, { Component } from "react";
import Cookies from 'universal-cookie';
import { Spin } from 'antd';

const cookies = new Cookies();

export default class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: "",
            email: "",
            user: []
        };
    }

    componentWillMount() {
        this.setState({
            token: cookies.remove('token_user', { path: '/' }),
            user: cookies.remove('user', { path: '/' }),
            email: cookies.remove('email', { path: '/' })
        });
        window.location.replace('/Home', false); 
      }

    render() {
        return (
            <div className="content">
                <Spin />
            </div>
        );
    }
}