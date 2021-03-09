import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col, Input, Progress, Pagination, Spin, Empty, Result, AutoComplete } from 'antd';
import '../../css/AdminHome.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';
import swal from 'sweetalert';
import { config } from '../../config/config';
import { EyeTwoTone } from '@ant-design/icons';

const cookies = new Cookies();

const ip = config.ipServer;
// const { Search } = Input;
// const onSearch = value => console.log(value);

export default class AdminHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: "",
            email: "",
            header: [],
            current_page: 1,
            startdetail: 0,
            enddetail: 10,
            useradmin: [],
            useradminall: [],
            statuslode: false,
            options: [
                { value: 'Burns Bay Road' },
                { value: 'Downing Street' },
                { value: 'Wall Street' }
            ]
        }

        this.onChangePage = this.onChangePage.bind(this);
        this.onSearchFild = this.onSearchFild.bind(this);
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
        var url_uaer = ip + "/User/Admin/User/All";
        const user = await (await axios.get(url_uaer, { headers: this.state.header })).data;
        if (!user?.status) {
            swal("Error!", "เกิดข้อผิดพลาดในการเข้าสู่ระบบ \n กรุณาเข้าสู่ระบบใหม่", "error").then((value) => {
                this.setState({
                    token: cookies.remove('token_user', { path: '/' }),
                    user: cookies.remove('user', { path: '/' }),
                    email: cookies.remove('email', { path: '/' })
                });
                window.location.replace('/', false);
            });
        } else {
            this.setState({
                useradmin: user.data,
                useradminall: user.data,
                statuslode: true
            });
        }
    }

    detailPercenTopic(detail) {
        return <>
            <Col md={5} xl={5} id="progress-AdminHome"><Progress type="circle" percent={parseInt(detail[0].percen)} width={55} strokeWidth={13} /></Col>
            <Col md={4} xl={4} id="progress-AdminHome"><Progress type="circle" percent={parseInt(detail[1].percen)} width={55} strokeWidth={13} /></Col>
            <Col md={5} xl={5} id="progress-AdminHome"><Progress type="circle" percent={parseInt(detail[2].percen)} width={55} strokeWidth={13} /></Col>
            <Col md={4} xl={4} id="progress-AdminHome"><Progress type="circle" percent={parseInt(detail[3].percen)} width={55} strokeWidth={13} /></Col>
            <Col md={5} xl={5} id="progress-AdminHome"><Progress type="circle" percent={parseInt(detail[4].percen)} width={55} strokeWidth={13} /></Col>
        </>
    }

    onChangePage(page) {
        this.setState({
            current_page: page,
            startdetail: (page * 10) - 10,
            enddetail: page * 10
        });
    }

    onSearchFild(value) {
        var dataSearch = [];
        dataSearch.splice(0);
        let name = this.state.useradminall.filter(useradmin => useradmin.name.toUpperCase().includes(value.toUpperCase()));
        let company = this.state.useradminall.filter(useradmin => useradmin.nameCompany.toUpperCase().includes(value.toUpperCase()));
        dataSearch.push(...name);
        dataSearch.push(...company);

        const key = 'userId';

        const dataSearchfilter = [...new Map(dataSearch.map(item =>
            [item[key], item])).values()];

        this.setState({
            useradmin: dataSearchfilter
        })
    }

    render() {
        return (
            <Container id="bg-AdminHome" fluid>
                {
                    (window.innerWidth >= 768) ?
                        <>
                            <Row id="row-header-AdminHome">
                                <Col md={12} xl={12} id="Header-AdminHome">ข้อมูลการใช้งานสมาชิก</Col>
                                <Col md={12} xl={12} id="Search-AdminHome">
                                    <AutoComplete
                                        style={{ width: "70%" }}
                                        options={this.state.useradmin}
                                        filterOption={(inputValue, option) =>
                                            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                                        }
                                        mode="tags"
                                        onSearch={this.onSearchFild}
                                        onSelect={this.onSearchFild}
                                    >
                                        <Input.Search style={{ width: '100%' }} placeholder="ค้นหา" onSearch={this.onSearch} />
                                    </AutoComplete>
                                </Col>
                            </Row>
                            <Col md={24} xl={24} id="row-table-AdminHome">
                                <Row>
                                    <Col md={1} xl={1} id="header-table-AdminHome">ลำดับ</Col>
                                    <Col md={5} xl={5} id="header-table-AdminHome">ชื่อ - นามสกุล</Col>
                                    <Col md={6} xl={6} id="header-table-AdminHome">ชื่อบริษัท</Col>
                                    <Col span={10}>
                                        <Col md={24} xl={24} id="header-table-AdminHome1">ความคืบหน้าการใช้งาน</Col>
                                        <Row style={{ display: "flex", justifyContent: "space-between" }}>
                                            <Col md={5} xl={5} id="header-table-AdminHome1">หลักสูตรที่1</Col>
                                            <Col md={4} xl={4} id="header-table-AdminHome1">หลักสูตรที่5</Col>
                                            <Col md={5} xl={5} id="header-table-AdminHome1">หลักสูตรที่3</Col>
                                            <Col md={4} xl={4} id="header-table-AdminHome1">หลักสูตรที่4</Col>
                                            <Col md={5} xl={5} id="header-table-AdminHome1">หลักสูตรที่5</Col>
                                        </Row>
                                    </Col>
                                    <Col md={1} xl={1} id="header-table-AdminHome">เพิ่มเติม</Col>
                                </Row>
                                {
                                    (this.state.statuslode) ?
                                        <>
                                            {
                                                this.state.useradmin.length > 0 ?
                                                    <>
                                                        {
                                                            this.state.useradmin?.slice(this.state.startdetail, this.state.enddetail).map((admin, i) => {
                                                                return <Row>
                                                                    <Col md={1} xl={1} id="user-table-AdminHome">{this.state.startdetail + i + 1}</Col>
                                                                    <Col md={5} xl={5} id="user-table-AdminHome">{admin.name}</Col>
                                                                    <Col md={6} xl={6} id="user-table-AdminHome">{admin.nameCompany}</Col>
                                                                    <Col span={10}>
                                                                        <Col md={24} xl={24} id="user-table-AdminHome"></Col>
                                                                        <Row style={{ display: "flex", justifyContent: "space-between" }}>
                                                                            {this.detailPercenTopic(admin?.detailTop)}
                                                                        </Row>
                                                                    </Col>
                                                                    <Col md={1} xl={1} id="user-table-AdminHome"><NavLink to={"/Admin/Detail/" + admin.userId}><EyeTwoTone id="icon-detail" twoToneColor="#eb2f96" /></NavLink></Col>
                                                                </Row>
                                                            })
                                                        }
                                                    </>
                                                    :
                                                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                                            }
                                        </>
                                        :
                                        <Row id="row-spin-slide">
                                            <Spin size="large" />
                                        </Row>
                                }

                                <Row>
                                    <Pagination
                                        current={this.state.current_page}
                                        pageSize={10}
                                        responsive={true}
                                        total={this.state.useradmin?.length}
                                        onChange={this.onChangePage}
                                    />
                                </Row>

                            </Col>
                        </>
                        :
                        <Result
                            status="error"
                            title="เว็บไซต์ไม่รองรับการแสดงผลในขนาดหน้าจอของคุณ"
                            subTitle="กรุณาใช้งานในอุปกรณ์ที่มีหน้าจอขนาดใหญ่ขึ้น"
                        >
                        </Result>
                }
            </Container>
        );
    }
}