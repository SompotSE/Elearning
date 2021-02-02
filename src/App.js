import React, { Component } from 'react';
import './App.css';
import { Layout } from 'antd';
import PageHeader from './template/Header';
import PageFooter from './template/Footer';
import PageHeader2 from './template/Header2';
import Routing from "./route";
import { BrowserRouter as Router } from "react-router-dom";

import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const { Header, Content, Footer } = Layout;
var heightContent = "";
export default class App extends Component {
  render() {
    heightContent = (window.innerHeight) + "px";
    return (
      <Router>
        <Layout>
          <Layout className="site-layout" style={{ minHeight: heightContent }}>
             <PageHeader /><PageHeader2/>
              <Content style={{ marginLeft: "6%", marginRight: "6%"}} >
                <Routing />
              </Content>
              <Footer><PageFooter /></Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}
