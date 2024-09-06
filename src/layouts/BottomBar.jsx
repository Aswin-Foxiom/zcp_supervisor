import React from "react";

function BottomBar() {
  return (
    <div className="bottom-tabbar">
      <div className="bottom-tabbar-full">
        <nav>
          <a href="homescreen1.html" className="active">
            <img src="/assets/images/tabbar/icon1.svg" alt="icon-icon" />
            <span>Home</span>
          </a>
          <a href="search-found.html">
            <img src="/assets/images/tabbar/icon2.svg" alt="icon-icon" />
            <span>Search</span>
          </a>
          <a href="cart.html">
            <img src="/assets/images/tabbar/icon3.svg" alt="icon-icon" />
            <span>Cart</span>
          </a>
          <a href="wishlist.html">
            <img src="/assets/images/tabbar/icon4.svg" alt="icon-icon" />
            <span>Wishlist</span>
          </a>
          <a href="account-screen.html">
            <img src="/assets/images/tabbar/icon5.svg" alt="icon-icon" />
            <span>Account</span>
          </a>
        </nav>
      </div>
    </div>
  );
}

export default BottomBar;
