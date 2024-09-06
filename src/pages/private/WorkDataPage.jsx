import React from "react";
import Background from "../../components/common/Background";

function WorkDataPage() {
  return (
    <div style={{ height: "100vh" }}>
      <section id="add-new-card" className="background1">
        <div className="onboarding-bg-img1" />
        <Background />
        <div className="container position-relative">
          <div className="main-content-wrap ">
            <div className="new_password_input" id="new-card-inputs">
              <div className="mt-2">
                <label className="info-person" htmlFor="username">
                  Total Amount
                </label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    id="username"
                    defaultValue="10000"
                    autoComplete="off"
                    className="p-1 color-black"
                    required
                  />
                </div>
              </div>
              <div className="mt-2">
                <label className="info-person" htmlFor="username">
                  Paid Amount
                </label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    id="username"
                    defaultValue="10000"
                    autoComplete="off"
                    className="p-1 color-black"
                    required
                  />
                </div>
              </div>
              <div className="pt-2">
                <label className="info-person" htmlFor="cardNumber">
                  Payment Method
                </label>

                <div className="language-selector pt-2">
                  <div className="language-sec-wrap">
                    <div className="language-name">
                      <div className="language-name-wrap">
                        <div>
                          <p>By Cash</p>
                        </div>
                        <div className="form-check ps-0">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="currency"
                            defaultValue="USD"
                            id="currency1"
                            defaultChecked
                          />
                          <label htmlFor="currency2" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="language-sec-wrap pt-8">
                    <div className="language-name">
                      <div className="language-name-wrap">
                        <div>
                          <p>By UPI</p>
                        </div>
                        <div className="form-check ps-0">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="currency"
                            defaultValue="CAD"
                            id="currency2"
                          />
                          <label htmlFor="currency2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-2">
                <label className="info-person" htmlFor="username">
                  Notes
                </label>
                <div className="input-wrapper">
                  <textarea
                    rows="4"
                    cols="50"
                    placeholder="Write here..."
                    class="custom-textarea"
                    id="textarea"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="sign-up-btn fixed">
              <a href="/signature">Next</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WorkDataPage;
