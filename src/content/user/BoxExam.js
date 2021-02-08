import React, { Component } from 'react';
import { Row } from 'antd';
import '../../css/ExamPost.css';

export default class BoxExam extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Row id="head-exam-post">แบบทดสอบหลังเรียน</Row>
        );
    }
}