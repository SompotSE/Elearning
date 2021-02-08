import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col, Pagination, Radio, Button } from 'antd';
// import { HomeOutlined, SnippetsOutlined, RightCircleTwoTone, BorderOutlined } from '@ant-design/icons';
// import { AiFillCheckSquare } from "react-icons/ai";
import { withRouter } from "react-router-dom";
import BoxExam from './BoxExam';
import axios from 'axios';
import Cookies from 'universal-cookie';
import swal from 'sweetalert';
import '../../css/ExamPost.css';
// import renderHTML from 'react-render-html';

import { config } from '../../config/config';

const cookies = new Cookies();

const ip = config.ipServer;
const CourseCode = "COURSE1001";
const Num = 10;

const ExamCodePost = "EXAM10002";

export default withRouter(class ExamPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: "",
            email: "",
            header: [],
            exam: [],
            current_page: 1,
            countAns: 0
        };

        this.onChangePage = this.onChangePage.bind(this);
        this.onChangeAns = this.onChangeAns.bind(this);
        this.onSendExam = this.onSendExam.bind(this);
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
        var url_exam_post = ip + "/UserExamination/find/" + CourseCode + "/" + ExamCodePost;
        const exam_post = await (await axios.get(url_exam_post, { headers: this.state.header })).data;
        if (!exam_post?.status) {
            swal("Error!", "เกิดข้อผิดพลาดในการเข้าสู่ระบบ \n กรุณาเข้าสู่ระบบใหม่", "error").then((value) => {
                this.setState({
                    token: cookies.remove('token_user', { path: '/' }),
                    user: cookies.remove('email', { path: '/' })
                });
                window.location.replace('/Login', false);
            });
        } else {
            if (exam_post.data.length >= 3) {
                swal("Warning!", "จำนวนครั้งในการทำข้อสอบครบแล้ว", "warning").then((value) => {
                    this.props.history.push("/Course1");
                });
            }
        }

        var url_exam = ip + "/Examination/ExamPost/" + CourseCode + "/" + Num;
        const exam = await (await axios.get(url_exam, { headers: this.state.header })).data;
        if (!exam?.status) {
            swal("Error!", "เกิดข้อผิดพลาดในการเข้าสู่ระบบ \n กรุณาเข้าสู่ระบบใหม่", "error").then((value) => {
                this.setState({
                    token: cookies.remove('token_user', { path: '/' }),
                    user: cookies.remove('email', { path: '/' })
                });
                window.location.replace('/Login', false);
            });
        } else {
            this.setState({
                exam: exam.data
            })
        }
    }

    list_exam() {
        return this.state.exam.map((exam, key) => {
            console.log(key, " key");
            return <BoxExam exam={exam} />
        });
    }

    onChangePage(page) {
        this.setState({
            current_page: page
        });
    }

    onChangeAns(e) {
        const exam = this.state.exam[this.state.current_page - 1];
        exam.answer = e.target.value;
        this.setState({
            countAns: this.state.countAns + 1
        })
    }

    async onSendExam() {
        const answer = await this.state.exam?.filter((item) => item.answer === "");
        if(answer.length > 0) {
            swal("Warning!", "กรุณาทำข้อสอบให้ครบ", "warning").then((value) => {
            });
        } else {
            swal("Warning!", "ยืนยันการส่งข้อสอบหรือไม่", "warning").then((value) => {
                console.log(value, " value")
            });
        }
        console.log(answer, " exam")
    }

    render() {
        return (
            <Container fluid>
                <div id="body-exam-post">
                    <Row id="head-exam-post">แบบทดสอบหลังเรียน</Row>
                    <Row id="box-exam">
                        <Col xs={12} md={12} xl={12}> {this.state.exam[this.state.current_page - 1]?.examinationlistText} </Col>
                        <Col xs={12} md={12} xl={12}>
                            <Radio.Group onChange={this.onChangeAns} value={this.state.exam[this.state.current_page - 1]?.answer}>
                                {
                                    this.state.exam[this.state.current_page - 1]?.answerlist.map((anslist, i) => {
                                        return <Col xs={24} md={24} xl={24}><Radio value={anslist.answerlistCode}>{anslist.answerlistText}</Radio></Col>
                                    })
                                }
                            </Radio.Group>
                        </Col>
                    </Row>
                    <Row id="pagination">
                        <Col xs={22} md={22} xl={22}>
                            <Pagination
                                current={this.state.current_page}
                                pageSize={1}
                                responsive={true}
                                total={Num}
                                onChange={this.onChangePage}
                            />
                        </Col>
                        <Col xs={2} md={2} xl={2}>
                            <Button disabled={this.state.current_page === Num ? false : true} onClick={this.onSendExam}>ส่งแบบทดสอบ</Button>
                        </Col>
                    </Row>
                </div>
            </Container>
        );
    }
})