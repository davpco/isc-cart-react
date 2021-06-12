import React from "react";

const Loader = () => {
  const loaderImgSrc = window.InStoreCustomizer.page.loader_image;

  return (
    <div className="preloader-container" style={{ position: "fixed" }}>
      <div>
        <img className="scale-animation" src={loaderImgSrc} alt="" />
        <span className="loadMessage">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
