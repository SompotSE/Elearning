import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Row, Pagination } from 'antd';
// import { HomeOutlined, SnippetsOutlined, RightCircleTwoTone, BorderOutlined } from '@ant-design/icons';
// import { AiFillCheckSquare } from "react-icons/ai";
import { withRouter } from "react-router-dom";
import BoxExam from './BoxExam';
import axios from 'axios';
import Cookies from 'universal-cookie';
import swal from 'sweetalert';
import '../../css/ExamPost.css';

import { config } from '../../config/config';

const cookies = new Cookies();

const ip = config.ipServer;
const CourseCode = "COURSE1001";
const Num = 5;

const ExamCodePost = "EXAM10002";

export default withRouter(class ExamPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: "",
            email: "",
            header: [],
            exam: [],
            current_page: 1
        };

        this.onChangePage = this.onChangePage.bind(this);
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

    render() {
        return (
            <Container fluid>
                <div id="body-exam-post">
                    <Row id="head-exam-post">แบบทดสอบหลังเรียน</Row>
                    <Row>{this.state.exam[this.state.current_page - 1]?.examinationlistText}</Row>
                    <Row>
                        <Pagination
                            current={this.state.current_page}
                            pageSize={1}
                            total={Num}
                            onChange={this.onChangePage}
                        />
                    </Row>
                </div>
            </Container>
        );
    }
})