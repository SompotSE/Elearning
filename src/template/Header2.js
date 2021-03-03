import React, { Component } from 'react';
import { Container, Image } from 'react-bootstrap'; //Image
import { Carousel } from 'antd';
import { withRouter } from "react-router-dom";
import '../css/Header.css';
import banner1 from '../img/Banner/Course1.jpg';
import banner2 from '../img/Banner/Course2.jpg';
import banner3 from '../img/Banner/Course3.jpg';
import banner4 from '../img/Banner/Course4.jpg';
import banner5 from '../img/Banner/Course5.jpg';
import { NavLink } from 'react-router-dom';

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
                            <NavLink to="/Course4"><Image src={banner4} fluid></Image></NavLink>
                            <Image src={banner5} fluid></Image>
                    </Carousel>
            </Container>
        )
    }
})