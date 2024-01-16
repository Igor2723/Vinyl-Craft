import React from "react";
import "./VinylClocks.css";
import { Link } from "react-router-dom";
import { addItem } from '../features/cart/cartSlice.js';
import { useDispatch } from 'react-redux';

export default function Product({filteredAndSortedList}) {
    const dispatch = useDispatch();
    const onClickHandler = (item) => {
    dispatch(addItem(item));
  };
    return (
        <>
            {filteredAndSortedList.map(item => (
            <div className="products-card">
                <Link to={`/product/productpage/${item.name}`}><img src={item.img}/></Link>
                <div className="name-price-tag">
                    <div className="price-container">
                        <p className="name">{item.name}</p>
                        {item.onsale === true ?
                            <div className="price-newprice">
                            <span className="price">$<del>{item.price}</del></span>
                            <span className="price">${item.newprice}</span>
                            </div>
                            : <span className="price">${item.price}</span>
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
          
          ))}  
        </>
    )        
}
