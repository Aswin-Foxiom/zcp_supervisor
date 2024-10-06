import React, { useContext, useEffect, useState } from "react";
import Background from "../../components/common/Background";
import useFetchData from "../../services/UseQuery";
import apiCall from "../../services/APICall";
import { Checkbox } from "primereact/checkbox";
import { showToast } from "../../utils/Toast";
import { useNavigate, useParams } from "react-router-dom";
import { ContextDatas } from "../../services/Context";
import Loader from "../../components/common/Loader";
import ConfirmModal from "../../components/common/ConfirmModal";

function WorkPage() {
  const { Profile } = useContext(ContextDatas);
  const { id } = useParams();
  const [confirm, setconfirm] = useState(false);
  const [loading, setloading] = useState(false);
  let navigate = useNavigate();
  const [type, setType] = useState("cleaning");
  const [servicesListState, setServicesListState] = useState([]);
  const [previousWorkData, setPreviousWorkData] = useState([]);
  const [fromDate, setFromDate] = useState(""); // From Date state
  const [toDate, setToDate] = useState(""); // To Date state
  // Fetching services based on type
  const getServices = async () => {
    try {
      const response = await apiCall("get", `/services`, null, {
        type: type,
        isActive: true,
      });
      if (response?.status) {
        return response?.data?.docs || null; // Return data or an empty array
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error fetching client details", error);
      return null;
    }
  };

  const {
    data: servicesList,
    isLoading: servicesLoading,
    isFetching: servicesFetching,
    isError: servicesError,
    error: servicesErrorMessage,
    refetch: refetchDetails,
  } = useFetchData(
    `services`, // Key for the query
    null, // Page number
    null, // Limit for pagination
    getServices, // Fetch function
    type
  );

  useEffect(() => {
    if (servicesList) {
      setServicesListState(servicesList);
    }
  }, [servicesList]);

  // Handle checkbox change
  const handleCheckboxChange = (index) => {
    const updatedServices = servicesListState.map((service, key) => {
      if (key === index) {
        return { ...service, isSelected: !service.isSelected }; // Toggle isSelected
      }
      return service;
    });
    setServicesListState(updatedServices); // Update state with new list
  };

  // Handle input value change for selected services
  const handleInputChange = (index, value) => {
    const updatedServices = servicesListState.map((service, key) => {
      if (key === index) {
        return { ...service, inputValue: value }; // Set input value for the selected checkbox
      }
      return service;
    });
    setServicesListState(updatedServices);
  };

  // Handle Next button click
  const handleSubmit = async () => {
    const selectedServices = servicesListState
      .filter((service) => service.isSelected)
      .map((service) => ({
        serviceId: service._id,
        count: service.inputValue || "", // If input field was filled
      }));

    if (!selectedServices || selectedServices?.length === 0) {
      showToast("Please fill atleast one service", false);
      return;
    } else {
      const body = {
        services: selectedServices,
        serviceType: type,
      };
      setloading(true);
      const response = await apiCall("put", `/works/${id}`, body);
      setloading(false);
      if (response?.status) {
        showToast("services List Updated", true);
        return navigate(`/work-datas/${id}`);
      }
    }
  };

  // useEffect(() => {
  //   getWorkDetails();
  // }, [id]);

  // const getWorkDetails = async () => {
  //   const response = await apiCall("get", `/works/${id}`);
  //   if (response?.status) {
  //     console.log("THE WORK DETAILS", response);
  //     const { services, serviceType } = response.data;

  //     // Update the services list state with response data
  //     const formattedServices = services.map((service) => ({
  //       ...service,
  //       isSelected: true, // Assuming the services are selected by default
  //       inputValue: service.count || "", // Populate the count if available
  //     }));

  //     // Set the service type and services list state
  //     setType(serviceType);
  //     setServicesListState(formattedServices);
  //   }
  // };

  // Handle Previous Data Filter (fromDate and toDate filter)
  const handlePreviousSubmit = async () => {
    const params = {
      client: localStorage.getItem("clientId"), // Pass the actual client ID
      staff: Profile?._id, // Pass the actual staff ID
      fromDate,
      toDate,
    };

    const response = await apiCall("get", `/works`, null, params);
    if (response?.status) {
      showToast("Previous work data fetched", true);
      // Handle the response and update your UI based on previous work data
      console.log(response.data);
      setPreviousWorkData(response?.data?.docs); // Store the response data in state
    }
  };

  if (servicesLoading || servicesFetching) {
    return <Loader />;
  }
  return (
    <div style={{ minHeight: "100vh", paddingBottom: "50px" }}>
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
              </div>

              <div className="main-content-wrap">
                {type === "cleaning" || type === "pest" ? (
                  <>
                    {servicesListState?.length ? (
                      <div className="language-selector pt-24">
                        {servicesListState?.map((value, key) => (
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
                                <p>No Services Found </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  ""
                )}

                {type === "previous" && (
                  <>
                    {/* From Date and To Date Filters */}
                    <div className="date-filter pt-24">
                      <div className="form-group">
                        <label htmlFor="fromDate">From Date</label>
                        <input
                          type="date"
                          id="fromDate"
                          className="form-control"
                          value={fromDate}
                          onChange={(e) => setFromDate(e.target.value)}
                        />
                      </div>
                      <div className="form-group pt-2">
                        <label htmlFor="toDate">To Date</label>
                        <input
                          type="date"
                          id="toDate"
                          className="form-control"
                          value={toDate}
                          onChange={(e) => setToDate(e.target.value)}
                        />
                      </div>
                      <button
                        className="btn btn-primary mt-3"
                        onClick={handlePreviousSubmit}
                      >
                        Filter Previous Work
                      </button>
                    </div>

                    {/* Render Previous Work Data */}
                    {previousWorkData.length > 0 ? (
                      previousWorkData.map((work) => (
                        <div
                          onClick={() =>
                            work?.status === "completed"
                              ? navigate(`/reports/${work?._id}`)
                              : ""
                          }
                          className="checkout-second border-green mt-24"
                          key={work._id}
                        >
                          <div className="delivery-address-content">
                            <div className="second-order-sec border-0 pb-0">
                              <div className="cart-title">
                                <h3>
                                  {work.serviceType === "pest"
                                    ? "Pest Control"
                                    : work.serviceType}
                                </h3>
                              </div>
                            </div>
                          </div>

                          <div className="delivery-bottom">
                            <div className="cart-title">
                              <h3 className="text-start pt-12">
                                {work.client.contactName} (Client)
                              </h3>
                              <div className="checkout-no pt-8">
                                <a href={`tel:${work.client.contact}`}>
                                  {work.client.contact}
                                </a>
                              </div>
                              <p className="mt-8">
                                Service Amount: {work.totalAmt} <br />
                                Status: {work.status}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p>No previous work found for the selected dates.</p>
                    )}
                  </>
                )}
              </div>

              <ConfirmModal
                next={handleSubmit}
                setVisible={() => setconfirm(false)}
                visible={confirm}
                message="Do You want to continue this step ?"
              />

              {type === "previous" ? (
                ""
              ) : (
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
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WorkPage;
