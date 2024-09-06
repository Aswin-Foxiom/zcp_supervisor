import React from "react";

function NotFound() {
  return (
    <div style={{ height: "100vh" }}>
      <div className="site-content">
        {/* <header id="top-header">
          <div className="header-wrap-home">
            <div className="header-logo-home">
              <a href="javascript:history.go(-1)">
                <img src="assets/svg/left-arrow.svg" alt="left-arrow" />
              </a>
            </div>
            <div className="header-name">
              <p>404</p>
            </div>
            <div className="home-setting" />
          </div>
        </header> */}
        {/* Header end */}
        {/* Empty order content start */}
        <section id="empty-order-main" className="background1">
          <div className="onboarding-bg-img1" />
          <div className="onboarding-bg-img2">
            <img
              src="assets/images/splashscreen/small-bg-img.png"
              alt="bg-img"
            />
          </div>
          <div className="red" />
          <div className="red1" />
          <div className="yellow" />
          <div className="green" />
          <div className="container position-relative">
            <div className="main-content-wrap">
              <div className="empty-cart-wrap pt-24">
                <div className="text-center pt-32">
                  {/* <img
                    className="oval-frame "
                    src="assets/images/main-img/empty-order-img.png"
                    alt="poster-img"
                  /> */}
                </div>
                <div className="get-started-content pt-32">
                  <h1>Sorry This page Does not Exist</h1>
                  {/* <p className="pt-8">
                    You don’t have an ongoing orders at this time.
                  </p> */}
                </div>
                <div className="sign-up-btn fixed pt-32 ">
                  <a href="/login">Back To Login</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Empty order content end */}
      </div>
    </div>
  );
}

export default NotFound;
