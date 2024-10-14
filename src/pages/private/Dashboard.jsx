import React, { useContext, useEffect, useState } from "react";
import Background from "../../components/common/Background";
import { ContextDatas } from "../../services/Context";
import apiCall from "../../services/APICall";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/common/Loader";

function Dashboard() {
  const [loading, setloading] = useState(true);
  const { Profile } = useContext(ContextDatas);
  const [pendingWorks, setpendingWorks] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    if (Profile) {
      getOngoingWork();
    }
  }, [Profile]);

  const getOngoingWork = async () => {
    const params = {
      staff: Profile?._id, // Pass the actual staff ID
      status: "ongoing",
    };
    setloading(true);
    const response = await apiCall("get", `/works`, null, params);
    setloading(false);
    if (response?.status) {
      console.log(response);
      setpendingWorks(response?.data?.docs ?? []);
    }
  };
  return (
    <section
      id="homescreen-main"
      className="background1"
      style={{ minHeight: "100vh" }}
    >
      <Background />
      {loading ? (
        <Loader />
      ) : (
        <div classname="homecreen1-content">
          <div className="container position-relative">
            <div className="main-content-wrap pt-24 ">
              <label
                className="info-person"
                style={{ fontSize: "20px" }}
                htmlFor="serviceType"
              >
                Pending Works
              </label>
              {pendingWorks?.length ? (
                <>
                  {pendingWorks?.map((work, key) => (
                    <div
                      className="choose-delivery-content mt-3"
                      onClick={() => {
                        return navigate(`/work/${work?._id}`);
                      }}
                    >
                      <div className="checkout-second border-green">
                        <div className="second-order-sec">
                          <div className="cart-title">
                            <h3>
                              {" "}
                              {work.serviceType === "pest"
                                ? "Pest Control"
                                : work.serviceType}
                            </h3>
                          </div>
                          {/* <div className="default-txt">
                          <p>Default</p>
                        </div> */}
                        </div>
                        <div className="delivery-bottom">
                          <div className="cart-title">
                            <h3 className="text-start pt-12">
                              {work?.client?.name} (Client)
                            </h3>
                            <div className="checkout-no pt-8">
                              <a href={`tel:${work?.client?.contact}`}>
                                {work?.client?.contact}
                              </a>
                            </div>
                            <p className="mt-8">Status: {work?.status}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <div className="block-footer" style={{ marginTop: "50px" }}>
                  <p style={{ color: "red" }}>You Have No Pending Works.</p>
                </div>
              )}
              <div className="single-clothes-bottom container">
                <div className="sign-up-btn">
                  <button
                    onClick={() => {
                      return navigate("/clients");
                    }}
                  >
                    Clients List
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Dashboard;
