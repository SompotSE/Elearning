import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col } from 'antd';
import '../../css/Adminstatistic.css';
import { BsClipboardData } from "react-icons/bs";
import { UserOutlined } from '@ant-design/icons';
import { VscBook } from "react-icons/vsc";
import axios from 'axios';
import Cookies from 'universal-cookie';
import swal from 'sweetalert';
import Chart from 'react-apexcharts'
import { config } from '../../config/config';

const cookies = new Cookies();

const ip = config.ipServer;

export default class AdminTopScore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: "",
            email: "",
            header: [],
            viwe: [],
            statuslode: false,
            options: {},
            series: [44, 55 ],
            
            labels: ['A', 'B' ]
        }
    }


    componentWillMount() {
        this.setState({
            token: cookies.get('token_user', { path: '/' }),
            email: cookies.get('email', { path: '/' }),
            header: {
                token: cookies.get('token_user', { path: '/' }),
                key: cookies.get('email', { path: '/' })
            }
        });
    }

    async componentDidMount() {
        var url_viwe = ip + "/User/Admin/User/Viwe";
        const viwe = await (await axios.get(url_viwe, { headers: this.state.header })).data;
        if (!viwe?.status) {
            swal("Error!", "เกิดข้อผิดพลาดในการเข้าสู่ระบบ \n กรุณาเข้าสู่ระบบใหม่", "error").then((value) => {
                this.setState({
                    token: cookies.remove('token_user', { path: '/' }),
                    user: cookies.remove('user', { path: '/' }),
                    email: cookies.remove('email', { path: '/' })
                });
                window.location.replace('/Login', false);
            });
        } else {
            console.log(viwe.data, " viwe.data")
            this.setState({
                viwe: viwe.data,
                statuslode: true
            });
        }
    }

    render() {
        return (
            <Container id="bg-AdminStatistic" fluid>
                <Row id="row-chart">
                    <Col md={24} xl={11}>
                        <Row>
                        <Col md={24} xl={24} id="header-chart-col">หลักสูตรที่1</Col>
                        <Col md={24} xl={24} id="chart-col">
                            <Chart 
                                options={this.state.options} 
                                series={this.state.series} 
                                type="donut" 
                                width="400" 
                                apexcharts-legend={null}/>
                        </Col> 
                        </Row>  
                    </Col>
                    <Col md={24} xl={11}>
                        <Row>
                        <Col md={24} xl={24} id="header-chart-col">หลักสูตรที่2</Col>
                        <Col md={24} xl={24} id="chart-col">
                            <Chart 
                                options={this.state.options} 
                                series={this.state.series} 
                                type="donut" 
                                width="400" 
                                apexcharts-legend={null}/>
                        </Col> 
                        </Row>  
                    </Col>
                </Row>
                <Row id="row-chart">
                    <Col md={24} xl={11}>
                        <Row>
                        <Col md={24} xl={24} id="header-chart-col">หลักสูตรที่3</Col>
                        <Col md={24} xl={24} id="chart-col">
                            <Chart 
                                options={this.state.options} 
                                series={this.state.series} 
                                type="donut" 
                                width="400" 
                                apexcharts-legend={null}/>
                        </Col> 
                        </Row>  
                    </Col>
                    <Col md={24} xl={11}>
                        <Row>
                        <Col md={24} xl={24} id="header-chart-col">หลักสูตรที่4</Col>
                        <Col md={24} xl={24} id="chart-col">
                            <Chart 
                                options={this.state.options} 
                                series={this.state.series} 
                                type="donut" 
                                width="400" 
                                apexcharts-legend={null}/>
                        </Col> 
                        </Row>  
                    </Col>
                </Row>
                <Row id="row-chart">
                    <Col md={24} xl={11}>
                        <Row>
                        <Col md={24} xl={24} id="header-chart-col">หลักสูตรที่3</Col>
                        <Col md={24} xl={24} id="chart-col">
                            <Chart 
                                options={this.state.options} 
                                series={this.state.series} 
                                type="donut" 
                                width="400" 
                                apexcharts-legend={null}/>
                        </Col> 
                        </Row>  
                    </Col>
                </Row>
                <Row id="row-statistic">
                    <Col md={7} xl={5} id="col-statictic">
                        <Row>
                            <Col md={10} xl={10} id="statistic-number">{this.state.viwe?.userall}</Col>
                            <Col md={10} xl={10} id="icon-statistic"><BsClipboardData id="statistic-icon" /></Col>
                        </Row>
                        <Col md={24} xl={24} id="statistic-detail">จำนวนผู้ลงทะเบียน</Col>
                    </Col>
                    <Col md={7} xl={5} id="col-statictic">
                        <Row>
                            <Col md={10} xl={10} id="statistic-number">{this.state.viwe?.courseuser}</Col>
                            <Col md={10} xl={10} id="icon-statistic"><UserOutlined id="statistic-icon" /></Col>
                        </Row>
                        <Col md={24} xl={24} id="statistic-detail">จำนวนผู้ใช้งานหลักสูตรทั้งหมด</Col>
                    </Col>
                    <Col md={7} xl={5} id="col-statictic">
                        <Row>
                            <Col md={10} xl={10} id="statistic-number">{this.state.viwe?.course1}</Col>
                            <Col md={10} xl={10} id="icon-statistic"><VscBook id="statistic-icon" /></Col>
                        </Row>
                        <Col md={24} xl={24} id="statistic-detail">จำนวนผู้ใช้งานหลักสูตร 1</Col>
                    </Col>
                    <Col md={7} xl={5} id="col-statictic">
                        <Row>
                            <Col md={10} xl={10} id="statistic-number">{this.state.viwe?.course2}</Col>
                            <Col md={10} xl={10} id="icon-statistic"><VscBook id="statistic-icon" /></Col>
                        </Row>
                        <Col md={24} xl={24} id="statistic-detail">จำนวนผู้ใช้งานหลักสูตร 2</Col>
                    </Col>
                </Row>
                <Row id="row-statistic">
                    <Col md={7} xl={5} id="col-statictic">
                        <Row>
                            <Col md={10} xl={10} id="statistic-number">{this.state.viwe?.course3}</Col>
                            <Col md={10} xl={10} id="icon-statistic"><VscBook id="statistic-icon" /></Col>
                        </Row>
                        <Col md={24} xl={24} id="statistic-detail">จำนวนผู้ใช้งานหลักสูตร 3</Col>
                    </Col>
                    <Col md={7} xl={5} id="col-statictic">
                        <Row>
                            <Col md={10} xl={10} id="statistic-number">{this.state.viwe?.course4}</Col>
                            <Col md={10} xl={10} id="icon-statistic"><VscBook id="statistic-icon" /></Col>
                        </Row>
                        <Col md={24} xl={24} id="statistic-detail">จำนวนผู้ใช้งานหลักสูตร 4</Col>
                    </Col>
                    <Col md={7} xl={5} id="col-statictic">
                        <Row>
                            <Col md={10} xl={10} id="statistic-number">{this.state.viwe?.course5}</Col>
                            <Col md={10} xl={10} id="icon-statistic"><VscBook id="statistic-icon" /></Col>
                        </Row>
                        <Col md={24} xl={24} id="statistic-detail">จำนวนผู้ใช้งานหลักสูตร 5</Col>
                    </Col>
                    <Col md={7} xl={6} id="col-statictic">
                        <Row>
                            <Col md={10} xl={10} id="statistic-number">1200</Col>
                            <Col md={10} xl={10} id="icon-statistic"><UserOutlined id="statistic-icon" /></Col>
                        </Row>
                        <Col md={24} xl={24} id="statistic-detail">จำนวนผู้ใช้งานครบหลักสูตรและผ่านการทดสอบ</Col>
                    </Col>
                </Row>
            </Container>
        )
    }

}