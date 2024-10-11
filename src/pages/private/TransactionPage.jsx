import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import Background from "../../components/common/Background";
import { showToast } from "../../utils/Toast";
import apiCall from "../../services/APICall";

function TransactionPage({ invoiceId, show, setshow }) {
  const [workPendingDetails, setworkPendingDetails] = useState({
    paid: null,
    method: "cash",
  });
  const [transactionLoading, settransactionLoading] = useState(false);

  const handlePaymentMethodChange = (event) => {
    setworkPendingDetails({
      ...workPendingDetails,
      method: event.target.value, // Update the method value
    });
  };

  const handleSubmit = async () => {
    const body = {
      invoice: invoiceId,
      paidAmt: workPendingDetails?.paid,
      paymentMethod: workPendingDetails?.method,
    };
    console.log("THE BODY", body);
    const response = await apiCall("post", `/transactions`, body);
    if (response?.status) {
      showToast("Transaction added", true);
      setshow(false);
    }
  };

  return (
    <div className="card">
      <Sidebar
        visible={show}
        position="bottom"
        style={{ height: "80%" }}
        onHide={() => setshow(false)}
      >
        <section id="add-new-card" className="background1">
          <div className="onboarding-bg-img1" />
          <Background />
          <div className="container position-relative">
            <div className="main-content-wrap ">
              <div className="new_password_input" id="new-card-inputs">
                <div className="mt-2">
                  <label className="info-person" htmlFor="username">
                    Paid Price
                  </label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      id="username"
                      value={workPendingDetails?.paid || ""}
                      onChange={(e) =>
                        setworkPendingDetails({
                          ...workPendingDetails,
                          paid: e.target.value,
                        })
                      }
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
                              value="cash" // Set value for cash
                              id="currency1"
                              checked={workPendingDetails.method === "cash"}
                              onChange={handlePaymentMethodChange} // Add onChange handler
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
                              value="upi" // Set value for UPI
                              id="currency2"
                              checked={workPendingDetails.method === "upi"}
                              onChange={handlePaymentMethodChange} // Add onChange handler
                            />
                            <label htmlFor="currency2" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sign-up-btn fixed">
                {transactionLoading ? (
                  <button type="submit" style={{ backgroundColor: "black" }}>
                    Loading ...
                  </button>
                ) : (
                  <button type="button" onClick={handleSubmit}>
                    Save
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>
      </Sidebar>
    </div>
  );
}

export default TransactionPage;
