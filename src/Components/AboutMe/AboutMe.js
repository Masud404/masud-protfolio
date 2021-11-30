import React from 'react';
import { Col, Container, ProgressBar, Row } from 'react-bootstrap';
import './AboutMe.css'
import photo from '../../images/Masud.png'

const AboutMe = () => {
    return (
        <div className="about-section" id="about">
            <Container>
                <Row>
                    <h1 className="text-light fw-bold">ABOUT Me</h1>
                    <span className="underline"><hr /></span>
                    <Col sm={12} md={3}>
                        <img className="img-fluid" src={photo} alt="" />
                    </Col>
                    <Col sm={12} md={9}>
                        <div className="d-flex justify-content-center align-items-center">
                            <Row className="about-detail">
                                <Col sm={6} md={6}>
                                    <p className="text-light fw-bold mt-5">Hi! I am Md Masud Hossain, React Developer from Khulna,Bangladesh. I have rich experience in Web Application and building and customization, also I am good at Web Design .</p>
                                </Col>
                                <Col sm={6} md={6}>
                                    <h5 className="text-center fw-bold text-warning mb-3">Skills</h5>
                                    <span className="underline"><hr /></span>
                                    <h5 className="fw-bold text-light">HTML</h5>
                                    <ProgressBar variant="Primary" animated now={80} />
                                    <h5 className="fw-bold text-light">CSS</h5>
                                    <ProgressBar variant="danger" animated now={80} />
                                    <h5 className="fw-bold text-light">Bootstrap</h5>
                                    <ProgressBar variant="warning" animated now={75} />
                                    <h5 className="fw-bold text-light">JavaScript</h5>
                                    <ProgressBar variant="info" animated now={50} />
                                    <h5 className="fw-bold text-light">React Js</h5>
                                    <ProgressBar variant="warning" animated now={60} />
                                    <h5 className="fw-bold text-light">Node Js</h5>
                                    <ProgressBar variant="danger" animated now={30} />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutMe;