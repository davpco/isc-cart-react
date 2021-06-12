import { StrictMode } from "react";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import Loader from "./components/pages/Loader";
import EmptyCart from "./components/pages/cart/EmptyCart";
import CartHeader from "./components/pages/cart/CartHeader";
import CartItems from "./components/pages/cart/CartItems";

window.InStoreCustomizer = window.InStoreCustomizer || {};
window.InStoreCustomizer.cart = {
  page_title: "Shopping Cart",
  empty_cart_poster:
    "https://cdn.shopify.com/s/files/1/0096/2392/t/107/assets/icon-cart-empty.svg"
};
window.InStoreCustomizer.page = {
  loader_image:
    "https://cdn.shopify.com/s/files/1/0096/2392/t/107/assets/scl-logo-preloader.svg"
};

const customizerCart = {
  getCart: () => {
    return new Promise((resolve, reject) => {
      const cart = require("./data.json");
      console.log(cart);
      resolve(cart);
    });
  }
};

const Cart = () => {
  const [cart, setCart] = useState({}),
    [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      customizerCart.getCart().then((cart) => {
        setCart(cart.success ? cart.cart : {});
        setLoader(false);
      });
    }, 2000);
  });

  return (
    <React.Fragment>
      {loader ? (
        <Loader />
      ) : (
        <div>
          {"items" in cart && !cart.items && <EmptyCart />}

          {"items" in cart && cart.items.length && (
            <div>
              <CartHeader />
              <CartItems items={cart.items} />
            </div>
          )}
        </div>
      )}
    </React.Fragment>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Cart />
  </StrictMode>,
  rootElement
);
