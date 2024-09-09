import React from "react";

function ErrorText(props) {
  return (
    <div className="invalid-feedback" style={{ fontWeight: "500" }}>
      {props.children}
    </div>
  );
}

export default ErrorText;
