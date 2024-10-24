import React, { useEffect, useState } from "react";
import Background from "../../components/common/Background";
import Loader from "../../components/common/Loader";
import apiCall from "../../services/APICall";

function Notification() {
  const [loading, setloading] = useState(false);
  const [notificationData, setnotificationData] = useState([]);
  useEffect(() => {
    getNotifications();
  }, []);

  const getNotifications = async () => {
    setloading(true);
    const response = await apiCall("get", "/notifications");
    setloading(false);
    if (response?.status) {
      setnotificationData(response?.data?.docs);
    }
  };
  return (
    <section
      id="invite-friend-main"
      className="background1"
      style={{ minHeight: "100vh" }}
    >
      <Background />

      {loading ? (
        <Loader />
      ) : (
        <div className="container position-relative">
          <div className="main-content-wrap pt-24 ">
            <div className="notification-page-full">
              <div className="first-sec-notification">
                {notificationData?.length ? (
                  <>
                    {notificationData?.map((value, key) => (
                      <div className="notification-deatails">
                        <h3>{value?.title}</h3>
                        <p>
                          {value?.content
                            .replace(
                              /(\d{1,2}:\d{2}:\d{2} GMT[+-]\d{4} \(.*\))/g,
                              ""
                            )
                            .trim()}
                        </p>
                      </div>
                    ))}
                  </>
                ) : (
                  <div className="block-footer" style={{ marginTop: "50px" }}>
                    <p style={{ color: "red" }}>No Notifications Found.</p>
                  </div>
                )}
                {/* <div className="notification-deatails">
                  <h3>30% Special Discount!</h3>
                  <p>Special promotion only valid today</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Notification;
