// import React, { useEffect, useRef, useState } from "react";
// import SignatureCanvas from "react-signature-canvas";
// import Background from "../../components/common/Background";
// import { FaSave, FaEraser } from "react-icons/fa"; // Import icons for save and clear
// import { showToast } from "../../utils/Toast";
// import apiCall from "../../services/APICall";
// import { useNavigate, useParams } from "react-router-dom";
// import ConfirmModal from "../../components/common/ConfirmModal";

// function SignaturePage() {
//   const { id } = useParams();
//   let navigate = useNavigate();
//   const [signatureLoading, setsignatureLoading] = useState(false);
//   const [confirm, setconfirm] = useState(false);
//   const [loading, setloading] = useState(false);
//   const clientSignatureRef = useRef(null);
//   const supervisorSignatureRef = useRef(null);
//   const [workDetails, setworkDetails] = useState(null);

//   // Clear the signature pad
//   const clearSignature = (ref) => {
//     ref.current.clear();
//   };

//   useEffect(() => {
//     getWorkDetails();
//   }, []);

//   const getWorkDetails = async () => {
//     const response = await apiCall("get", `/works/${id}`);
//     if (response?.status) {
//       console.log("THE WORK DETAILS", response?.data);
//       setworkDetails(response?.data ?? null);
//     }
//   };

//   // Function to convert base64 to a Blob
//   const base64ToBlob = (base64, contentType = "", sliceSize = 512) => {
//     const byteCharacters = atob(base64.split(",")[1]); // Remove header "data:image/png;base64"
//     const byteArrays = [];

//     for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
//       const slice = byteCharacters.slice(offset, offset + sliceSize);
//       const byteNumbers = new Array(slice.length);

//       for (let i = 0; i < slice.length; i++) {
//         byteNumbers[i] = slice.charCodeAt(i);
//       }

//       const byteArray = new Uint8Array(byteNumbers);
//       byteArrays.push(byteArray);
//     }

//     return new Blob(byteArrays, { type: contentType });
//   };

//   // Save the signature as a Blob or File object
//   // const saveSignatureAsImageFile = async (ref, signerType) => {
//   //   if (ref.current.isEmpty()) {
//   //     showToast(`Please provide a ${signerType} signature first.`, false);
//   //     return;
//   //   }

//   //   const dataURL = ref.current.toDataURL("image/png");
//   //   const blob = base64ToBlob(dataURL, "image/png");

//   //   // Create a File object from Blob if needed
//   //   const file = new File([blob], `${signerType}_signature.png`, {
//   //     type: "image/png",
//   //   });
//   //   setsignatureLoading(true);
//   //   const response = await apiCall(
//   //     "post",
//   //     "/upload",
//   //     { files: file },
//   //     null,
//   //     true
//   //   );
//   //   setsignatureLoading(false);

//   //   if (response?.status) {
//   //     console.log(response?.data[0]);
//   //     showToast("signature saved successfully", true);
//   //     updateSignature(response?.data[0], signerType);
//   //   }
//   // };

//   const saveSignatureAsImageFile = async (ref, signerType) => {
//     if (ref.current.isEmpty()) {
//       showToast(`Please provide a ${signerType} signature first.`, false);
//       return;
//     }

//     const dataURL = ref.current.toDataURL("image/jpeg"); // Change to 'image/jpeg' for JPG
//     const blob = base64ToBlob(dataURL, "image/jpeg"); // Change to 'image/jpeg' for JPG

//     // Create a File object from Blob for JPG
//     const file = new File([blob], `${signerType}_signature.jpg`, {
//       type: "image/jpeg", // Change to 'image/jpeg'
//     });

//     // Generate a Blob URL for preview or logging
//     const blobUrl = URL.createObjectURL(blob);
//     console.log(`Blob URL for ${signerType} signature:`, blobUrl);

//     // Optionally, display the signature image in the DOM (for example, append an <img> tag)
//     const imgElement = document.createElement("img");
//     imgElement.src = blobUrl;
//     imgElement.alt = `${signerType} signature`;
//     imgElement.style.width = "200px"; // You can adjust the width as needed
//     document.body.appendChild(imgElement); // This appends the image to the body, adjust placement as needed

//     // setsignatureLoading(true);
//     // const response = await apiCall(
//     //   "post",
//     //   "/upload",
//     //   { files: file },
//     //   null,
//     //   true
//     // );
//     // setsignatureLoading(false);

//     // if (response?.status) {
//     //   console.log(response?.data[0]);
//     //   showToast("Signature saved successfully", true);
//     //   updateSignature(response?.data[0], signerType);
//     // }
//   };

