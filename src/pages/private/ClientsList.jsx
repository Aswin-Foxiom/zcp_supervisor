import React from "react";
import Background from "../../components/common/Background";
import { useNavigate } from "react-router-dom";
import { BasePathUrl, ClientDetailsPathUrl } from "../../services/UrlPaths";

function ClientsList() {
  let navigate = useNavigate();
  return (
    <div style={{ height: "100vh" }}>
      <section id="invite-friend-main" className="background1 ">
        <Background />

        <div className="container position-relative">
          <div className="main-content-wrap pt-24">
            <div className="search-wrap">
              <div className="input-group search-page-searchbar">
                <input
                  type="text"
                  placeholder="Search here"
                  className="form-control search-text"
                  id="search-input"
                />
              </div>
              <div className="search-bar">
                <div className="search-btn">
                  <a href="#">
                    <img
                      src="/assets/svg/search-icon.svg"
                      alt="search-icon"
                      className="black-icon"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div
              className="invite-friend pt-24"
              onClick={() => {
                window.location.href = "/client-details";
              }}
            >
              <div className="invite-friend-wrapper">
                <div className="invite-img">
                  <img
                    src="/assets/images/invite-friend/friend1.png"
                    alt="friend-img"
                  />
                </div>
                <div className="invite-content">
                  <h3 className="friend-name text-start">Manoj</h3>
                  <p className="friend-no">
                    <a href="#">9754874545 , Kollam</a>
                  </p>
                </div>
                {/* <div className="friend-invite">
                  <div className="friend-select">
                    <input
                      type="checkbox"
                      id="select-friend1"
                      name="select-language"
                    />
                    <label
                      className="custom-radio-sel-friend "
                      htmlFor="select-friend1"
                    >
                      Invited
                    </label>
                  </div>
                </div> */}
              </div>
            </div>
            <div
              className="invite-friend pt-24"
              onClick={() => {
                window.location.href = "/client-details";
              }}
            >
              <div className="invite-friend-wrapper">
                <div className="invite-img">
                  <img
                    src="/assets/images/invite-friend/friend2.png"
                    alt="friend-img"
                  />
                </div>
                <div className="invite-content">
                  <h3 className="friend-name text-start">Shahina</h3>
                  <p className="friend-no">
                    <a href="#">9754874545 , Kollam</a>
                  </p>
                </div>
                {/* <div className="friend-invite">
                  <div className="friend-select">
                    <input
                      type="checkbox"
                      id="select-friend1"
                      name="select-language"
                    />
                    <label
                      className="custom-radio-sel-friend "
                      htmlFor="select-friend1"
                    >
                      Invited
                    </label>
                  </div>
                </div> */}
              </div>
            </div>
            <div
              className="invite-friend pt-24"
              onClick={() => {
                window.location.href = "/client-details";
              }}
            >
              <div className="invite-friend-wrapper">
                <div className="invite-img">
                  <img
                    src="/assets/images/invite-friend/friend3.png"
                    alt="friend-img"
                  />
                </div>
                <div className="invite-content">
                  <h3 className="friend-name text-start">Shafeeq</h3>
                  <p className="friend-no">
                    <a href="#">9754874545 , Kollam</a>
                  </p>
                </div>
                {/* <div className="friend-invite">
                  <div className="friend-select">
                    <input
                      type="checkbox"
                      id="select-friend1"
                      name="select-language"
                    />
                    <label
                      className="custom-radio-sel-friend "
                      htmlFor="select-friend1"
                    >
                      Invited
                    </label>
                  </div>
                </div> */}
              </div>
            </div>
            <div
              className="invite-friend pt-24"
              onClick={() => {
                window.location.href = "/client-details";
              }}
            >
              <div className="invite-friend-wrapper">
                <div className="invite-img">
                  <img
                    src="/assets/images/invite-friend/friend4.png"
                    alt="friend-img"
                  />
                </div>
                <div className="invite-content">
                  <h3 className="friend-name text-start">Suraj</h3>
                  <p className="friend-no">
                    <a href="#">9754874545 , Kollam</a>
                  </p>
                </div>
                {/* <div className="friend-invite">
                  <div className="friend-select">
                    <input
                      type="checkbox"
                      id="select-friend1"
                      name="select-language"
                    />
                    <label
                      className="custom-radio-sel-friend "
                      htmlFor="select-friend1"
                    >
                      Invited
                    </label>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ClientsList;
