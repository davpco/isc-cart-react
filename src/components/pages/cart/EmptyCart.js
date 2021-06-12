import React from "react";

const EmptyCart = () => {
  let pageTitle = window.InStoreCustomizer.cart.page_title,
    emptyImagePosterSrc = window.InStoreCustomizer.cart.empty_cart_poster,
    productsPath = window.InStoreCustomizer.products_path;

  return (
    <section className="p40 heading text-center">
      <div className="wrap">
        <h1>{pageTitle}</h1>
        <img src={emptyImagePosterSrc} alt="Empty Cart" />
        <p>There are no items in your cart.</p>
        <p>
          <a href={productsPath} className="btn alt">
            Continue Shopping
          </a>
        </p>
      </div>
    </section>
  );
};

export default EmptyCart;