//   const updateSignature = async (signature, signerType) => {
//     var response = null;
//     setsignatureLoading(true);
//     if (signerType === "Client") {
//       response = await apiCall("put", `/clients/${workDetails?.client?._id}`, {
//         signature: signature,
//       });
//     }
//     if (signerType === "Supervisor") {
//       response = await apiCall(
//         "put",
//         `/supervisor/${workDetails?.staff?._id}`,
//         {
//           signature: signature,
//         }
//       );
//     }
//     setsignatureLoading(false);
//     if (response?.status) {
//       console.log("Signature updated");
//     }
//   };

//   const CompleteWork = async () => {
//     const body = {
//       status: "completed",
//       client: workDetails?.client?._id,
//     };
//     setloading(true);
//     const response = await apiCall("put", `/works/${id}`, body);
//     setloading(false);
//     if (response?.status) {
//       showToast("Work Details Updated", true);
//       return navigate(`/reports/${id}`);
//     }
//   };

//   return (
//     <div style={{ height: "100vh" }}>
//       <section id="feedback-main" className="background1">
//         <Background />
//         <div className="container position-relative">
//           <div className="main-content-wrap pt-4">
//             <div className="feedback-content">
//               <form className="feedback-form">
//                 <div className="mt-24">
//                   <label
//                     htmlFor="client-signature"
//                     className="custom-lbl-feedback"
//                   >
//                     Client Signature
//                   </label>
//                   <SignatureCanvas
//                     penColor="black"
//                     canvasProps={{
//                       width: 500,
//                       height: 200,
//                       className: "sigCanvas",
//                     }}
//                     ref={clientSignatureRef}
//                   />
//                   <div className="mt-8" style={{ textAlign: "right" }}>
//                     {signatureLoading ? (
//                       <div className="block-footer" style={{ float: "right" }}>
//                         <p style={{ color: "red" }}>Saving Your Signature</p>
//                       </div>
//                     ) : (
//                       <>
//                         <button
//                           type="button"
//                           onClick={() => clearSignature(clientSignatureRef)}
//                           style={{ marginRight: "20px" }}
//                         >
//                           <FaEraser size={24} title="Clear" />
//                         </button>
//                         <button
//                           type="button"
//                           onClick={() =>
//                             saveSignatureAsImageFile(
//                               clientSignatureRef,
//                               "Client"
//                             )
//                           }
//                         >
//                           <FaSave size={24} title="Save" />
//                         </button>
//                       </>
//                     )}
//                   </div>
//                 </div>

//                 <div className="mt-24">
//                   <label
//                     htmlFor="supervisor-signature"
//                     className="custom-lbl-feedback"
//                   >
//                     Supervisor Signature
//                   </label>
//                   <SignatureCanvas
//                     penColor="black"
//                     canvasProps={{
//                       width: 500,
//                       height: 200,
//                       className: "sigCanvas",
//                     }}
//                     ref={supervisorSignatureRef}
//                   />
//                   <div className="mt-8" style={{ textAlign: "right" }}>
//                     {signatureLoading ? (
//                       <div className="block-footer" style={{ float: "right" }}>
//                         <p style={{ color: "red" }}>Saving Your Signature</p>
//                       </div>
//                     ) : (
//                       <>
//                         <button
//                           type="button"
//                           onClick={() => clearSignature(supervisorSignatureRef)}
//                           style={{ marginRight: "20px" }}
//                         >
//                           <FaEraser size={24} title="Clear" />
//                         </button>
//                         <button
//                           type="button"
//                           onClick={() =>
//                             saveSignatureAsImageFile(
//                               supervisorSignatureRef,
//                               "Supervisor"
//                             )
//                           }
//                         >
//                           <FaSave size={24} title="Save" />
//                         </button>
//                       </>
//                     )}
//                   </div>
//                 </div>
//               </form>

//               <ConfirmModal
//                 next={CompleteWork}
//                 setVisible={() => setconfirm(false)}
//                 visible={confirm}
//                 message="Do You want to complete your work ?"
//               />

//               <div className="sign-up-btn fixed">
//                 {loading ? (
//                   <button type="submit" style={{ backgroundColor: "black" }}>
//                     Loading ...
//                   </button>
//                 ) : (
//                   <button
//                     type="button"
//                     // onClick={handleSubmit}
//                     onClick={() => setconfirm(true)}
//                   >
//                     Next
//                   </button>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default SignaturePage;

