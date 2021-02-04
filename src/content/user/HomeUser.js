import React, { Component } from 'react';
import { Container, Image } from 'react-bootstrap';
import { Row, Col, Progress } from 'antd';
// import axios from 'axios';
import Cookies from 'universal-cookie';
import '../../css/Course.css';
import vdoclip from '../../img/vdoclip.png';

import course1 from '../../img/course1.png';
import course2 from '../../img/course2.png';
import course3 from '../../img/course3.png';
import course4 from '../../img/course4.png';
import course5 from '../../img/course5.png';

import incourse1 from '../../img/incourse1.svg';
import incourse2 from '../../img/incourse2.svg';

const cookies = new Cookies();

export default class HomeUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: "",
            email: "",
            header: []
        };
    }

    componentWillMount() {
        this.setState({
            token: cookies.get('token_user', { path: '/Admin/' }),
            email: cookies.get('email', { path: '/Admin/' }),
            header: {
                token: cookies.get('token_user', { path: '/Admin/' }),
                email: cookies.get('email', { path: '/Admin/' })
            }
        });
    }

    async componentDidMount() {
        // var url_new = ip + "/UserCourse/find";
        // const newP = await (await axios.get(url_new, { headers: { "token": this.state.token, "key": this.state.user?.username } })).data;
        // if ((newP?.statusCode === 500) || (newP?.statusCode === 400)) {
        //   swal("Error!", "เกิดข้อผิดพลาดในการเข้าสู่ระบบ \n กรุณาเข้าสู่ระบบใหม่", "error").then((value) => {
        //     this.setState({
        //       token: cookies.remove('token_key', { path: '/Admin/' }),
        //       user: cookies.remove('user', { path: '/Admin/' })
        //     });
        //     window.location.replace('/Admin/Login', false);
        //   });
        // } else {
        //   this.setState({
        //     newP: newP,
        //   });
        // }
      }

    render() {
        return (
            <Container fluid>
                <Row id="row-header">
                    <Col xs={24} md={12} xl={12} id="video-center">
                        <Image src={vdoclip} fluid></Image>
                    </Col>
                    <Col xs={0} md={2} xl={2} id="video-center">
                    </Col>
                    <Col xs={24} md={10} xl={10}>
                        <Row>ความคืบหน้าการเรียนรู้</Row>
                        <Row><Progress percent={30} strokeWidth={20} /></Row>
                        <Row>
                            <Col xs={6} md={6} xl={6}>หลักสูตรที่ 1</Col>
                            <Col xs={18} md={18} xl={18}><Progress percent={30} /></Col>
                        </Row>
                        <Row>
                            <Col xs={6} md={6} xl={6}>หลักสูตรที่ 2</Col>
                            <Col xs={18} md={18} xl={18}><Progress percent={30} /></Col>
                        </Row>
                        <Row>
                            <Col xs={6} md={6} xl={6}>หลักสูตรที่ 3</Col>
                            <Col xs={18} md={18} xl={18}><Progress percent={30} /></Col>
                        </Row>
                        <Row>
                            <Col xs={6} md={6} xl={6}>หลักสูตรที่ 4</Col>
                            <Col xs={18} md={18} xl={18}><Progress percent={30} /></Col>
                        </Row>
                        <Row>
                            <Col xs={6} md={6} xl={6}>หลักสูตรที่ 5</Col>
                            <Col xs={18} md={18} xl={18}><Progress percent={30} /></Col>
                        </Row>
                    </Col>
                </Row>

                <Row>
                    <Col xs={0} md={2} xl={2} id="course-menu">
                    </Col>
                    <Col xs={12} md={4} xl={4} id="course-menu">
                        <Row id="course-menu">
                            <Image src={course1} id="img-course" fluid></Image>
                        </Row>
                        <Row id="course-menu">
                            <Image src={incourse2} fluid id="img-play"></Image>
                            <Image src={incourse1} fluid id="img-button"></Image>
                        </Row>
                    </Col>
                    <Col xs={12} md={4} xl={4} id="course-menu">
                        <Row id="course-menu">
                            <Image src={course2} id="img-course" fluid></Image>
                        </Row>
                        <Row id="course-menu">
                            <Image src={incourse2} fluid id="img-play"></Image>
                            <Image src={incourse1} fluid id="img-button"></Image>
                        </Row>
                    </Col>
                    <Col xs={12} md={4} xl={4} id="course-menu">
                        <Row id="course-menu">
                            <Image src={course3} id="img-course" fluid></Image>
                        </Row>
                        <Row id="course-menu">
                            <Image src={incourse2} fluid id="img-play"></Image>
                            <Image src={incourse1} fluid id="img-button"></Image>
                        </Row>
                    </Col>
                    <Col xs={12} md={4} xl={4} id="course-menu">
                        <Row id="course-menu">
                            <Image src={course4} id="img-course" fluid></Image>
                        </Row>
                        <Row id="course-menu">
                            <Image src={incourse2} fluid id="img-play"></Image>
                            <Image src={incourse1} fluid id="img-button"></Image>
                        </Row>
                    </Col>
                    <Col xs={12} md={4} xl={4} id="course-menu">
                        <Row id="course-menu">
                            <Image src={course5} id="img-course" fluid></Image>
                        </Row>
                        <Row id="course-menu">
                            <Image src={incourse2} fluid id="img-play"></Image>
                            <Image src={incourse1} fluid id="img-button"></Image>
                        </Row>
                    </Col>
                    <Col xs={0} md={2} xl={2} id="course-menu">
                    </Col>
                </Row>
            </Container>
        );
    }
}