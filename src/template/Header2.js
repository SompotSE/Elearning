import React, { Component } from 'react';
import { Container } from 'react-bootstrap'; //Image
// import { Row } from 'antd';
import { withRouter } from "react-router-dom";
import '../css/Header.css';
// import banner from '../img/banner.png';

export default withRouter(class Header2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
        }
    }

    render() {
        return (
            <Container fluid>
                {/* <Row>
                    <Image src={banner} fluid></Image>
                </Row> */}
            </Container>
        )
    }
})