import React, { useContext, useState } from "react";
import Background from "../../components/common/Background";
import useFetchData from "../../services/UseQuery";
import { useNavigate, useParams } from "react-router-dom";
import apiCall from "../../services/APICall";
import { ContextDatas } from "../../services/Context";
import { getClientTypeLabel } from "../../utils/HelperFun";
import Loader from "../../components/common/Loader";
import { Sidebar } from "primereact/sidebar";

function ClientDetails() {
  const { Profile } = useContext(ContextDatas); // Assuming this provides the staff details
  let navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const [bottomNav, setbottomNav] = useState(false);
  const [memrDatas, setmemrDatas] = useState({
    building: "",
    flat: "",
  });
  const { id } = useParams();

  // Function to fetch client details
  const getDetails = async () => {
    try {
      const response = await apiCall("get", `/clients/${id}`);
      if (response?.status) {
        console.log("THE CLIENT", response?.data);
        return response?.data || null; // Return the client data
      } else {
        return null; // Return null on failure
      }
    } catch (error) {
      console.error("Error fetching client details", error);
      return null;
    }
  };

  // Use useFetchData hook to handle fetching data
  const {
    data: clientDetails,
    isLoading: clientsLoading,
    isFetching: clientsFetching,
    isError: clientsError,
    error: clientsErrorMsg,
    refetch: refetchDetails,
  } = useFetchData(
    `clientData/${id}`, // Query key for caching
    null, // Page number
    null, // Pagination limit
    getDetails // Fetch function
  );

  // Function to start work
  const startWork = async () => {
    if (!clientDetails || !Profile) {
      console.error("Client or Staff data is missing");
      return;
    }

    const body = {
      client: clientDetails?._id,
      staff: Profile?._id,
      // serviceType: "cleaning", // Assuming the service type is "cleaning"
      building: memrDatas?.building,
      flat: memrDatas?.flat,
    };
    setloading(true);
    const response = await apiCall("post", "/works", body);
    setloading(false);
    setmemrDatas({ building: "", flat: "" });
    if (response?.status) {
      console.log("THE WORK RESPONSE", response);
      localStorage.setItem("clientId", id);
      localStorage.setItem("workId", response?.data);
      return navigate(`/work/${response?.data}`);
    } else {
      console.error("Error starting work");
    }
  };

  // Loading and error handling
  if (clientsLoading || clientsFetching) {
    return <Loader />;
  }

  if (clientsError) {
    return <div>Error loading client details: {clientsErrorMsg}</div>;
  }

  return (
    <div style={{ height: "100vh" }}>
      <section id="single-clothes-main" className="background1">
        <Background />
        <div className="main-content-wrap-single">
          <div className="position-relative">
            <div className="main-content-wrap container">
              <div className="single-clothes-wrap">
                {clientDetails ? (
                  <>
                    <div className="single-clothes-details pt-24">
                      <h1>{clientDetails?.name}</h1>
                    </div>
                    <div className="single-clothes-review pt-24">
                      {clientDetails?.locationUrl ? (
                        <div className="sign-up-btn">
                          <button
                            style={{ backgroundColor: "blue" }}
                            type="button"
                            onClick={() =>
                              window.open(clientDetails?.locationUrl, "_blank")
                            }
                          >
                            Navigate to Map
                          </button>
                        </div>
                      ) : null}
                    </div>
                    <div className="additional-info pt-24">
                      <div className="overview-txt">
                        <h2>Additional Info:</h2>
                      </div>
                      <div className="additional-info-content pt-12">
                        <div>Contact Name</div>
                        <div>{clientDetails?.contactName}</div>
                      </div>
                      <div className="additional-info-content pt-12">
                        <div>Contact</div>
                        <div>{clientDetails?.contact}</div>
                      </div>
                      <div className="additional-info-content pt-4">
                        <div>Client Type</div>
                        <div>{getClientTypeLabel(clientDetails?.type)}</div>
                      </div>
                      <div className="additional-info-content pt-4">
                        <div>Active Status</div>
                        <div>
                          {clientDetails?.isActive ? "Active" : "Inactive"}
                        </div>
                      </div>

                      {/* Conditionally render Flat if it exists and has items */}
                      {clientDetails?.flat?.length > 0 && (
                        <div className="additional-info-content pt-4">
                          <div>Flat</div>
                          <div>{clientDetails?.flat.join(", ")}</div>
                        </div>
                      )}

                      {/* Conditionally render Building if it exists and has items */}
                      {clientDetails?.building?.length > 0 && (
                        <div className="additional-info-content pt-4">
                          <div>Building</div>
                          <div>{clientDetails?.building.join(", ")}</div>
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <>No client details found</>
                )}
              </div>
            </div>
          </div>
          <div className="single-clothes-bottom container">
            <div className="sign-up-btn pt-16">
              {loading ? (
                <button type="submit" style={{ backgroundColor: "black" }}>
                  Loading ...
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() =>
                    clientDetails?.type === "B2B2C"
                      ? setbottomNav(true)
                      : startWork()
                  }
                >
                  Start Work
                </button>
              )}
            </div>
          </div>
        </div>

        <Sidebar
          visible={bottomNav}
          position="bottom"
          style={{ height: "50%" }}
          onHide={() => setbottomNav(false)}
        >
          <section id="add-new-card" className="background1">
            <div className="onboarding-bg-img1" />
            <Background />
            <div className="container position-relative">
              <div className="main-content-wrap ">
                <div className="new_password_input" id="new-card-inputs">
                  <div className="mt-2">
                    <label className="info-person" htmlFor="username">
                      Building
                    </label>
                    <div className="input-wrapper">
                      <input
                        type="text"
                        id="building"
                        value={memrDatas?.building || ""}
                        onChange={(e) =>
                          setmemrDatas({
                            ...memrDatas,
                            building: e.target.value,
                          })
                        }
                        autoComplete="off"
                        className="p-1 color-black"
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-2">
                    <label className="info-person" htmlFor="username">
                      Flat
                    </label>
                    <div className="input-wrapper">
                      <input
                        type="text"
                        id="flat"
                        value={memrDatas?.flat || ""}
                        onChange={(e) =>
                          setmemrDatas({
                            ...memrDatas,
                            flat: e.target.value,
                          })
                        }
                        autoComplete="off"
                        className="p-1 color-black"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="sign-up-btn fixed">
                  {loading ? (
                    <button type="submit" style={{ backgroundColor: "black" }}>
                      Loading ...
                    </button>
                  ) : (
                    <button type="button" onClick={startWork}>
                      Start Work
                    </button>
                  )}
                </div>
              </div>
            </div>
          </section>
        </Sidebar>
      </section>
    </div>
  );
}

export default ClientDetails;
