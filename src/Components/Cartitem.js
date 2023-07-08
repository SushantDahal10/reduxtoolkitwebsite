import React from "react";
import { ChevronUp, ChevronDown } from "../icons";
import {
  decreaseitem,
  increaseitem,
  removeitem,
} from "../features/cart/Cartslice";
import { useDispatch } from "react-redux";
export default function Cartitem({ id, img, title, price, amount }) {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button
          className="remove-btn"
          onClick={() => {
            dispatch(removeitem(id));
          }}
        >
          remove
        </button>
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={() => {
            dispatch(increaseitem(id));
          }}
        >
          <ChevronUp></ChevronUp>
        </button>
        <p className="amount">{amount}</p>
        <button
          className="amount-btn"
          onClick={() => {
            if (amount === 1) {
              dispatch(removeitem(id));
              return;
            }
            dispatch(decreaseitem(id));
          }}
        >
          <ChevronDown></ChevronDown>
        </button>
      </div>
    </article>
  );
}
