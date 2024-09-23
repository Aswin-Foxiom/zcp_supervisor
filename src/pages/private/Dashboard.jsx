import React, { useContext, useEffect, useState } from "react";
import Background from "../../components/common/Background";
import { ContextDatas } from "../../services/Context";
import apiCall from "../../services/APICall";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { Profile } = useContext(ContextDatas);
  const [pendingWorks, setpendingWorks] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    getOngoingWork();
  }, []);

  const getOngoingWork = async () => {
    const params = {
      staff: Profile?._id, // Pass the actual staff ID
      status: "ongoing",
    };

    const response = await apiCall("get", `/works`, null, params);
    if (response?.status) {
      console.log(response);
      setpendingWorks(response?.data?.docs ?? []);
    }
  };
  return (
    <section
      id="homescreen-main"
      className="background1"
      style={{ height: "100vh" }}
    >
      <Background />
      <div classname="homecreen1-content">
        <div className="container position-relative">
          <div className="main-content-wrap pt-24 ">
            <h2>Ongoing Works</h2>
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
                            {work.client.contactName} (Client)
                          </h3>
                          <div className="checkout-no pt-8">
                            <a href={`tel:${work.client.contact}`}>
                              {work.client.contact}
                            </a>
                          </div>
                          <p className="mt-8">Status: {work.status}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <h2> No Pending Works </h2>
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
    </section>
  );
}

export default Dashboard;
