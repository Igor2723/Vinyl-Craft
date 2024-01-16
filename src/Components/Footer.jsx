import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";

export default function Footer() {
    const scrollUp = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }
    return (
      <>
        <div className="footer">
            <button className="backtotop" onClick={scrollUp}>Back to Top</button>
           <div className="social">
                <h4>Follow Us on Social Media</h4>
                <a href="#"><FontAwesomeIcon className="footer-contact" icon={faFacebook}/></a>
                <a href="#"><FontAwesomeIcon className="footer-contact" icon={faInstagram}/></a>
                <a href="#"><FontAwesomeIcon className="footer-contact" icon={faEnvelope}/></a>
           </div>
           <div className="menu">
                <h4>Menu</h4>
                <Link to="/">Home</Link>
                <Link to="/vinylclocks"> Vinyl Clocks</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/cart">Cart</Link>
           </div>
           <div className="copyright">Copyright &copy; 2024 Vinyl Craft Art</div>
        </div>
      </>
    );
  }