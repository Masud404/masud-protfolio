import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ContactMe.css'
import emailjs from 'emailjs-com'

const ContactMe = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_uvkhqo7', 'template_knr3dci', e.target, 'user_4FTaIJvX9woqI9ZV7NTBa')
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
        e.target.reset();
    }

    return (
        <div id="contact">
            <Container>
                <h1 className="text-light fw-bold mb-4">CONTACT Me</h1>
                <span className="underline"><hr /></span>
                {/* form */}
                <div>
                    <Row>
                        <Col sm={12} md={4} className="text-light fw-bold mt-5">
                            <h3>Let's talk about everything!</h3>
                            <h5>Send me an <span className="text-danger">Email</span>.</h5>
                            <h2 className="text-warning mt-5">Address :-</h2>
                            <h5>Khulna,Bangladesh</h5>
                            <h6>masud215502@gmail.com</h6>
                        </Col>
                        <Col sm={12} md={8}>
                            <div className="ms-5 mb-5">
                                <form onSubmit={sendEmail} className="form">
                                    <input name="name" type="text" placeholder="Your Name" /><br></br>
                                    <input type="email" name="user_email" id="" placeholder="Email Address" /><br></br>
                                    <input type="text" name="subject" placeholder="Subject" /><br />
                                    <textarea name="message" id="" cols="30" rows="10" placeholder="Message" className="message" ></textarea><br />
                                    <input type="submit" className="submit-btn" value="Send Message" />
                                </form>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default ContactMe;