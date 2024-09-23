import React, { useContext, useState } from "react";
import apiCall from "../../services/APICall";
import { useNavigate } from "react-router-dom";
import { showToast } from "../../utils/Toast";
import { ContextDatas } from "../../services/Context";
import Background from "../../components/common/Background";

function CashCustomer() {
  const { Profile } = useContext(ContextDatas);
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
    cashMemoDetails.staff = Profile?._id;
    const response = await apiCall("post", `/cash-customers`, cashMemoDetails);
    if (response?.status) {
      showToast("Cash Memo created successfully!", true);
      navigate(`/clients`); // Redirect after successful submission
    } else {
      showToast("Failed to create Cash Memo", false);
    }
  };
  return (
    <div style={{ height: "100vh" }}>
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
                    className="p-1 color-black"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="sign-up-btn fixed">
              <button type="button" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CashCustomer;
