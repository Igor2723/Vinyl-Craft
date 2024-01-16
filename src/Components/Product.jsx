import React from "react";
import "./VinylClocks.css";
import { Link } from "react-router-dom";
import { addItem } from '../features/cart/cartSlice.js';
import { useDispatch } from 'react-redux';

export default function Product({img, name, price, newprice, onsale}) {
    const dispatch = useDispatch();
    const onClickHandler = (item) => {
    dispatch(addItem(item));
  };
    return (
        <>
           
            <div className="products-card">
                <Link to={`/product/productpage/${name}`}><img src={img}/></Link>
                <div className="name-price-tag">
                    <div className="price-container">
                        <p className="name">{name}</p>
                        {onsale === true ?
                            <div className="price-newprice">
                            <span className="price">$<del>{price}</del></span>
                            <span className="price">${newprice}</span>
                            </div>
                            : <span className="price">${price}</span>
                        }
                    </div>
                    <button
                            onClick={() => onClickHandler(item)}
                            className="addToCart"
                        >
                            Add to Cart
                        </button>
            </div>   
        </div>
          
                
        </>
    )        
}