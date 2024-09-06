import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../layouts/Header";
import BottomBar from "../layouts/BottomBar";

function RouterConnection() {
  return (
    <div>
      <div className="site-content">
        {/* <Loader /> */}
        <Header />
        <Outlet />
        {/* <BottomBar /> */}
        {/* The Sidebar Details Start */}
        {/* <Sidebar /> */}
        {/* The Sidebar Details End */}
      </div>
    </div>
  );
}

export default RouterConnection;
