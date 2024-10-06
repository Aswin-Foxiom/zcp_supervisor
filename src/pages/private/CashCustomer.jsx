import React, { useContext, useState } from "react";
import apiCall from "../../services/APICall";
import { useNavigate } from "react-router-dom";
import { showToast } from "../../utils/Toast";
import { ContextDatas } from "../../services/Context";
import Background from "../../components/common/Background";

function CashCustomer() {
  const { Profile } = useContext(ContextDatas);
  const [loading, setloading] = useState(false);
  let navigate = useNavigate();

  // State for holding form data
  const [cashMemoDetails, setCashMemoDetails] = useState({
    name: "",
    contact: "",
    flat: "",
    building: "",
    road: "",
    block: "",
    totalAmt: "",
    serviceType: "pest", // New field for service type
    paymentMethod: "cash", // New field for payment method
  });

  // Handle input changes for text fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCashMemoDetails({
      ...cashMemoDetails,
      [name]: value,
    });
  };

  // Submit the form data to the server
  const handleSubmit = async () => {
    if (!cashMemoDetails.name || !cashMemoDetails.contact) {
      showToast("Name and Contact are required fields", false);
      return;
    }
    cashMemoDetails.staff = Profile?._id;
    setloading(true);
    const response = await apiCall("post", `/cash-customers`, cashMemoDetails);
    setloading(false);
    if (response?.status) {
      showToast("Cash Customer created successfully!", true);
      navigate(`/clients`); // Redirect after successful submission
    } else {
      showToast("Failed to create Cash Customer", false);
    }
  };
  return (
    <div style={{ height: "150vh" }}>
      <section id="add-new-card" className="background1">
        <div className="onboarding-bg-img1" />
        <Background />

        <div className="container position-relative">
          <div className="main-content-wrap">
            <div
              className="new_password_input"
              style={{ marginBottom: "500px" }}
            >
              {/* Name Input */}
              <div className="mt-2">
                <label className="info-person" htmlFor="name">
                  Name
                </label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    name="name"
                    value={cashMemoDetails.name}
                    onChange={handleInputChange}
                    className="p-1 color-black"
                    placeholder="Name"
                    required
                  />
                </div>
              </div>

              {/* Contact Input */}
              <div className="mt-2">
                <label className="info-person" htmlFor="contact">
                  Contact
                </label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    name="contact"
                    value={cashMemoDetails.contact}
                    onChange={handleInputChange}
                    className="p-1 color-black"
                    placeholder="Contact"
                    required
                  />
                </div>
              </div>

              {/* Flat Input */}
              <div className="mt-2">
                <label className="info-person" htmlFor="flat">
                  Flat
                </label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    name="flat"
                    value={cashMemoDetails.flat}
                    onChange={handleInputChange}
                    placeholder="Flat"
                    className="p-1 color-black"
                  />
                </div>
              </div>

              {/* Building Input */}
              <div className="mt-2">
                <label className="info-person" htmlFor="building">
                  Building
                </label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    name="building"
                    value={cashMemoDetails.building}
                    onChange={handleInputChange}
                    placeholder="Building"
                    className="p-1 color-black"
                  />
                </div>
              </div>

              {/* Road Input */}
              <div className="mt-2">
                <label className="info-person" htmlFor="road">
                  Road
                </label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    name="road"
                    value={cashMemoDetails.road}
                    onChange={handleInputChange}
                    placeholder="Road"
                    className="p-1 color-black"
                  />
                </div>
              </div>

              {/* Block Input */}
              <div className="mt-2">
                <label className="info-person" htmlFor="block">
                  Block
                </label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    name="block"
                    value={cashMemoDetails.block}
                    onChange={handleInputChange}
                    placeholder="Block"
                    className="p-1 color-black"
                  />
                </div>
              </div>

              {/* Total Amount Input */}
              <div className="mt-2">
                <label className="info-person" htmlFor="totalAmt">
                  Total Amount
                </label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    name="totalAmt"
                    value={cashMemoDetails.totalAmt}
                    onChange={handleInputChange}
                    placeholder="Total Amount"
                    className="p-1 color-black"
                    required
                  />
                </div>
              </div>

              {/* Service Type Radio Buttons */}
              {/* <div className="mt-2">
                <label className="info-person" htmlFor="serviceType">
                  Service Type
                </label>
                <div className="input-wrapper">
                  <div>
                    <input
                      type="radio"
                      name="serviceType"
                      value="Pest"
                      checked={cashMemoDetails.serviceType === "Pest"}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="pest">Pest</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="serviceType"
                      value="Cleaning"
                      checked={cashMemoDetails.serviceType === "Cleaning"}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="cleaning">Cleaning</label>
                  </div>
                </div>
              </div> */}

              {/* Payment Method Radio Buttons */}
              {/* <div className="mt-2">
                <label className="info-person" htmlFor="paymentMethod">
                  Payment Method
                </label>
                <div className="input-wrapper">
                  <div>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="Cash"
                      checked={cashMemoDetails.paymentMethod === "Cash"}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="cash">Cash</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="BenefitPay"
                      checked={cashMemoDetails.paymentMethod === "BenefitPay"}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="benefitpay">BenefitPay</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="Not Paid"
                      checked={cashMemoDetails.paymentMethod === "Not Paid"}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="not-paid">Not Paid</label>
                  </div>
                </div>
              </div> */}

              {/* Service Type Radio Buttons */}
              <div className="mt-2">
                <label className="info-person" htmlFor="serviceType">
                  Service Type
                </label>
                <div className="language-selector pt-2">
                  <div className="row">
                    <div className="col-6">
                      <div className="language-sec-wrap">
                        <div className="language-name">
                          <div className="language-name-wrap">
                            <div>
                              <p>Pest</p>
                            </div>
                            <div className="form-check ps-0">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="serviceType" // Use name="serviceType"
                                value="pest" // Set value for service type "pest"
                                checked={
                                  cashMemoDetails?.serviceType === "pest"
                                }
                                onChange={handleInputChange} // Use handleInputChange
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="language-sec-wrap ">
                        <div className="language-name">
                          <div className="language-name-wrap">
                            <div>
                              <p>Cleaning</p>
                            </div>
                            <div className="form-check ps-0">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="serviceType" // Use name="serviceType"
                                value="cleaning" // Set value for service type "cleaning"
                                checked={
                                  cashMemoDetails?.serviceType === "cleaning"
                                }
                                onChange={handleInputChange} // Use handleInputChange
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Method Radio Buttons */}
              <div className="mt-2">
                <label className="info-person" htmlFor="paymentMethod">
                  Payment Method
                </label>
                <div className="language-selector pt-2">
                  <div className="row">
                    <div className="col-6">
                      <div className="language-sec-wrap">
                        <div className="language-name">
                          <div className="language-name-wrap">
                            <div>
                              <p>Cash</p>
                            </div>
                            <div className="form-check ps-0">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="paymentMethod" // Use name="paymentMethod"
                                value="cash" // Set value for payment method "cash"
                                checked={
                                  cashMemoDetails?.paymentMethod === "cash"
                                }
                                onChange={handleInputChange} // Use handleInputChange
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="language-sec-wrap ">
                        <div className="language-name">
                          <div className="language-name-wrap">
                            <div>
                              <p>Benefit Pay</p>
                            </div>
                            <div className="form-check ps-0">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="paymentMethod" // Use name="paymentMethod"
                                value="benefitPay" // Set value for payment method "benefitPay"
                                checked={
                                  cashMemoDetails?.paymentMethod ===
                                  "benefitPay"
                                }
                                onChange={handleInputChange} // Use handleInputChange
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="language-sec-wrap pt-3">
                        <div className="language-name">
                          <div className="language-name-wrap">
                            <div>
                              <p>Not Paid</p>
                            </div>
                            <div className="form-check ps-0">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="paymentMethod" // Use name="paymentMethod"
                                value="notpaid" // Set value for payment method "notpaid"
                                checked={
                                  cashMemoDetails?.paymentMethod === "notpaid"
                                }
                                onChange={handleInputChange} // Use handleInputChange
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="sign-up-btn fixed">
              {loading ? (
                <button type="submit" style={{ backgroundColor: "black" }}>
                  Loading ...
                </button>
              ) : (
                <button type="button" onClick={handleSubmit}>
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CashCustomer;
