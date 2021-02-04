import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
// import { Row, Col, Breadcrumb, Progress, Collapse } from 'antd';
// import { HomeOutlined, SnippetsOutlined, RightCircleTwoTone, BorderOutlined } from '@ant-design/icons';
// import { AiFillCheckSquare } from "react-icons/ai";
import axios from 'axios';
import Cookies from 'universal-cookie';
import swal from 'sweetalert';
import '../../css/Course.css';

import { config } from '../../config/config';

const cookies = new Cookies();

const ip = config.ipServer;
const CourseCode = "COURSE1001";


const ExamCodePre = "EXAM10001";

export default class ExamPre extends Component {
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
            token: cookies.get('token_user', { path: '/' }),
            email: cookies.get('email', { path: '/' }),
            header: {
                token: cookies.get('token_user', { path: '/' }),
                key: cookies.get('email', { path: '/' })
            }
        });
    }

    async componentDidMount() {
        var url_exam_pre = ip + "/UserExamination/find/" + CourseCode + "/" + ExamCodePre;
        const exam_pre = await (await axios.get(url_exam_pre, { headers: this.state.header })).data;
        if (!exam_pre?.status) {
              swal("Error!", "เกิดข้อผิดพลาดในการเข้าสู่ระบบ \n กรุณาเข้าสู่ระบบใหม่", "error").then((value) => {
                this.setState({
                  token: cookies.remove('token_user', { path: '/' }),
                  user: cookies.remove('email', { path: '/' })
                });
                window.location.replace('/Login', false);
              });
        } else {
            if(exam_pre.data.length > 0) {
                this.props.history.push("/Course1");
            }
        }
    }

    render() {
        return (
            <Container fluid>
                <dev>test ข้อสอบ</dev>
            </Container>
        );
    }
}