import React from "react";
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import "./ProductPage.css";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import { inventoryData } from "./data.js";
import { addItem } from '../features/cart/cartSlice.js';

 
export default function ProductPage() {
  const dispatch = useDispatch();
  const { name } = useParams();

  const item = inventoryData.find(item => item.name === name);

  const onClickHandler = (item) => {
    dispatch(addItem(item));
  };
  const toggleFullScreen = () => {
    const element = document.getElementById('imageId');
    const isFullScreen = document.fullscreenElement;
    if(isFullScreen) {
      document.exitFullscreen();
    } else {
      element.requestFullscreen();
    }
  } 
  if (!item) {
    return <div>No item</div>;
  }

  return (
    <>
      <Navbar />
      <div className="productPage-container" key={item.id}>
        <div className="image-container">
          <img id="imageId" src={item.img} onClick={toggleFullScreen}/>
        </div>
        <div className="about-product">
          <h2 className="product-name">{item.name}</h2>
          <span className="product-type">{item.type}</span>
          {item.onsale === true ?
          <div className="price-holder">
          <span className="product-price">$<del>{item.price}</del></span>
          <span className="product-price">${item.newprice}</span>
          </div>
          : <span className="product-price">${item.price}</span>
          }
          <p className="product-desc">{item.desc}</p>
          <button
            onClick={() => onClickHandler(item)}
            className="addToCart"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <table className="product-char">
        <thead>
          <tr>
            <th>Characteristics</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Material</td>
            <td>Plastic</td>
          </tr>
          <tr>
            <td>Type</td>
            <td>{item.type}</td>
          </tr>
          <tr>
            <td>Dimensions(diameter)</td>
            <td>12in/30.48cm</td>
          </tr>
          <tr>
            <td>Clock Mechanism</td>
            <td>Smooth</td>
          </tr>
        </tbody>
      </table>
      <Footer/>
    </>  
  );
}