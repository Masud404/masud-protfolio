import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Project.css'
import image1 from '../../images/Screenshot_19.png'
import image2 from '../../images/Screenshot_20.png'
import image3 from '../../images/Screenshot_21.png'
import image4 from '../../images/Screenshot_22.png'
import image5 from '../../images/Screenshot_23.png'
import image6 from '../../images/Screenshot_24.png'
import { Link } from 'react-router-dom';

const Project = () => {
    return (
        <div id="project">
            <Container>
                <h1 className="text-light fw-bold mb-4">My PROJECT</h1>
                <span className="underline"><hr /></span>
                {/* projects */}
                <div className="mt-5">
                    <Row xs={1} md={3} className="g-4 project">
                        <Col>
                            <Card className="project-card">
                                <Card.Img variant="top" src={image1} />
                                <Card.Body>
                                    <Card.Title className="fw-bold">MEDICO</Card.Title>
                                    <Card.Text>
                                        <h5>Medical Health Related Website built With React Js.</h5>
                                    </Card.Text>
                                    <Card.Text>

                                        <p className="card-text">
                                            <span className="project-language px-2 py-1 rounded me-2">React js</span>
                                            <span className="project-language px-2 py-1 rounded me-2">Bootstrap</span>
                                            <span className="project-language px-2 py-1 rounded me-2">Firebase</span>
                                            <span className="project-language px-2 py-1 rounded me-2">React-Router</span>
                                        </p>
                                    </Card.Text>
                                    <a href="https://healthcare-related-websi-ce7dc.web.app/" target="_blank"><button className="button"><i class="fas fa-globe"></i> Live Site</button></a>
                                    <a href="https://github.com/Masud404/healthcare-website" target="_blank"><button className="button ms-4"><i class="fab fa-github"></i> Github Link</button></a>
                                </Card.Body>
                                <button className="details-btn">Details</button>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="project-card">
                                <Card.Img variant="top" src={image2} />
                                <Card.Body>
                                    <Card.Title className="fw-bold">VaCaDAY</Card.Title>
                                    <Card.Text>
                                        <h5>Vacational Related Website built With FullStack.</h5>
                                    </Card.Text>
                                    <Card.Text>

                                        <p className="card-text">
                                            <span className="project-language px-2 py-1 rounded me-2">React js</span>
                                            <span className="project-language px-2 py-1 rounded me-2">Bootstrap</span>
                                            <span className="project-language px-2 py-1 rounded me-2">Firebase</span>
                                            <span className="project-language px-2 py-1 rounded me-2">React-Router</span>
                                            <span className="project-language px-2 py-1 rounded me-2">Node js</span>
                                            <span className="project-language px-2 py-1 rounded me-2">Express</span>
                                            <span className="project-language px-2 py-1 rounded me-2">MongoDB</span>
                                        </p>
                                    </Card.Text>
                                    <a href="https://tourism-or-delivery-webs-f014e.web.app/" target="_blank"><button className="button"><i class="fas fa-globe"></i> Live Site</button></a>
                                    <a href="https://github.com/Masud404/tourism-website-client" target="_blank"><button className="button ms-4"><i class="fab fa-github"></i> Github Client Link</button></a>
                                    <a href="https://github.com/Masud404/tourism-website-server" target="_blank"><button className="button mt-3"><i class="fab fa-github"></i> Github Server Link</button></a>
                                </Card.Body>
                                <button className="details-btn">Details</button>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="project-card">
                                <Card.Img variant="top" src={image3} />
                                <Card.Body>
                                    <Card.Title className="fw-bold">ROTORS</Card.Title>
                                    <Card.Text>
                                        <h5>Car Related Website built With FullStack.</h5>
                                    </Card.Text>
                                    <Card.Text>

                                        <p className="card-text">
                                            <span className="project-language px-2 py-1 rounded me-2">React js</span>
                                            <span className="project-language px-2 py-1 rounded me-2">Bootstrap</span>
                                            <span className="project-language px-2 py-1 rounded me-2">Firebase</span>
                                            <span className="project-language px-2 py-1 rounded me-2">React-Router</span>
                                            <span className="project-language px-2 py-1 rounded me-2">Node js</span>
                                            <span className="project-language px-2 py-1 rounded me-2">Express</span>
                                            <span className="project-language px-2 py-1 rounded me-2">MongoDB</span>
                                        </p>
                                    </Card.Text>
                                    <a href="https://car-website-e4ba6.web.app/" target="_blank"><button className="button"><i class="fas fa-globe"></i> Live Site</button></a>
                                    <a href="https://github.com/Masud404/car-website-client" target="_blank"><button className="button ms-4"><i class="fab fa-github"></i> Github Client Link</button></a>
                                    <a href="https://github.com/Masud404/car-website-server" target="_blank"><button className="button mt-3"><i class="fab fa-github"></i> Github Server Link</button></a>
                                </Card.Body>
                                <button className="details-btn">Details</button>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="project-card">
                                <Card.Img variant="top" src={image4} />
                                <Card.Body>
                                    <Card.Title className="fw-bold">GLAXDU</Card.Title>
                                    <Card.Text>
                                        <h5>Educational Related Website built With React Js.</h5>
                                    </Card.Text>
                                    <Card.Text>

                                        <p className="card-text">
                                            <span className="project-language px-2 py-1 rounded me-2">React js</span>
                                            <span className="project-language px-2 py-1 rounded me-2">Bootstrap</span>
                                            <span className="project-language px-2 py-1 rounded me-2">React-Router</span>
                                        </p>
                                    </Card.Text>
                                    <a href="https://unruffled-varahamihira-81b068.netlify.app/" target="_blank"><button className="button"><i class="fas fa-globe"></i> Live Site</button></a>
                                    <a href="https://github.com/Masud404/educational-website" target="_blank"><button className="button ms-4"><i class="fab fa-github"></i> Github Link</button></a>
                                </Card.Body>
                                <button className="details-btn">Details</button>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="project-card">
                                <Card.Img variant="top" src={image5} />
                                <Card.Body>
                                    <Card.Title className="fw-bold">SUPER HERO</Card.Title>
                                    <Card.Text>
                                        <h5>Super Hero Related Website built With JavaScript.</h5>
                                    </Card.Text>
                                    <Card.Text>

                                        <p className="card-text">
                                            <span className="project-language px-2 py-1 rounded me-2">HTML</span>
                                            <span className="project-language px-2 py-1 rounded me-2">CSS</span>
                                            <span className="project-language px-2 py-1 rounded me-2">Bootstrap</span>
                                            <span className="project-language px-2 py-1 rounded me-2">JavaScript</span>
                                        </p>
                                    </Card.Text>
                                    <a href="https://elastic-sammet-0c83d2.netlify.app/" target="_blank"><button className="button"><i class="fas fa-globe"></i> Live Site</button></a>
                                    <a href="https://github.com/Masud404/american-president-website" target="_blank"><button className="button ms-4"><i class="fab fa-github"></i> Github Link</button></a>
                                </Card.Body>
                                <button className="details-btn">Details</button>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="project-card">
                                <Card.Img variant="top" src={image6} />
                                <Card.Body>
                                    <Card.Title className="fw-bold">Honda CBR 300R</Card.Title>
                                    <Card.Text>
                                        <h5>Bike Related Website built With Bootstrap.</h5>
                                    </Card.Text>
                                    <Card.Text>

                                        <p className="card-text">
                                            <span className="project-language px-2 py-1 rounded me-2">HTML</span>
                                            <span className="project-language px-2 py-1 rounded me-2">CSS</span>
                                            <span className="project-language px-2 py-1 rounded me-2">Bootstrap</span>
                                        </p>
                                    </Card.Text>
                                    <a href="https://sad-hodgkin-f4ff11.netlify.app/" target="_blank"><button className="button"><i class="fas fa-globe"></i> Live Site</button></a>
                                    <a href="https://github.com/Masud404/honda-cbr-bootstrap-website" target="_blank"><button className="button ms-4"><i class="fab fa-github"></i> Github Link</button></a>
                                </Card.Body>
                                <button className="details-btn">Details</button>
                            </Card>
                        </Col>

                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Project;