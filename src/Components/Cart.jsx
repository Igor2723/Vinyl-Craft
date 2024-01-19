import React from 'react';
import "./Cart.css";
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeItemQuantity,
  removeAll
} from '../features/cart/cartSlice.js';
import { calculateTotal } from '../features/utilities/utilities.js';

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart); // * Note

  const onInputChangeHandler = (name, input) => {
    // If the user enters a bad value...
    if (input === '') {
      return;
    }

    // Otherwise, convert the input into a number and pass it along as the newQuantity.
    const newQuantity = Number(input);

    dispatch(changeItemQuantity(name, newQuantity));
  };

  const onRemoveAll = () => dispatch(removeAll());
  const incrementItem = (name, item) => dispatch(
    changeItemQuantity(name, item.quantity + 1)
  );
  const decrementItem = (name, item) => dispatch(
    changeItemQuantity(name, item.quantity - 1)
  );

  function createCartItem([name, item]) {
    return (
      <li className="cart-list" key={name}>
        <img src={item.img}/>
        <p>{name}</p>
        <p>{item.type}</p>
        <p className="quantity">Quantity:</p>
          <div className="input-btn-container">
            <button className="inc-dec" type="button" onClick={decrementItem.bind(null, name, item)}>
              -
            </button>
            <input 
              type="number" 
              className="item-quantity" 
              name="quantity"
              value={item.quantity}
              onChange={(e) => {
                onInputChangeHandler(name, e.target.value);
              }}
            />
            <button className="inc-dec" type="button" onClick={incrementItem.bind(null, name, item)}>
              +
            </button>
          </div>
      </li>
    );
  }
  
  // Use the cart and currencyFilter slices to render their data.
  const cartElements = Object.entries(cart)
    .filter(([,item]) => item.quantity)
    .map(createCartItem);

  const total = calculateTotal(cart);

  return (
    <>
      <Navbar />
      <div id="cart-container">
        {cartElements.length
          ? (
            <ul id="cart-items">
              {cartElements}
            </ul>
          ) : <div className="cart-empty">Your cart is empty</div>
        }
        <div className="price-btn-container">
        {cartElements.length > 0 ? <button
              onClick={() => onRemoveAll()}
              className="remove-all"
            >
              Remove All
            </button> : <div></div>}
          <h3 className="total">
            Total{' '}
            <span className="total-value">
              ${total} 
            </span>
          </h3>
        </div>
      </div>
      <Footer />
    </>
  );
};
