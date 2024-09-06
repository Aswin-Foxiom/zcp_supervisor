import React from "react";
import Background from "../../components/common/Background";

function Reports() {
  return (
    <div style={{ height: "100vh" }}>
      <section id="account-main" className="background1">
        <Background />
        <div className="container position-relative">
          <div className="main-content-wrap">
            <div className="account-created-wrap mt-24">
              <div className="account-top-sec">
                <div className="account-img">
                  <img
                    src="/assets/images/invite-friend/friend1.png"
                    alt="account-img"
                  />
                </div>
                <div className="account-name">
                  <h3>Manoj</h3>
                  <p>Kollam</p>
                </div>
                {/* <div className="account-edit">
                  <a href="#">
                    <img src="/assets/svg/edit-icon.svg" alt="edit-icon" />
                  </a>
                </div> */}
              </div>
              <div className="account-bottom-sec mt-24">
                <a href="#">
                  <div className="send-money-contact-tab ">
                    <div className="setting-icon red-bg-opacity">
                      <img
                        src="/assets/images/profile/account-icon1.svg"
                        alt="account-icon"
                      />
                    </div>
                    <div className="setting-title">
                      <h3>Generate & Share Invoice</h3>
                    </div>
                    <div className="contact-star">
                      <div className="star-favourite">
                        <img
                          src="/assets/svg/right-arrow.svg"
                          alt="edit-icon"
                        />
                      </div>
                    </div>
                  </div>
                </a>
                <a href="#">
                  <div className="send-money-contact-tab mt-12">
                    <div className="setting-icon red-bg-opacity">
                      <img
                        src="/assets/images/profile/account-icon2.svg"
                        alt="account-icon"
                      />
                    </div>
                    <div className="setting-title">
                      <h3>Generate & Share Reports</h3>
                    </div>
                    <div className="contact-star">
                      <div className="star-favourite">
                        <img
                          src="/assets/svg/right-arrow.svg"
                          alt="edit-icon"
                        />
                      </div>
                    </div>
                  </div>
                </a>
                {/* <a href="#">
                  <div className="send-money-contact-tab mt-12">
                    <div className="setting-icon red-bg-opacity">
                      <img
                        src="/assets/images/profile/account-icon3.svg"
                        alt="account-icon"
                      />
                    </div>
                    <div className="setting-title">
                      <h3>Payment Methods</h3>
                    </div>
                    <div className="contact-star">
                      <div className="star-favourite">
                        <img
                          src="/assets/svg/right-arrow.svg"
                          alt="edit-icon"
                        />
                      </div>
                    </div>
                  </div>
                </a>
                <a href="#">
                  <div className="send-money-contact-tab mt-12">
                    <div className="setting-icon red-bg-opacity">
                      <img
                        src="/assets/images/profile/account-icon4.svg"
                        alt="account-icon"
                      />
                    </div>
                    <div className="setting-title">
                      <h3>Delivery Address</h3>
                    </div>
                    <div className="contact-star">
                      <div className="star-favourite">
                        <img
                          src="/assets/svg/right-arrow.svg"
                          alt="edit-icon"
                        />
                      </div>
                    </div>
                  </div>
                </a>
                <a href="#">
                  <div className="send-money-contact-tab mt-12">
                    <div className="setting-icon red-bg-opacity">
                      <img
                        src="/assets/images/profile/account-icon5.svg"
                        alt="account-icon"
                      />
                    </div>
                    <div className="setting-title">
                      <h3>Promos &amp; Vouchers</h3>
                    </div>
                    <div className="contact-star">
                      <div className="star-favourite">
                        <img
                          src="/assets/svg/right-arrow.svg"
                          alt="edit-icon"
                        />
                      </div>
                    </div>
                  </div>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="sign-up-btn fixed">
        <a href="/clients">Start New Work</a>
      </div>
    </div>
  );
}

export default Reports;
