import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

// const MainProduct = ({item}) => {
//   return (
//     <div
//       className="productScreenshot main-product-info"
//       data-time="1623463740"
//       data-variant-id="21389207896144"
//       data-screenshot="https://scl-prod.s3.amazonaws.com/screenshots/1623463743306_630bc573c92ba289.jpg"
//       data-key="21389207896144:0d063054eaa4aa1d68c02cf068d89d17"
//       data-customize-bag-url="https://www.stoneycloverlane.com/collections/customize/products/nylon-mini-pouch-2019?variant=21389207896144&amp;patch=id:20|h:coconut-terry-letter-patches|32661778792528|t:26.71|l:11.96|h:2|w:2|p:zone1|r:0"
//       data-title="classNameic Mini Pouch - Flamingo (Nylon)"
//     >
//       <img
//         className=" lazyloaded"
//         data-src="https://scl-prod.s3.amazonaws.com/screenshots/1623463743306_630bc573c92ba289.jpg"
//         alt="thumbnail"
//         src="https://scl-prod.s3.amazonaws.com/screenshots/1623463743306_630bc573c92ba289.jpg"
//       />
//       <div className="customProduct">
//         <h4>Customized classNameic Mini Pouch - Flamingo (Nylon)</h4>
//         <span data-time="1623463740" className="total-product-price">
//           $77.00
//         </span>
//       </div>
//     </div>
//   )
// }

// const FeeProduct = ({item}) => {

// }

// const CartItem = ({item}) => {
//   return (
//     <li
//         className="parentProd"
//         data-parent=""
//         data-variant="21389207896144"
//         data-time="1623463740"
//         data-count="1"
//         data-line-key="21389207896144:0d063054eaa4aa1d68c02cf068d89d17"
//         data-gift-note=""
//         data-cart-item-id=""
//         data-vid="21389207896144"
//       >
//         <div className="product">
//           <div>
//             <a
//               href="#"
//               title="classNameic Mini Pouch - Flamingo (Nylon)"
//               className="cart_image"
//             >
//               <img
//                 src="//cdn.shopify.com/s/files/1/0096/2392/products/Mini_Pouch_Flamingo_02_small.jpg?v=1614886767"
//                 alt="classNameic Mini Pouch - Flamingo (Nylon)"
//               />
//             </a>
//           </div>

//           <div className="product-title-container">
//             <span className="product-title">
//               <a
//                 href="#"
//                 title="classNameic Mini Pouch - Flamingo (Nylon)"
//                 data-variant="Flamingo (Nylon)"
//               >
//                 classNameic Mini Pouch - Flamingo (Nylon)
//               </a>
//             </span>
//             <br />
//             <br />
//           </div>

//           <div className="price_total">
//             <span
//               className="price-holder"
//               data-time="1623463740"
//               data-price="4800"
//               data-item-price="4800"
//             >
//               $48.00
//             </span>
//             <div data-quantity="1" className="price-breakdown">
//               (<span className="breakdown-quantity">1</span> x
//               <span className="breakdown-price">$48.00)</span>
//             </div>
//           </div>

//           <input
//             style={{ display: "none" }}
//             pattern="[0-9]*"
//             type="text"
//             className="quantity"
//             data-variant="21389207896144"
//             data-key="21389207896144:0d063054eaa4aa1d68c02cf068d89d17"
//             name="updates[]"
//             id="updates_21389207896144"
//             value="1"
//             max="155"
//           />
//         </div>
//       </li>
//   )
// }

