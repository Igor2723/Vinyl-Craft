import "./Info.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faWallet } from '@fortawesome/free-solid-svg-icons';
import visa from "../assets/creditcards/visa.svg";
import mastercard from "../assets/creditcards/mastercard.svg";
import paypal from "../assets/creditcards/paypal.svg";
import americanex from "../assets/creditcards/americanex.svg";
import { Link } from "react-router-dom";


export default function Info() {
    
    return (
      <>
        <div className="info-container">
            <h4>Decorate your walls with your favorite
                movie heroes, sports teams, musicians and other. <br/>
                Or <Link to="/contact">contact us</Link> to aquire your own custom shaped clock!
            </h4>
            <h3 className="info-title">Shipping & Payments</h3>
            <div className="info-banner">
                <div className="shipping">
                    <FontAwesomeIcon icon={faGlobe} style={{color: "#6A88A6",}} size="2xl"/>
                    <h6>Free Shipping Across Europe</h6>
                </div>
                <div className="payment">
                <FontAwesomeIcon icon={faWallet} style={{color: "#6A88A6",}} size="2xl"/>
                    <h6>Various Payment Methods</h6>
                    <div className="cards">
                        <img className="card-img" src={visa} alt="visacard" />
                        <img className="card-img" src={mastercard} alt="mastercard" />
                        <img className="card-img" src={paypal} alt="paypal" />
                        <img className="card-img" src={americanex} alt="americanex" />
                    </div>
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2929770.1057081963!2d18.27129659502276!3d44.1843318262884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47571ddff2898095%3A0x55e50ea3723865d!2z0KHRgNCx0LjRmNCw!5e0!3m2!1ssr!2srs!4v1701021021134!5m2!1ssr!2srs" width="600" height="450" style={{ border:0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </>
    );
  }