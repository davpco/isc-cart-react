import PropTypes from "prop-types";
import React from "react";

const CartHeader = ({ orderSubmitted = false }) => {
  let pageTitle = window.InStoreCustomizer.cart.page_title;

  return (
    <section className="rainbowDivider heading text-center">
      <div className="wrap">
        {!orderSubmitted && <h1>{pageTitle}</h1>}

        {orderSubmitted && (
          <div>
            <h1>Order Details</h1>
            <div className="cart-notice">
              <p>Order has been submitted successfully!</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

CartHeader.propTypes = {
  orderSubmitted: PropTypes.bool
};

export default CartHeader;
