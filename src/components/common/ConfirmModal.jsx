import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import React, { useEffect, useState } from "react";

function ConfirmModal({ visible = false, setVisible, message, next }) {
  const [dialogWidth, setDialogWidth] = useState("50vw");
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        // Adjust this breakpoint as needed
        setDialogWidth("100vw");
      } else {
        setDialogWidth("30vw");
      }
    };

    handleResize(); // Set initial width
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div>
      <Dialog
        header="Warning"
        visible={visible}
        style={{ width: dialogWidth }}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
      >
        <p className="p-2">{message ? message : "Unknown Message"}</p>

        <div className="row">
          <div className="col-6">
            <div className="sign-up-btn  pt-2">
              <button
                type="button"
                // onClick={handleSubmit}
                onClick={setVisible}
              >
                No
              </button>
            </div>
          </div>
          <div className="col-6">
            <div className="sign-up-btn  pt-2">
              <button
                type="button"
                // onClick={handleSubmit}
                style={{ backgroundColor: "blue" }}
                onClick={() => {
                  setVisible();
                  next();
                }}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default ConfirmModal;
