import React from "react";

function Loader() {
  return (
    <div className="preloader">
      <div className="opposites">
        <div className="opposites bl" />
        <div className="opposites tr" />
        <div className="opposites br" />
        <div className="opposites tl" />
      </div>
    </div>
  );
}

export default Loader;
