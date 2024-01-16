import React from "react";
import "./About.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import boyavatar from '../assets/boyavatar.png';
import girlavatar from '../assets/girlavatar.png';

export default function About() {
    return (
        <>
            <Navbar/>
            <div className="about-container">
                <div className="about-banner">
                    <h1>About Us</h1>
                </div>
                <div className="about-txt">
                <h2>Who Are We?</h2>
                <p><span className="vca-title"><span className="v">V</span>inyl craft art</span> is a local company, based in Europe.
                    The idea of crafting vinyl records into clocks was born out of
                    love towards vinyls, and the art of crafting.
                    By combining those two things, we found a way to create an original form of art, and to give vinyls new life.
                    All of our clocks are cut by CNC laser machine (including our new <a className="span-wood">wooden</a> clocks),
                    and we are capable of making almost every single one of your wish into an
                    original and unique piece of art. 
                    There isn't much we can't do when it comes to drawing and crafting your favourite
                    heroes, TV shows, sport clubs, and other, into a fully functional and one-of-a-kind 
                    vinyl or wooden clock.<br/>
                    And, if you can't find your favorite clock in our collection, make sure 
                    to reach us and we'll give our best to help you get your own <a className="span-custom">CUSTOM</a> clock shape!
                </p>
                </div>
                <div className="about-team">
                    <h2>Our Team</h2>
                    <div className="avatar-container">
                        <div className="avatar-img">
                            <img className="avatar" src={boyavatar} alt="boyavatar" />
                            <h4>Jason Bourne</h4>
                            <h6>CEO/Designer</h6>
                        </div>
                        <div className="avatar-img">
                            <img className="avatar" src={girlavatar} alt="girlavatar" />
                            <h4>Jessy Jane</h4>
                            <h6>Designer</h6>
                        </div>
                        
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}