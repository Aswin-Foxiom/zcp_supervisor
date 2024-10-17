import React from "react";

function Loader() {
  return (
    <div>
      {/* <div class="preloader">
        <div class="opposites">
          <div class="opposites bl"></div>
          <div class="opposites tr"></div>
          <div class="opposites br"></div>
          <div class="opposites tl"></div>
        </div>
      </div> */}
      {/* <div class="preloader">
        <img
          src="/assets/images/logo.jpg"
          style={{
            height: "50px",
            width: "50px",
            // animation: "spin 2s linear infinite",
          }}
        />
        <p style={{ color: "white" }}> Loading </p>
      </div> */}

      {/* <div class="loader">
        <span></span>
        <span></span>
        <span></span>
      </div> */}
      <div id="page-loader">
        <div class="page-loader-content">
          <div class="page-loader-inner">
            <img alt="logo" src="/assets/images/zcplogo.png" />
            <div class="page-loading-text">
              Loading
              <span class="page-loading-dot page-loading-dot1"></span>
              <span class="page-loading-dot page-loading-dot2"></span>
              <span class="page-loading-dot page-loading-dot3"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
