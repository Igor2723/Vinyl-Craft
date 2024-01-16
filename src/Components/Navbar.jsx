import { useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBars, faCircleXmark, faEnvelope, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import "./Navbar.css";
import { NavLink } from 'react-router-dom'; 
import { Link } from "react-router-dom";
import { calculateTotalQuantity } from '../features/utilities/utilities.js';
import { useSelector } from 'react-redux';
import logo from '../assets/vcartlogo.png';

function Navbar() {
	const cart = useSelector(state => state.cart);
	const totalItems = calculateTotalQuantity(cart);
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<Link to="/"><img src={logo} className="logo"/></Link>
			<nav ref={navRef}>	
				<NavLink to="/" className="navLink">Home</NavLink>
				<NavLink to="/vinylclocks" className="navLink"> Vinyl Clocks</NavLink>
				<NavLink to="/about" className="navLink">About Us</NavLink>
				<NavLink to="/contact" className="navLink">Contact</NavLink>
				<NavLink title={totalItems === 0 ? "Cart Empty" : `${totalItems} item(s)`} to="/cart" className="navLink"><FontAwesomeIcon className="cart" icon={faCartShopping}/><span className="cart-quantity">({totalItems})</span></NavLink>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FontAwesomeIcon icon={faCircleXmark} style={{color: "#284766",}} />
				</button>
			</nav>
			<div className="contact">
				<a href="#"><FontAwesomeIcon className="contact-icon" icon={faFacebook}/></a>
				<a href="#"><FontAwesomeIcon className="contact-icon" icon={faInstagram}/></a>
				<a href="#"><FontAwesomeIcon className="contact-icon" icon={faEnvelope}/></a>
			</div>
			<button
				className="nav-btn nav-open"
				onClick={showNavbar}>
				<FontAwesomeIcon icon={faBars} style={{color: "#284766",}}/>
			</button>
		</header>
	);
}

export default Navbar;





