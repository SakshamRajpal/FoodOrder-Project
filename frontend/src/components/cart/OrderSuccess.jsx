import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createOrder } from "../../actions/orderAction";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  const location = useLocation();
  /* Ex. //https://example.com/page?name=.....
     {pathName: https://example.com,
      name: "JhonDoe",
      age: 25} */

  const searchParams = new URLSearchParams(location.search);
  const session_id = searchParams.get("session_id");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createOrder(session_id));
  }, [dispatch, session_id]);

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-6 mt-5 text-center">
          <svg
            class="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              class="checkmark__circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              class="checkmark__check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>

          <h2>Your Order has been placed successfully.</h2>

          <Link to="/eats/orders/me/myOrders">Go to Orders</Link>
        </div>
      </div>
    </>
  );
};

export default OrderSuccess;
