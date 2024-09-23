import React, { useRef, useState } from "react";
import Background from "../../components/common/Background";
import { useNavigate, useParams } from "react-router-dom";
import apiCall from "../../services/APICall";
import { showToast } from "../../utils/Toast";
import axios from "axios";

function WorkDataPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const { id } = useParams();
  const fileInputRef = useRef(null);
  let navigate = useNavigate();
  const [workPendingDetails, setworkPendingDetails] = useState({
    totalAmt: null,
    note: null,
  });

  const handlePaymentMethodChange = (event) => {
    setworkPendingDetails({
      ...workPendingDetails,
      method: event.target.value, // Update the method value
    });
  };

  const handleSubmit = async () => {
    const response = await apiCall("put", `/works/${id}`, workPendingDetails);
    if (response?.status) {
      showToast("services List Updated ", true);
      return navigate(`/signature/${id}`);
    }
  };

  // Handle image selection
  const handleImageChange = (event) => {
    // axios.post();
    setSelectedImage(event.target.files[0]); // Store the selected image file
  };

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
                  Total Price
                </label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    value={workPendingDetails?.totalAmt || ""} // Default to empty string if undefined
                    onChange={(e) =>
                      setworkPendingDetails({
                        ...workPendingDetails,
                        totalAmt: e.target.value,
                      })
                    }
                    id="username"
                    placeholder="Total Price"
                    autoComplete="off"
                    className="p-1 color-black"
                    required
                  />
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
                    value={workPendingDetails?.note || ""}
                    onChange={(e) =>
                      setworkPendingDetails({
                        ...workPendingDetails,
                        note: e.target.value,
                      })
                    }
                    placeholder="Notes"
                    className="custom-textarea"
                    id="textarea"
                  ></textarea>
                </div>
              </div>
              {/* Image Upload Section */}
              <div className="mt-2">
                <label className="info-person">Upload Image</label>
                <div className="input-wrapper">
                  {/* Hidden file input */}
                  <input
                    type="file"
                    id="imageUpload"
                    accept="image/*" // Only allow image files
                    onChange={handleImageChange}
                    className="form-control"
                    style={{ display: "none" }} // Hide the input field
                    ref={fileInputRef} // Attach the ref to input
                  />

                  {/* Custom upload button */}
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => fileInputRef.current.click()} // Trigger the file input click
                  >
                    Upload Image
                  </button>
                </div>

                {/* Display selected image preview */}
                {selectedImage && (
                  <div className="mt-2">
                    <img
                      src={URL.createObjectURL(selectedImage)}
                      alt="Selected"
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="sign-up-btn fixed">
              <button type="button" onClick={handleSubmit}>
                Next
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WorkDataPage;
