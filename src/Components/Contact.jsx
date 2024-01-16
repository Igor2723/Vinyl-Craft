import React from "react";
import "./Contact.css";
import Navbar from "./Navbar";
import Footer from "./Footer";


export default function Contact() {

    return (
        <>
            <Navbar/>
                <h1 className="contact-title">Get in touch <br/> with Us</h1>
                <div className="form-container">
                    <form className="contact-form">
                        <input type="text" className="form-control" id="text" placeholder="Full Name"></input>
                        <input type="text" className="form-control" id="email" placeholder="Email"></input>
                        <textarea className="form-control" id="textArea" placeholder="Enter your text"rows="10"></textarea>
                        <button className="submit-form">Submit</button>
                    </form>
                </div>
            <Footer/>
        </>
    )

}
/*<form className="contact-form">
                    <input type="text" className="form-control" id="text" placeholder="Full Name"/>
                    <input type="text" className="form-control" id="email" placeholder="Email"/>
                    <textarea className="form-control" id="textArea" placeholder="Enter your text"rows="10"></textarea>
                    <button className="submit-form">Submit</button>
                </form>*/ 