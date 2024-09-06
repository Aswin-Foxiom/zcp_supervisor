import React, { useState } from "react";
import Background from "../../components/common/Background";

function WorkPage() {
  const [type, settype] = useState("cleaning");
  return (
    <div style={{ height: "100vh" }}>
      <section id="empty-order-main" className="background1">
        <Background />
        <div className="container position-relative">
          <div className="main-content-wrap">
            <div className="empty-cart-wrap pt-24">
              <div className="empty-order-content">
                <ul
                  className="nav nav-pills"
                  id="empty-order-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link empty-order-content-tab-btn active"
                      id="pills-active-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-active"
                      type="button"
                      role="tab"
                      onClick={() => settype("cleaning")}
                      aria-selected="true"
                    >
                      Cleaning
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link empty-order-content-tab-btn"
                      id="pills-completed-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-completed"
                      type="button"
                      role="tab"
                      onClick={() => settype("pest_control")}
                      aria-selected="false"
                    >
                      Pest Control
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link empty-order-content-tab-btn"
                      id="pills-completed-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-completed"
                      type="button"
                      role="tab"
                      onClick={() => settype("previous")}
                      aria-selected="false"
                    >
                      Previous
                    </button>
                  </li>
                </ul>
              </div>
              {/* <div className="text-center pt-32">
                <img
                  className="oval-frame "
                  src="/assets/images/main-img/empty-order-img.png"
                  alt="poster-img"
                />
              </div> */}
              <div className="main-content-wrap">
                {type === "cleaning" ? (
                  <div className="language-selector pt-24">
                    <div className="language-sec-wrap pt-8">
                      <div className="language-name">
                        <div className="language-name-wrap">
                          <div>
                            <p>Sofa cleaning</p>
                          </div>
                          <div className="form-check ps-0">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="language"
                              defaultValue="usa"
                              id="language1"
                            />
                            <label htmlFor="language1" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="language-sec-wrap pt-8">
                      <div className="language-name">
                        <div className="language-name-wrap">
                          <div>
                            <p>Room cleaning</p>
                          </div>
                          <div className="form-check ps-0">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="language"
                              defaultValue="usa"
                              id="language1"
                            />
                            <label htmlFor="language1" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="language-sec-wrap pt-8">
                      <div className="language-name">
                        <div className="language-name-wrap">
                          <div>
                            <p>Kitchen cleaning</p>
                          </div>
                          <div className="form-check ps-0">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="language"
                              defaultValue="usa"
                              id="language1"
                            />
                            <label htmlFor="language1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {type === "pest_control" ? (
                  <div className="language-selector pt-24">
                    <div className="language-sec-wrap pt-8">
                      <div className="language-name">
                        <div className="language-name-wrap">
                          <div>
                            <p>Pest control 1</p>
                          </div>
                          <div className="form-check ps-0">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="language"
                              defaultValue="usa"
                              id="language1"
                            />
                            <label htmlFor="language1" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="language-sec-wrap pt-8">
                      <div className="language-name">
                        <div className="language-name-wrap">
                          <div>
                            <p>Pest control 2</p>
                          </div>
                          <div className="form-check ps-0">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="language"
                              defaultValue="usa"
                              id="language1"
                            />
                            <label htmlFor="language1" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="language-sec-wrap pt-8">
                      <div className="language-name">
                        <div className="language-name-wrap">
                          <div>
                            <p>Pest control 3</p>
                          </div>
                          <div className="form-check ps-0">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="language"
                              defaultValue="usa"
                              id="language1"
                            />
                            <label htmlFor="language1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {type === "previous" ? (
                  <>
                    <div className="checkout-second border-green mt-24">
                      <div className="delivery-address-content">
                        <div className="second-order-sec border-0 pb-0">
                          <div className="cart-title">
                            <h3>Pest Control</h3>
                          </div>
                          {/* <div className="default-txt">
                            <p>Default</p>
                          </div> */}
                        </div>
                        {/* <div className="second-order-sec border-0 pb-0">
                          <div className="cart-title">
                            <a href="add-new-address1.html">
                              <img
                                src="assets/svg/edit-icon-black.svg"
                                alt="edit-icon"
                              />
                            </a>
                          </div>
                          <div className="default-txt bg-transparent">
                            <a href="javascript:void(0)">
                              <img
                                src="assets/svg/delete-icon.svg"
                                alt="edit-icon"
                              />
                            </a>
                          </div>
                        </div> */}
                      </div>
                      <div className="delivery-bottom">
                        <div className="cart-title">
                          <h3 className="text-start pt-12">
                            Jessica Smith (Home)
                          </h3>
                          <div className="checkout-no pt-8">
                            <a href="tel:+12345678899">+1 234 567 8899</a>
                          </div>
                          <p className="mt-8">
                            614 8th Parkview Ave, New York, NY 10036, USA
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="checkout-second border-green mt-24">
                      <div className="delivery-address-content">
                        <div className="second-order-sec border-0 pb-0">
                          <div className="cart-title">
                            <h3>Pest Control</h3>
                          </div>
                          {/* <div className="default-txt">
                            <p>Default</p>
                          </div> */}
                        </div>
                        {/* <div className="second-order-sec border-0 pb-0">
                          <div className="cart-title">
                            <a href="add-new-address1.html">
                              <img
                                src="assets/svg/edit-icon-black.svg"
                                alt="edit-icon"
                              />
                            </a>
                          </div>
                          <div className="default-txt bg-transparent">
                            <a href="javascript:void(0)">
                              <img
                                src="assets/svg/delete-icon.svg"
                                alt="edit-icon"
                              />
                            </a>
                          </div>
                        </div> */}
                      </div>
                      <div className="delivery-bottom">
                        <div className="cart-title">
                          <h3 className="text-start pt-12">
                            Jessica Smith (Home)
                          </h3>
                          <div className="checkout-no pt-8">
                            <a href="tel:+12345678899">+1 234 567 8899</a>
                          </div>
                          <p className="mt-8">
                            614 8th Parkview Ave, New York, NY 10036, USA
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
              {type === "previous" ? (
                ""
              ) : (
                <div className="sign-up-btn fixed pt-32 ">
                  <a href="/work-datas">Next</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WorkPage;
