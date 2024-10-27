import React, { useState } from "react";
import Background from "../../components/common/Background";
import { Checkbox } from "primereact/checkbox";
import ConfirmModal from "../../components/common/ConfirmModal";
import { showToast } from "../../utils/Toast";
import { useNavigate, useParams } from "react-router-dom";
import apiCall from "../../services/APICall";
const datas = [
  { name: "SC (ML)", isSelected: false },
  { name: "EC (ML)", isSelected: false },
  { name: "GEL (GRAM)", isSelected: false },
  { name: "RAT GLUE TRAP (PCS)", isSelected: false },
  { name: "FLY TRAP (PCS)", isSelected: false },
  { name: "FLY RIBBON (PCS)", isSelected: false },
  { name: "POWDER (GRAM)", isSelected: false },
  { name: "PASTA (PCS)", isSelected: false },
  { name: "WAX (PCS)", isSelected: false },
];
function MaterialsUsed() {
  let navigate = useNavigate();
  const [materialsUsedList, setmaterialsUsedList] = useState(datas);
  const [confirm, setconfirm] = useState(false);
  const { id } = useParams();

  const [loading, setloading] = useState(false);
  const handleCheckboxChange = (index) => {
    const updatedmaterialss = materialsUsedList.map((materials, key) => {
      if (key === index) {
        return { ...materials, isSelected: !materials.isSelected }; // Toggle isSelected
      }
      return materials;
    });
    setmaterialsUsedList(updatedmaterialss); // Update state with new list
  };

  // Handle input value change for selected materialss
  const handleInputChange = (index, value) => {
    const updatedmaterialss = materialsUsedList.map((materials, key) => {
      if (key === index) {
        return { ...materials, inputValue: value }; // Set input value for the selected checkbox
      }
      return materials;
    });
    setmaterialsUsedList(updatedmaterialss);
  };

  const handleSubmit = async () => {
    const selectedmaterialss = materialsUsedList
      .filter((materials) => materials.isSelected)
      .map((materials) => ({
        material: materials.name, // Assign the material name to the type
        count: materials.inputValue || "", // If input field was filled
      }));

    if (!selectedmaterialss || selectedmaterialss.length === 0) {
      showToast("Please fill at least one material", false);
      return;
    } else {
      const body = {
        materialsUsed: selectedmaterialss, // Use materialsUsed instead of materialss
      };
      console.log(body);
      setloading(true);
      const response = await apiCall("put", `/works/${id}`, body);
      setloading(false);
      if (response?.status) {
        showToast("Materials List Updated", true);
        return navigate(`/signature/${id}`);
      }
    }
  };

  return (
    <>
      <div>
        <section
          id="empty-order-main"
          className="background1"
          style={{ minHeight: "100vh" }}
        >
          <Background />
          <div className="container position-relative">
            <div className="main-content-wrap">
              <div className="empty-cart-wrap pt-24">
                {/* <div className="empty-order-content">
                <ul
                  className="nav nav-pills"
                  id="empty-order-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link empty-order-content-tab-btn ${
                        type === "cleaning" ? "active" : ""
                      }`}
                      id="pills-active-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-active"
                      type="button"
                      role="tab"
                      onClick={() => setType("cleaning")}
                      aria-selected="true"
                    >
                      Cleaning
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link empty-order-content-tab-btn ${
                        type === "pest" ? "active" : ""
                      }`}
                      id="pills-completed-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-completed"
                      type="button"
                      role="tab"
                      onClick={() => setType("pest")}
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
                      onClick={() => setType("previous")}
                      aria-selected="false"
                    >
                      Previous
                    </button>
                  </li>
                </ul>
              </div> */}

                <div className="main-content-wrap">
                  {materialsUsedList?.length ? (
                    <div className="language-selector pt-24">
                      {materialsUsedList?.map((value, key) => (
                        <div className="language-sec-wrap pt-8" key={key}>
                          <div className="language-name">
                            <div className="language-name-wrap">
                              <div>
                                <p>{value?.name}</p>
                              </div>
                              <Checkbox
                                checked={value?.isSelected ?? false}
                                onChange={() => handleCheckboxChange(key)}
                              />
                            </div>
                            {/* Show input field if checkbox is selected */}
                            {value?.isSelected && (
                              <input
                                type="text"
                                className="form-control mt-2"
                                placeholder="Enter text"
                                value={value?.inputValue || ""}
                                onChange={(e) =>
                                  handleInputChange(key, e.target.value)
                                }
                              />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="language-selector pt-24">
                      <div className="language-sec-wrap pt-8">
                        <div className="language-name">
                          <div className="language-name-wrap">
                            <div>
                              <p>No materialss Found </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <ConfirmModal
                  next={handleSubmit}
                  setVisible={() => setconfirm(false)}
                  visible={confirm}
                  message="Do You want to continue this step ?"
                />

                <div className="sign-up-btn fixed pt-32">
                  {loading ? (
                    <button type="submit" style={{ backgroundColor: "black" }}>
                      Loading ...
                    </button>
                  ) : (
                    <button
                      type="button"
                      // onClick={handleSubmit}
                      onClick={() => setconfirm(true)}
                    >
                      Next
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default MaterialsUsed;
