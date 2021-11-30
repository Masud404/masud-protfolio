import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import ContactMe from '../ContactMe/ContactMe';
import Header from '../Header/Header';
import Menubar from '../Menubar/Menubar';
import Project from '../Project/Project';
import './Home.css'

const Home = () => {
    return (
        <div id="home">
            <Menubar></Menubar>
            <Header></Header>
            <AboutMe></AboutMe>
            <Project></Project>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;