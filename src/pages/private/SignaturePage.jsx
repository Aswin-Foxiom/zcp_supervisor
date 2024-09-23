// import React from "react";
// import Background from "../../components/common/Background";

// function SignaturePage() {
//   return (
//     <div style={{ height: "100vh" }}>
//       <section id="feedback-main" className="background1  ">
//         <Background />
//         <div className="container position-relative">
//           <div className="main-content-wrap pt-4 ">
//             <div className="feedback-content">
//               <form className="feedback-form">
//                 <div className="mt-24">
//                   <label htmlFor="textarea" className="custom-lbl-feedback">
//                     Client Signature
//                   </label>
//                   <textarea
//                     rows={4}
//                     cols={50}
//                     placeholder="Sign Here..."
//                     className="custom-textarea  mt-8"
//                     id="textarea"
//                     defaultValue={""}
//                   />
//                 </div>
//                 <div className="mt-24">
//                   <label htmlFor="textarea" className="custom-lbl-feedback">
//                     Supervisor Signature
//                   </label>
//                   <textarea
//                     rows={4}
//                     cols={50}
//                     placeholder="Sign Here..."
//                     className="custom-textarea  mt-8"
//                     id="textarea"
//                     defaultValue={""}
//                   />
//                 </div>
//               </form>
//               <div className="sign-up-btn fixed">
//                 <button type="button">Next</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default SignaturePage;

import React, { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";
import Background from "../../components/common/Background";
import { FaSave, FaEraser } from "react-icons/fa"; // Import icons for save and clear
import { showToast } from "../../utils/Toast";
import apiCall from "../../services/APICall";
import { useNavigate, useParams } from "react-router-dom";

function SignaturePage() {
  const { id } = useParams();
  let navigate = useNavigate();
  const clientSignatureRef = useRef(null);
  const supervisorSignatureRef = useRef(null);

  // Clear the signature pad
  const clearSignature = (ref) => {
    ref.current.clear();
  };

  // Function to convert base64 to a Blob
  const base64ToBlob = (base64, contentType = "", sliceSize = 512) => {
    const byteCharacters = atob(base64.split(",")[1]); // Remove header "data:image/png;base64"
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
      const byteNumbers = new Array(slice.length);

      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    return new Blob(byteArrays, { type: contentType });
  };

  // Save the signature as a Blob or File object
  const saveSignatureAsImageFile = async (ref, signerType) => {
    if (ref.current.isEmpty()) {
      showToast(`Please provide a ${signerType} signature first.`, false);
      return;
    }

    const dataURL = ref.current.toDataURL("image/png");
    const blob = base64ToBlob(dataURL, "image/png");

    // Create a File object from Blob if needed
    const file = new File([blob], `${signerType}_signature.png`, {
      type: "image/png",
    });

    const response = await apiCall(
      "post",
      "/upload",
      { files: file },
      null,
      true
    );
    if (response?.status) {
      showToast("signature saved successfully", true);
    }
  };

  const CompleteWork = async () => {
    const body = {
      status: "completed",
    };
    const response = await apiCall("put", `/works/${id}`, body);
    if (response?.status) {
      showToast("Work Details Updated", true);
      return navigate(`/reports/${id}`);
    }
  };

  return (
    <div style={{ height: "100vh" }}>
      <section id="feedback-main" className="background1">
        <Background />
        <div className="container position-relative">
          <div className="main-content-wrap pt-4">
            <div className="feedback-content">
              <form className="feedback-form">
                <div className="mt-24">
                  <label
                    htmlFor="client-signature"
                    className="custom-lbl-feedback"
                  >
                    Client Signature
                  </label>
                  <SignatureCanvas
                    penColor="black"
                    canvasProps={{
                      width: 500,
                      height: 200,
                      className: "sigCanvas",
                    }}
                    ref={clientSignatureRef}
                  />
                  <div className="mt-8" style={{ textAlign: "right" }}>
                    <button
                      type="button"
                      onClick={() => clearSignature(clientSignatureRef)}
                      style={{ marginRight: "20px" }}
                    >
                      <FaEraser size={24} title="Clear" />
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        saveSignatureAsImageFile(clientSignatureRef, "Client")
                      }
                    >
                      <FaSave size={24} title="Save" />
                    </button>
                  </div>
                </div>

                <div className="mt-24">
                  <label
                    htmlFor="supervisor-signature"
                    className="custom-lbl-feedback"
                  >
                    Supervisor Signature
                  </label>
                  <SignatureCanvas
                    penColor="black"
                    canvasProps={{
                      width: 500,
                      height: 200,
                      className: "sigCanvas",
                    }}
                    ref={supervisorSignatureRef}
                  />
                  <div className="mt-8" style={{ textAlign: "right" }}>
                    <button
                      type="button"
                      onClick={() => clearSignature(supervisorSignatureRef)}
                      style={{ marginRight: "20px" }}
                    >
                      <FaEraser size={24} title="Clear" />
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        saveSignatureAsImageFile(
                          supervisorSignatureRef,
                          "Supervisor"
                        )
                      }
                    >
                      <FaSave size={24} title="Save" />
                    </button>
                  </div>
                </div>
              </form>
              <div className="sign-up-btn fixed">
                <button type="button" onClick={CompleteWork}>
                  Complete Work
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignaturePage;
