import React, { useContext } from "react";
import { ContextDatas } from "../services/Context";
import { BasePathUrl, LoginPathUrl } from "../services/UrlPaths";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { User } = useContext(ContextDatas);

  if (User === null || User === false) {
    return <Navigate to={BasePathUrl + LoginPathUrl} />;
  }
  if (!User?.role === "supervisor") {
    return <Navigate to={BasePathUrl + LoginPathUrl} />;
  }
  return children;
}

export default PrivateRoute;
