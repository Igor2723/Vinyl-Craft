import "./Home.css";
import Navbar from "./Navbar.jsx";
import Slider from "./Slider.jsx";
import OnSale from "./OnSale.jsx";
import Clock from "./Clock.jsx";
import Info from "./Info.jsx";
import Footer from "./Footer.jsx";
import { Link } from "react-router-dom";

function Home() { 

    return (

        <>
            <Navbar />
            <main>
                <div className="banner-two">
                    <Clock />
                    <h3 className="message">Giving Vinyls New Life</h3>
                </div> 

                 <div className="banner-one">
                   <h1><span>V</span>INYL <span>C</span>RAFT <br/><span>A</span>RT</h1> 
                   
                   <button className="shopbtn"><Link to="/vinylclocks">Shop</Link></button>
                </div> 
            </main>
            <Slider />
            <OnSale />
            <Info />
            <Footer />
        </>
    )
 
}

export default Home;