import React from "react";
import Background from "../../components/common/Background";

function SignaturePage() {
  return (
    <div style={{ height: "100vh" }}>
      <section id="feedback-main" className="background1  ">
        <Background />
        <div className="container position-relative">
          <div className="main-content-wrap pt-4 ">
            <div className="feedback-content">
              <form className="feedback-form">
                <div className="mt-24">
                  <label htmlFor="textarea" className="custom-lbl-feedback">
                    Client Signature
                  </label>
                  <textarea
                    rows={4}
                    cols={50}
                    placeholder="Sign Here..."
                    className="custom-textarea  mt-8"
                    id="textarea"
                    defaultValue={""}
                  />
                </div>
                <div className="mt-24">
                  <label htmlFor="textarea" className="custom-lbl-feedback">
                    Supervisor Signature
                  </label>
                  <textarea
                    rows={4}
                    cols={50}
                    placeholder="Sign Here..."
                    className="custom-textarea  mt-8"
                    id="textarea"
                    defaultValue={""}
                  />
                </div>
              </form>
              <div className="sign-up-btn fixed">
                <a href="/reports">Complete Work</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignaturePage;
