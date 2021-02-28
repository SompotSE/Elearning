import React, { Component } from 'react';
import { Container, Image } from 'react-bootstrap'; //Image
import { Row, Carousel } from 'antd';
import { withRouter } from "react-router-dom";
import '../css/Header.css';
import banner1 from '../img/Banner/Course1.png';
import banner2 from '../img/Banner/Course2.png';
import banner3 from '../img/Banner/Course3.png';
import banner4 from '../img/Banner/Course4.png';
import banner5 from '../img/Banner/Course5.png';

// import { withWidth } from '@material-ui/core';
export default withRouter(class Header2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
        }
    }

    render() {
        return (
            <Container fluid>
                    <Carousel autoplay>
                            <Image src={banner1} fluid></Image>
                            <Image src={banner2} fluid></Image>
                            <Image src={banner3} fluid></Image>
                            <Image src={banner4} fluid></Image>
                            <Image src={banner5} fluid></Image>
                    </Carousel>
            </Container>
        )
    }
})