import React, { useEffect, useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import Background from "../../components/common/Background";
import { FaSave, FaEraser } from "react-icons/fa"; // Import icons for save and clear
import { showToast } from "../../utils/Toast";
import apiCall from "../../services/APICall";
import { useNavigate, useParams } from "react-router-dom";
import ConfirmModal from "../../components/common/ConfirmModal";

function SignaturePage() {
  const { id } = useParams();
  let navigate = useNavigate();
  const [signatureLoading, setsignatureLoading] = useState(false);
  const [confirm, setconfirm] = useState(false);
  const [loading, setloading] = useState(false);
  const clientSignatureRef = useRef(null);
  const supervisorSignatureRef = useRef(null);
  const [workDetails, setworkDetails] = useState(null);

  const clearSignature = (ref) => {
    ref.current.clear();
  };

  useEffect(() => {
    getWorkDetails();
  }, []);

  const getWorkDetails = async () => {
    const response = await apiCall("get", `/works/${id}`);
    if (response?.status) {
      console.log("THE WORK DETAILS", response?.data);
      setworkDetails(response?.data ?? null);
    }
  };

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

  const saveSignatureAsImageFile = async (ref, signerType) => {
    if (ref.current.isEmpty()) {
      showToast(`Please provide a ${signerType} signature first.`, false);
      return;
    }

    // Create a canvas to add a white background
    const canvas = document.createElement("canvas");
    canvas.width = ref.current.getCanvas().width;
    canvas.height = ref.current.getCanvas().height;
    const ctx = canvas.getContext("2d");

    // Draw a white background (if you want the background to be white)
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw the signature over the white background
    ctx.drawImage(ref.current.getCanvas(), 0, 0);

    // Convert the canvas to a data URL
    const dataURL = canvas.toDataURL("image/png");
    const blob = base64ToBlob(dataURL, "image/png");

    // Create a File object from Blob for PNG
    const file = new File([blob], `${signerType}_signature.png`, {
      type: "image/png",
    });

    // Generate a Blob URL for preview or logging
    const blobUrl = URL.createObjectURL(blob);
    console.log(`Blob URL for ${signerType} signature:`, blobUrl);

    setsignatureLoading(true);
    const response = await apiCall(
      "post",
      "/upload",
      { files: file },
      null,
      true
    );
    setsignatureLoading(false);

    if (response?.status) {
      console.log(response?.data[0]);
      showToast("Signature saved successfully", true);
      updateSignature(response?.data[0], signerType);
    }
  };

  const updateSignature = async (signature, signerType) => {
    let response = null;
    setsignatureLoading(true);
    if (signerType === "Client") {
      response = await apiCall("put", `/clients/${workDetails?.client?._id}`, {
        signature: signature,
      });
    }
    if (signerType === "Supervisor") {
      response = await apiCall(
        "put",
        `/supervisor/${workDetails?.staff?._id}`,
        {
          signature: signature,
        }
      );
    }
    setsignatureLoading(false);
    if (response?.status) {
      console.log("Signature updated");
    }
  };

  const CompleteWork = async () => {
    const body = {
      status: "completed",
      client: workDetails?.client?._id,
    };
    setloading(true);
    const response = await apiCall("put", `/works/${id}`, body);
    setloading(false);
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
                    backgroundColor="rgba(0,0,0,0)" // Transparent background
                    canvasProps={{
                      width: 500,
                      height: 200,
                      className: "sigCanvas",
                    }}
                    ref={clientSignatureRef}
                    clearOnResize={false} // Keep the signature intact on resize
                  />
                  <div className="mt-8" style={{ textAlign: "right" }}>
                    {signatureLoading ? (
                      <div className="block-footer" style={{ float: "right" }}>
                        <p style={{ color: "red" }}>Saving Your Signature</p>
                      </div>
                    ) : (
                      <>
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
                            saveSignatureAsImageFile(
                              clientSignatureRef,
                              "Client"
                            )
                          }
                        >
                          <FaSave size={24} title="Save" />
                        </button>
                      </>
                    )}
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
                    backgroundColor="rgba(0,0,0,0)" // Transparent background
                    canvasProps={{
                      width: 500,
                      height: 200,
                      className: "sigCanvas",
                    }}
                    ref={supervisorSignatureRef}
                    clearOnResize={false} // Keep the signature intact on resize
                  />
                  <div className="mt-8" style={{ textAlign: "right" }}>
                    {signatureLoading ? (
                      <div className="block-footer" style={{ float: "right" }}>
                        <p style={{ color: "red" }}>Saving Your Signature</p>
                      </div>
                    ) : (
                      <>
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
                      </>
                    )}
                  </div>
                </div>
              </form>

              <ConfirmModal
                next={CompleteWork}
                setVisible={() => setconfirm(false)}
                visible={confirm}
                message="Do You want to complete your work?"
              />

              <div className="sign-up-btn fixed">
                {loading ? (
                  <button type="submit" style={{ backgroundColor: "black" }}>
                    Loading ...
                  </button>
                ) : (
                  <button type="button" onClick={() => setconfirm(true)}>
                    Next
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignaturePage;