const CartItems = ({ items }) => {
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    const cartItems = {};
    if (items) {
      items.forEach((item) => {
        console.log(item.properties);
      });
    }
  });

  return (
    <div id="cartProducts">
      <span className="group solo">
        <a className="view-details-btn" data-time="1623463740" href="#">
          View details
        </a>

        <div
          className="detail-view-list"
          style={{ display: "none" }}
          data-visible="false"
          data-time="1623463740"
        >
          <ul>
            <li
              className="parentProd"
              data-parent=""
              data-variant="21389207896144"
              data-time="1623463740"
              data-count="1"
              data-line-key="21389207896144:0d063054eaa4aa1d68c02cf068d89d17"
              data-gift-note=""
              data-cart-item-id=""
              data-vid="21389207896144"
            >
              <div className="product">
                <div>
                  <a
                    href="#"
                    title="classNameic Mini Pouch - Flamingo (Nylon)"
                    className="cart_image"
                  >
                    <img
                      src="//cdn.shopify.com/s/files/1/0096/2392/products/Mini_Pouch_Flamingo_02_small.jpg?v=1614886767"
                      alt="classNameic Mini Pouch - Flamingo (Nylon)"
                    />
                  </a>
                </div>

                <div className="product-title-container">
                  <span className="product-title">
                    <a
                      href="#"
                      title="classNameic Mini Pouch - Flamingo (Nylon)"
                      data-variant="Flamingo (Nylon)"
                    >
                      classNameic Mini Pouch - Flamingo (Nylon)
                    </a>
                  </span>
                  <br />
                  <br />
                </div>

                <div className="price_total">
                  <span
                    className="price-holder"
                    data-time="1623463740"
                    data-price="4800"
                    data-item-price="4800"
                  >
                    $48.00
                  </span>
                  <div data-quantity="1" className="price-breakdown">
                    (<span className="breakdown-quantity">1</span> x
                    <span className="breakdown-price">$48.00)</span>
                  </div>
                </div>

                <input
                  style={{ display: "none" }}
                  pattern="[0-9]*"
                  type="text"
                  className="quantity"
                  data-variant="21389207896144"
                  data-key="21389207896144:0d063054eaa4aa1d68c02cf068d89d17"
                  name="updates[]"
                  id="updates_21389207896144"
                  value="1"
                  max="155"
                />
              </div>
            </li>
            <li
              className="subProduct"
              data-parent="21389207896144"
              data-variant=""
              data-time="1623463740"
              data-count="1"
              data-line-key="32661778792528:3c9d247d27952838d98e56f9fd34e40a"
              data-gift-note=""
              data-cart-item-id=""
              data-vid="32661778792528"
            >
              <div className="product">
                <div>
                  <a
                    href="#"
                    title="Coconut Terry Letter Patches - A"
                    className="cart_image"
                  >
                    <img
                      src="//cdn.shopify.com/s/files/1/0096/2392/products/31_42da0ee5-aa45-4e7e-a242-a187c280992c_small.png?v=1622833733"
                      alt="Coconut Terry Letter Patches - A"
                    />
                  </a>
                </div>

                <div className="product-title-container">
                  <span className="product-title">
                    <a
                      href="#"
                      title="Coconut Terry Letter Patches - A"
                      data-variant="A"
                    >
                      Coconut Terry Letter Patches - A
                    </a>
                  </span>
                </div>

                <div className="price_total">
                  <span
                    className="price-holder"
                    data-time="1623463740"
                    data-price="1400"
                    data-item-price="1400"
                  >
                    $14.00
                  </span>

                  <div data-quantity="1" className="price-breakdown">
                    (<span className="breakdown-quantity">1</span> x
                    <span className="breakdown-price">$14.00)</span>
                  </div>
                </div>

                <input
                  style={{ display: "none" }}
                  pattern="[0-9]*"
                  type="text"
                  className="quantity"
                  data-variant="32661778792528"
                  data-key="32661778792528:3c9d247d27952838d98e56f9fd34e40a"
                  name="updates[]"
                  id="updates_32661778792528"
                  value="1"
                  max="241"
                />
              </div>
            </li>
            <li
              className="subProduct"
              data-parent="21389207896144"
              data-variant=""
              data-time="1623463740"
              data-count="1"
              data-line-key="4931250225182:005870cf8e35fe307d664eb4b7902008"
              data-gift-note=""
              data-cart-item-id=""
              data-vid="4931250225182"
              data-custom-sewing="1"
            >
              <div className="product">
                <div>
                  <a href="#" title="Customization Fee" className="cart_image">
                    <img
                      src="//cdn.shopify.com/s/files/1/0096/2392/products/spool-of-thread_small.jpg?v=1569292618"
                      alt="Customization Fee"
                    />
                  </a>
                </div>

                <div className="product-title-container">
                  <span className="product-title">
                    <a
                      href="#"
                      title="Customization Fee"
                      data-variant="Default Title"
                    >
                      Customization Fee
                    </a>
                  </span>
                </div>

                <div className="price_total">
                  <span
                    className="price-holder"
                    data-time="1623463740"
                    data-price="1500"
                    data-item-price="1500"
                  >
                    $15.00
                  </span>

                  <div data-quantity="1" className="price-breakdown">
                    (<span className="breakdown-quantity">1</span> x
                    <span className="breakdown-price">$15.00)</span>
                  </div>
                </div>

                <input
                  style={{ display: "none" }}
                  pattern="[0-9]*"
                  type="text"
                  className="quantity"
                  data-variant="4931250225182"
                  data-key="4931250225182:005870cf8e35fe307d664eb4b7902008"
                  name="updates[]"
                  id="updates_4931250225182"
                  value="1"
                />
              </div>
            </li>
            <li className="subProduct">
              <div className="product">
                <div>
                  <a href="#" title="Tidy Up" className="cart_image tidy">
                    <img
                      src="//cdn.shopify.com/s/files/1/0278/8062/0137/t/12/assets/tidy-icon.svg?v=1585923638"
                      alt="Customization Fee"
                    />
                  </a>
                </div>
                <div className="product-title-container">
                  <span className="product-title">
                    Tidy patches: Center my patches to the middle of the
                    pouch/bag
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="product-footer">
          <a href="https://www.stoneycloverlane.com/collections/customize/products/nylon-mini-pouch-2019?variant=21389207896144&amp;patch=id:20|h:coconut-terry-letter-patches|32661778792528|t:26.71|l:11.96|h:2|w:2|p:zone1|r:0&amp;timestamp=1623463740">
            Edit
          </a>
          <a
            className="duplicate-bag-btn"
            href="https://www.stoneycloverlane.com/collections/customize/products/nylon-mini-pouch-2019?variant=21389207896144&amp;patch=id:20|h:coconut-terry-letter-patches|32661778792528|t:26.71|l:11.96|h:2|w:2|p:zone1|r:0"
          >
            Make Another One
          </a>
          <a
            className="save"
            data-customize-bag-url="https://www.stoneycloverlane.com/collections/customize/products/nylon-mini-pouch-2019?variant=21389207896144&amp;patch=id:20|h:coconut-terry-letter-patches|32661778792528|t:26.71|l:11.96|h:2|w:2|p:zone1|r:0"
            data-screenshot="https://scl-prod.s3.amazonaws.com/screenshots/1623463743306_630bc573c92ba289.jpg"
            data-time="1623463740"
            data-key="21389207896144:0d063054eaa4aa1d68c02cf068d89d17"
            data-title="classNameic Mini Pouch - Flamingo (Nylon)"
            data-action="cart-save"
          >
            Save for Later
          </a>
          <a
            className="remove"
            href="#"
            id="remove_21389207896144"
            data-variant="21389207896144"
            data-time="1623463740"
            data-key="21389207896144:0d063054eaa4aa1d68c02cf068d89d17"
            data-action="cart-remove"
          >
            REMOVE
          </a>
        </div>
        <div className="gift-wrapping" style={{ display: "none" }}>
          <input type="hidden" name="attributes[gift-wrapping]" value="" />
          <input id="gift-wrapping-1623463740" type="checkbox" />
          <label for="gift-wrapping-1623463740">
            Gift wrap this item for $5
          </label>
          <div className="gift-note-preview">
            <strong>Your gift note</strong>
            <span className="gift-note"></span>
            <button className="editNote btn alt">Edit Note</button>
          </div>
        </div>
      </span>
    </div>
  );
};

CartItems.propType = {
  items: PropTypes.object.required
};

export default CartItems;
