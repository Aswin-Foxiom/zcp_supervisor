import React from "react";

function Loader() {
  return (
    // <div class="preloader">
    //   <div class="opposites">
    //     <div class="opposites bl"></div>
    //     <div class="opposites tr"></div>
    //     <div class="opposites br"></div>
    //     <div class="opposites tl"></div>
    //   </div>
    // </div>
    <div class="preloader">
      <div class="opposites">
        <div class="opposites">
          <img
            src="/assets/images/logo.jpg"
            style={{
              height: "50px",
              width: "50px",
              animation: "spin 2s linear infinite",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Loader;
