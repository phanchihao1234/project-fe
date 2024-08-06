import React, { useEffect } from 'react'
import "./main.css"


import Slider1 from './slider/Slider1';
import { Col, Container, Row } from 'reactstrap';
import Slider2 from './slider/Slider2';
import Banner from './banner/Banner';
import Section1 from './section/Section1';



export default function Main() {

    return (
        <>
            <Container fluid className=" py-5 mb-5 hero-header">
                <Container className=" py-5">
                    <Row className="g-5 align-items-center">
                        <Col md={12} lg={7} >
                            <h4 className="mb-3 text-secondary">100% Organic Foods</h4>
                            <h1 className="mb-5 display-3 text-primary">Organic Veggies & Fruits Foods</h1>
                        </Col>
                        <Col md={12} lg={5} >
                            <Slider1 />

                        </Col>
                    </Row>
                </Container>
            </Container>

            <Section1 />
            <Banner />

            <div className='test'></div>
            <Container fluid className=" py-5 mb-5">
                <Container className=" py-5">
                    <h1> Trái cây đeii</h1>
                    <Slider2 />
                </Container>
            </Container>
            <div className='test'></div>
        </>
    )
}
