import React from "react";
import { useDispatch } from "react-redux";
import { clearcart } from "../features/cart/Cartslice";
import { closemodal } from "../features/modal/modalslice";

export default function Modal() {
  const dispatch = useDispatch();

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>remove all item from cart?</h4>
        <div className="btn-container">
          <button
            type="button"
            className="btn confirm-btn"
            onClick={() => {
              dispatch(clearcart());
              dispatch(closemodal());
            }}
          >
            Confirm
            {/* https://course-api.com/react-useReducer-cart-project */}
          </button>
          <button
            type="button"
            className="btn cancel-btn"
            onClick={() => {
              dispatch(closemodal());
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </aside>
  );
}
