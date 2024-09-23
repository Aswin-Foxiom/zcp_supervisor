import React, { useState } from "react";

function Header() {
  function capitalizeWords(str) {
    return str
      .split("/")
      .filter(Boolean) // Removes any empty strings from splitting
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  const [heading, setHeading] = useState(
    capitalizeWords(window.location.pathname)
  );

  const logout = () => {
    localStorage.clear();
    window.location.clear();
  };
  return (
    <>
      <header id="top-header">
        <div className="header-wrap-home">
          <div className="header-logo-home">
            <div className="header-name">
              <a href="javascript:history.go(-1)">
                <img src="/assets/svg/left-arrow.svg" alt="left-arrow" />
              </a>
            </div>
          </div>
          <div className="header-name">
            <p className>{"ZCP"}</p>
          </div>
          <div className="home-setting">
            <a
              onClick={(e) => {
                e.preventDefault();
                logout();
              }}
              href="/login"
            >
              <img
                style={{ height: "20px" }}
                src="/assets/svg/logout.svg"
                alt="notification-icon"
              />
            </a>
          </div>
        </div>
      </header>

      {/* <header id="top-header">
      <div className="header-wrap-home">
        <div className="header-logo-home">
          <a href="#offcanvasExample" data-bs-toggle="offcanvas">
            <img src="/assets/svg/setting-icon.svg" alt="setting-icon" />
          </a>
        </div>
        <div className="header-name">
          <p>ZCP</p>
        </div>
        <div className="home-setting">
          <a href="notification.html">
            <img
              src="/assets/svg/notification-icon.svg"
              alt="notification-icon"
            />
          </a>
        </div>
      </div>
    </header> */}
    </>
  );
}

export default Header;
