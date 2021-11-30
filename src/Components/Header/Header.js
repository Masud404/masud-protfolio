import React from 'react';
import './Header.css'
import photo from '../../images/Masud.png'
import { Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <div className="text-center mt-5">
            <div>
                <img className="img-fluid header-photo" src={photo} alt="" />
                <h5 className="text-light fw-bold mt-4"><span className="header-text">Hello! I am</span></h5>
                <h1 className="text-light fw-bold">Md Masud Hossain</h1>
                <h5 className="text-light fw-bold"><span className="header-text">I'm a React Developer</span></h5>
                {/* social link */}
                <div>
                    <a href="https://www.facebook.com/masud.hasan.xrz/" target="_blank"><i class="fab fa-facebook icon"></i></a>
                    <a href="https://github.com/Masud404" target="_blank"><i class="fab fa-github icon"></i></a>
                    <a href="https://www.linkedin.com/in/md-masud-hossain-919773226/" target="_blank"><i class="fab fa-linkedin icon"></i></a>
                </div>
                <Nav.Link href="#contact"><button className="hire-me-btn">Hire Me</button></Nav.Link>
            </div>
        </div>
    );
};

export default Header;