import React from "react";

function LogoutModal() {
  return (
    <div
      className="modal fade"
      id="logout-modal"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <div className="order-cancel-modal-content">
              <div className="modal-cancel-bottom-bottom">
                <h2 className="pt-12">Logout</h2>
                <p className="mt-12 text-center order-txt">
                  Are you sure you want to log out?.
                </p>
                <div className="yes-cancel-btn mt-32">
                  <a href="splashscreen.html" className="red-bg">
                    Yes, Logout
                  </a>
                </div>
                <div className="yes-cancel-btn no-cancel-btn mt-16">
                  <a href="javascript:void(0)">No</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoutModal;
