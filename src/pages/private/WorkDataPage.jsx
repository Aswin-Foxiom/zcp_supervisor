import React, { useRef, useState } from "react";
import Background from "../../components/common/Background";
import { useNavigate, useParams } from "react-router-dom";
import apiCall from "../../services/APICall";
import { showToast } from "../../utils/Toast";
import axios from "axios";
import { baseUrl } from "../../services/Urls";

function WorkDataPage() {
  const [selectedImage, setSelectedImage] = useState([]);
  const { id } = useParams();
  const fileInputRef = useRef(null);
  let navigate = useNavigate();
  const [workPendingDetails, setworkPendingDetails] = useState({
    totalAmt: null,
    note: null,
    typeOfService: "cash",
  });

  const handleSubmit = async () => {
    console.log(workPendingDetails);
    workPendingDetails.attachments = selectedImage;
    const response = await apiCall("put", `/works/${id}`, workPendingDetails);
    if (response?.status) {
      showToast("services List Updated ", true);
      return navigate(`/signature/${id}`);
    }
  };

  // Handle image selection
  const handleImageChange = async (event) => {
    console.log(event);
    const file = event.target.files[0];
    // setSelectedImage(file); // Store the selected image file

    if (!file) return;

    // Create FormData object and append the selected image
    const formData = new FormData();
    formData.append("files", file);

    try {
      // Send POST request using Axios
      const response = await axios.post(`${baseUrl}/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Required for file uploads
          access: "supervisor",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });

      // Handle success response
      if (response.status === 200) {
        setSelectedImage((prevImages) => [
          ...prevImages,
          response?.data?.data[0],
        ]);
      }
    } catch (error) {
      // Handle error response

      alert("Failed to upload image. Please try again.");
    }
  };

  return (
    <div style={{ height: "120vh" }}>
      <section id="add-new-card" className="background1">
        <div className="onboarding-bg-img1" />
        <Background />
        <div className="container position-relative">
          <div className="main-content-wrap ">
            <div className="new_password_input" id="new-card-inputs">
              <div className="mt-2">
                <label className="info-person" htmlFor="serviceType">
                  Type of service
                </label>
                <div className="language-selector pt-2">
                  <div className="row">
                    {/* First column (Cash and Contact) */}
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
                                name="serviceType"
                                value="cash"
                                checked={
                                  workPendingDetails?.typeOfService === "cash"
                                }
                                onChange={(e) =>
                                  setworkPendingDetails({
                                    ...workPendingDetails,
                                    typeOfService: "cash",
                                  })
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="language-sec-wrap pt-4">
                        <div className="language-name">
                          <div className="language-name-wrap">
                            <div>
                              <p>Contact</p>
                            </div>
                            <div className="form-check ps-0">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="serviceType"
                                value="contact"
                                checked={
                                  workPendingDetails?.typeOfService ===
                                  "contact"
                                }
                                onChange={(e) =>
                                  setworkPendingDetails({
                                    ...workPendingDetails,
                                    typeOfService: "contact",
                                  })
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Second column (One Time and Follow Up) */}
                    <div className="col-6">
                      <div className="language-sec-wrap">
                        <div className="language-name">
                          <div className="language-name-wrap">
                            <div>
                              <p>One Time</p>
                            </div>
                            <div className="form-check ps-0">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="serviceType"
                                value="onetime"
                                checked={
                                  workPendingDetails?.typeOfService ===
                                  "onetime"
                                }
                                onChange={(e) =>
                                  setworkPendingDetails({
                                    ...workPendingDetails,
                                    typeOfService: "onetime",
                                  })
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="language-sec-wrap pt-4">
                        <div className="language-name">
                          <div className="language-name-wrap">
                            <div>
                              <p>Follow up</p>
                            </div>
                            <div className="form-check ps-0">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="serviceType"
                                value="followup"
                                checked={
                                  workPendingDetails?.typeOfService ===
                                  "followup"
                                }
                                onChange={(e) =>
                                  setworkPendingDetails({
                                    ...workPendingDetails,
                                    typeOfService: "followup",
                                  })
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

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
                    id="fileUpload"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="file-input" // Class for hidden file input
                    style={{ display: "none" }} // Hide the actual input
                  />

                  {/* Custom upload button */}
                  <button
                    type="button"
                    className="custom-upload-btn"
                    onClick={() =>
                      document.getElementById("fileUpload").click()
                    } // Trigger hidden input click
                  >
                    Upload Image
                  </button>
                </div>

                {/* Display selected image preview */}
                {selectedImage.length > 0 && (
                  <div className="mt-2">
                    <div className="image-preview-container">
                      {selectedImage.map((image, index) => (
                        <div key={index} className="image-preview">
                          <img
                            src={`${baseUrl}/${image}`}
                            alt={`Selected ${index + 1}`}
                            style={{
                              width: "100px",
                              borderRadius: "10px",
                              height: "100px",
                              objectFit: "cover",
                              marginRight: "10px", // Optional: adds spacing between images
                            }}
                          />
                        </div>
                      ))}
                    </div>
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
