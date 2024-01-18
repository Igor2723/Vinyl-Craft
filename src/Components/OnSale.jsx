import React from "react";
import { inventoryData } from "./data";
import "./OnSale.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPercent} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";


export default function OnSale() {

  const filterOnsale = inventoryData.filter(product => product.onsale === true);

  const productsOnsale = filterOnsale.map(product =>
    <div className="onsale" key={product.id}> 
      <Link to={`/product/productpage/${product.name}`}><img src={product.img} alt="" /></Link>
      <p className="name">{product.name}</p>
      <span className="price"><del>${product.price}</del></span>
      <span className="price">${product.newprice}</span>
    </div>
  ); 
    return (
        <>
          <div className="onsale-container">
            <h3><FontAwesomeIcon icon={faPercent} flip style={{color: "#ed071e",}} /> ON SALE <FontAwesomeIcon icon={faPercent} flip style={{color: "#ed071e",}} /></h3>
            {productsOnsale}
         </div>  
        </>
    );    
}
