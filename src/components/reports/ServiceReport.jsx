// import React, { useState } from "react";
// import "./Reportcss.css"; // Make sure to create and import the CSS file
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";
// import { useLocation } from "react-router-dom";
// import { baseUrl } from "../../services/Urls";
// import moment from "moment";

// export default function ServiceReportForm({ data }) {
//   const [loading, setloading] = useState(false);
//   const location = useLocation(); // Use the useLocation hook
//   const { workDetails } = location.state || {}; // Access the workDetails passed via state
//   console.log("THE WORK DETAILS", workDetails);
//   const treatmentOptions = [
//     { id: "spray", label: "Spray" },
//     { id: "gel", label: "Gel" },
//     { id: "power", label: "Power" },
//     { id: "garden", label: "Garden" },
//     { id: "thermal-fogging", label: "Thermal Fogging" },
//     { id: "ulv-fogging", label: "ULV Fogging (Cold Fogging)" },
//     { id: "bait-station", label: "Bait Station" },
//     { id: "rat-glue-trap", label: "Rat Glue Trap" },
//     { id: "rat-bait", label: "Rat Bait" },
//     { id: "cat-cage", label: "Cat Cage" },
//     { id: "others-treatment", label: "Others" },
//   ];

//   const exportPDF = () => {
//     const input = document.getElementById("report-form");
//     const clientName = workDetails?.client?.name || "default"; // Fallback in case name is not available
//     const today = moment().format("MM-DD-YY"); // Format today's date
//     const fileName = `${clientName}_${today}.pdf`; // Construct the file name
//     setloading(true);
//     html2canvas(input).then((canvas) => {
//       const imgData = canvas.toDataURL("image/png");
//       const pdf = new jsPDF("p", "mm", "a4");
//       const imgWidth = 210; // A4 width in mm
//       const pageHeight = 295; // A4 height in mm
//       const imgHeight = (canvas.height * imgWidth) / canvas.width;
//       let heightLeft = imgHeight;

//       let position = 0;

//       pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
//       heightLeft -= pageHeight;

//       while (heightLeft >= 0) {
//         position = heightLeft - imgHeight;
//         pdf.addPage();
//         pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
//         heightLeft -= pageHeight;
//       }

//       pdf.save(fileName);
//       setloading(false);
//     });
//     setloading(false);
//   };
//   return (
//     <div>
//       <div className="report-container" id="report-form">
//         <div className="header">
//           <div className="header-left">
//             <h1>
//               SERVICE
//               <br />
//               REPORT
//             </h1>
//           </div>
//           <div className="header-right">
//             <div className="title-group">
//               <span className="title">
//                 <img src="/assets/images/zcplogo.png" height={40} />
//               </span>
//               <span className="company-name">ZAHRA AL HAYAT</span>
//             </div>
//             <p>PEST CONTROL AND CLEANING CONTRACTING CO.W.L.L</p>
//             <p>T: (+973) 77005111 / M: (+973) 39149111</p>
//             <p>P.O. Box 2523 / Kingdom of Bahrain</p>
//             <p>info@zcp-bh.com / www.zcp-bh.com</p>
//           </div>
//         </div>

//         <div className="divider"></div>

//         <div className="grid">
//           <div className="form-group">
//             <label htmlFor="ref-no">Ref No :</label>
//             <input id="ref-no" />
//           </div>
//           <div className="form-group">
//             <label htmlFor="s-no">S. No :</label>
//             <input id="s-no" />
//           </div>
//         </div>

//         <div className="grid">
//           <div className="form-group">
//             <label htmlFor="date">Date :</label>
//             <input
//               id="date"
//               defaultValue={moment(new Date()).format("DD / MM / YY")}
//             />
//           </div>

//           <div className="form-group">
//             <label>Type of service</label>
//             <div className="checkbox-group" style={{ marginLeft: "30px" }}>
//               <div className="checkbox-container">
//                 <input type="checkbox" id="cash" />
//                 <label htmlFor="cash">Cash</label>
//               </div>
//               <div className="checkbox-container">
//                 <input type="checkbox" id="one-time" />
//                 <label htmlFor="one-time">One time</label>
//               </div>
//               <div className="checkbox-container">
//                 <input type="checkbox" id="contact" />
//                 <label htmlFor="contact">Contact</label>
//               </div>
//               <div className="checkbox-container">
//                 <input type="checkbox" id="follow-up" />
//                 <label htmlFor="follow-up">Follow-up</label>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="grid">
//           <div className="form-group">
//             <label htmlFor="client">Client :</label>
//             <input id="client" defaultValue={workDetails?.client?.name} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="area">Area :</label>
//             <input id="area" />
//           </div>
//         </div>

//         <div className="grid">
//           <div className="form-group">
//             <label htmlFor="contact-person">Contact Person :</label>
//             <input
//               id="contact-person"
//               defaultValue={workDetails?.client?.name}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="contact-number">Contact Number :</label>
//             <input
//               id="contact-number"
//               defaultValue={workDetails?.client?.contact}
//             />
//           </div>
//         </div>

//         <div className="form-group">
//           <label style={{ width: "fit-content" }}>
//             Premises to be treated :
//           </label>
//           <div className="checkbox-group" style={{ marginLeft: "30px" }}>
//             <div className="checkbox-container">
//               <input type="checkbox" id="indoor" />
//               <label htmlFor="indoor">Indoor</label>
//             </div>
//             <div className="checkbox-container">
//               <input type="checkbox" id="outdoor" />
//               <label htmlFor="outdoor">Outdoor</label>
//             </div>
//             <div className="checkbox-container">
//               <input type="checkbox" id="drainages" />
//               <label htmlFor="drainages">Drainages</label>
//             </div>
//             <div className="checkbox-container">
//               <input type="checkbox" id="others" />
//               <label htmlFor="others">Others</label>
//             </div>
//           </div>
//         </div>

//         <div className="section-title">SERVICE REQUIRED FOR</div>
//         <div className="checkbox-group">
//           {/* <div className="checkbox-container">
//             <input type="checkbox" id="cockroach-control" />
//             <label htmlFor="cockroach-control">Cockroach Control</label>
//           </div>
//           <div className="checkbox-container">
//             <input type="checkbox" id="bedbugs-control" />
//             <label htmlFor="bedbugs-control">Bedbugs Control</label>
//           </div>
//           <div className="checkbox-container">
//             <input type="checkbox" id="rodent-control" />
//             <label htmlFor="rodent-control">Rodent Control</label>
//           </div>
//           <div className="checkbox-container">
//             <input type="checkbox" id="ants-spider" />
//             <label htmlFor="ants-spider">Ants & Spider</label>
//           </div>
//           <div className="checkbox-container">
//             <input type="checkbox" id="anti-termite" />
//             <label htmlFor="anti-termite">
//               Anti Termite (Pre & Post Const.)
//             </label>
//           </div>
//           <div className="checkbox-container">
//             <input type="checkbox" id="fleas-control" />
//             <label htmlFor="fleas-control">Fleas Control</label>
//           </div>
//           <div className="checkbox-container">
//             <input type="checkbox" id="flys-mosquito" />
//             <label htmlFor="flys-mosquito">Fly's & Mosquito</label>
//           </div>
//           <div className="checkbox-container">
//             <input type="checkbox" id="others-service" />
//             <label htmlFor="others-service">Others</label>
//           </div> */}
//           {workDetails?.services?.length ? (
//             <>
//               {workDetails?.services?.map((value, key) => (
//                 <div className="checkbox-container" key={key}>
//                   <input checked type="checkbox" id="fleas-control" />
//                   <label htmlFor="fleas-control">{value?.name}</label>
//                 </div>
//               ))}
//             </>
//           ) : (
//             ""
//           )}
//         </div>

//         <table className="table">
//           <thead>
//             <tr>
//               <th>Preparation</th>
//               <th colSpan={2}>Pesticides</th>
//               <th colSpan={2}>Gels</th>
//               <th colSpan={2}>Rodenticide</th>
//               <th colSpan={2}>Glue Pads</th>
//               <th>Insect Monitors</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>Quantity (Made up)</td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//             </tr>
//             <tr>
//               <td colSpan={10}>Others (If any)</td>
//             </tr>
//           </tbody>
//         </table>

//         <div className="">
//           <label htmlFor="area-description">
//             Area of service carried out & description
//           </label>
//           <br />
//           <textarea id="area-description" className="textarea" />
//         </div>

//         <div className="section-title">TYPE OF TREATMENT</div>
//         <div className="checkbox-group">
//           {treatmentOptions.map((option) => (
//             <div className="checkbox-container" key={option.id}>
//               <input type="checkbox" id={option.id} />
//               <label htmlFor={option.id}>{option.label}</label>
//             </div>
//           ))}
//         </div>

//         {/* <div className="signature-section">
//           <div className="form-group">
//             <label htmlFor="technician-name">Technician Name:</label>
//             <input
//               id="technician-name"
//               style={{ width: "80%" }}
//               defaultValue={workDetails?.staff?.name}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="customer-name">Customer Name:</label>
//             <input
//               id="customer-name"
//               style={{ width: "80%" }}
//               defaultValue={workDetails?.client?.name}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="technician-signature">Technician Signature:</label>
//             <input
//               id="technician-signature"
//               defaultValue={workDetails?.staff?.signature}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="customer-signature">Customer Signature:</label>
//             <input id="customer-signature" />
//           </div>
//         </div> */}
//         <div className="signature-section">
//           <div className="form-group">
//             <label htmlFor="technician-name">Technician Name:</label>
//             <input
//               id="technician-name"
//               style={{ width: "80%" }}
//               defaultValue={workDetails?.staff?.name}
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="customer-name">Customer Name:</label>
//             <input
//               id="customer-name"
//               style={{ width: "80%" }}
//               defaultValue={workDetails?.client?.name}
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="technician-signature">Technician Signature:</label>
//             <img
//               src="https://dev.foxiomlabs.com/zcp/api/v1/uploads/client_signature-1729180360046-437548928.png"
//               height={40}
//               style={{ border: "2px solid red", backgroundColor: "white" }}
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="customer-signature">Customer Signature:</label>

//             <img
//               src="https://dev.foxiomlabs.com/zcp/api/v1/uploads/client_signature-1729180360046-437548928.png"
//               height={40}
//               style={{ border: "2px solid red", backgroundColor: "white" }}
//             />
//           </div>
//         </div>
//       </div>
//       {/* <button onClick={exportPDF}>Export to PDF</button> */}
//       <div className="sign-up-btn fixed">
//         {loading ? (
//           <button type="submit" style={{ backgroundColor: "black" }}>
//             Exporting ...
//           </button>
//         ) : (
//           <button type="button" onClick={exportPDF}>
//             Export PDF
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import "./Reportcss.css"; // Make sure to create and import the CSS file
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useLocation } from "react-router-dom";
import { baseUrl } from "../../services/Urls";
import moment from "moment";

export default function ServiceReportForm({ data }) {
  const [loading, setLoading] = useState(false);
  const location = useLocation(); // Use the useLocation hook
  const { workDetails } = location.state || {}; // Access the workDetails passed via state
  console.log("THE WORK DETAILS", workDetails);

  // Track if images have loaded
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const treatmentOptions = [
    { id: "spray", label: "Spray" },
    { id: "gel", label: "Gel" },
    { id: "power", label: "Power" },
    { id: "garden", label: "Garden" },
    { id: "thermal-fogging", label: "Thermal Fogging" },
    { id: "ulv-fogging", label: "ULV Fogging (Cold Fogging)" },
    { id: "bait-station", label: "Bait Station" },
    { id: "rat-glue-trap", label: "Rat Glue Trap" },
    { id: "rat-bait", label: "Rat Bait" },
    { id: "cat-cage", label: "Cat Cage" },
    { id: "others-treatment", label: "Others" },
  ];

  // Utility to load images and trigger callback when all are loaded
  const loadImages = () => {
    const images = Array.from(document.querySelectorAll("img"));
    let imagesToLoad = images.length;

    images.forEach((image) => {
      if (image.complete) {
        imagesToLoad -= 1;
      } else {
        image.onload = () => {
          imagesToLoad -= 1;
          if (imagesToLoad === 0) {
            setImagesLoaded(true);
          }
        };
        image.onerror = () => {
          imagesToLoad -= 1;
          if (imagesToLoad === 0) {
            setImagesLoaded(true);
          }
        };
      }
    });

    if (imagesToLoad === 0) {
      setImagesLoaded(true);
    }
  };

  useEffect(() => {
    loadImages();
  }, []);

  const exportPDF = () => {
    if (!imagesLoaded) {
      alert("Please wait for all images to load.");
      return;
    }

    const input = document.getElementById("report-form");
    const clientName = workDetails?.client?.name || "default"; // Fallback in case name is not available
    const today = moment().format("MM-DD-YY"); // Format today's date
    const fileName = `${clientName}_${today}.pdf`; // Construct the file name
    setLoading(true);

    html2canvas(input, {
      useCORS: true, // Enable cross-origin resource sharing
      logging: true,
      allowTaint: false, // Do not allow canvas to be tainted with external resources
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 295; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(fileName);
      setLoading(false);
    });
  };

  return (
    <div>
      <div className="report-container" id="report-form">
        {/* Content for report */}
        <div className="header">
          <div className="header-left">
            <h1>
              SERVICE
              <br />
              REPORT
            </h1>
          </div>
          <div className="header-right">
            <div className="title-group">
              <span className="title">
                <img src="/assets/images/zcplogo.png" height={40} alt="Logo" />
              </span>
              <span className="company-name">ZAHRA AL HAYAT</span>
            </div>
            <p>PEST CONTROL AND CLEANING CONTRACTING CO.W.L.L</p>
            <p>T: (+973) 77005111 / M: (+973) 39149111</p>
            <p>P.O. Box 2523 / Kingdom of Bahrain</p>
            <p>info@zcp-bh.com / www.zcp-bh.com</p>
          </div>
        </div>

        <div className="divider"></div>

        <div className="grid">
          <div className="form-group">
            <label htmlFor="ref-no">Ref No :</label>
            <input id="ref-no" />
          </div>
          <div className="form-group">
            <label htmlFor="s-no">S. No :</label>
            <input id="s-no" />
          </div>
        </div>

        <div className="grid">
          <div className="form-group">
            <label htmlFor="date">Date :</label>
            <input
              id="date"
              defaultValue={moment(new Date()).format("DD / MM / YY")}
            />
          </div>

          <div className="form-group">
            <label>Type of service</label>
            <div className="checkbox-group" style={{ marginLeft: "30px" }}>
              <div className="checkbox-container">
                <input type="checkbox" id="cash" />
                <label htmlFor="cash">Cash</label>
              </div>
              <div className="checkbox-container">
                <input type="checkbox" id="one-time" />
                <label htmlFor="one-time">One time</label>
              </div>
              <div className="checkbox-container">
                <input type="checkbox" id="contact" />
                <label htmlFor="contact">Contact</label>
              </div>
              <div className="checkbox-container">
                <input type="checkbox" id="follow-up" />
                <label htmlFor="follow-up">Follow-up</label>
              </div>
            </div>
          </div>
        </div>

        <div className="grid">
          <div className="form-group">
            <label htmlFor="client">Client :</label>
            <input id="client" defaultValue={workDetails?.client?.name} />
          </div>
          <div className="form-group">
            <label htmlFor="area">Area :</label>
            <input id="area" />
          </div>
        </div>

        <div className="grid">
          <div className="form-group">
            <label htmlFor="contact-person">Contact Person :</label>
            <input
              id="contact-person"
              defaultValue={workDetails?.client?.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact-number">Contact Number :</label>
            <input
              id="contact-number"
              defaultValue={workDetails?.client?.contact}
            />
          </div>
        </div>

        <div className="form-group">
          <label style={{ width: "fit-content" }}>
            Premises to be treated :
          </label>
          <div className="checkbox-group" style={{ marginLeft: "30px" }}>
            <div className="checkbox-container">
              <input type="checkbox" id="indoor" />
              <label htmlFor="indoor">Indoor</label>
            </div>
            <div className="checkbox-container">
              <input type="checkbox" id="outdoor" />
              <label htmlFor="outdoor">Outdoor</label>
            </div>
            <div className="checkbox-container">
              <input type="checkbox" id="drainages" />
              <label htmlFor="drainages">Drainages</label>
            </div>
            <div className="checkbox-container">
              <input type="checkbox" id="others" />
              <label htmlFor="others">Others</label>
            </div>
          </div>
        </div>

        <div className="section-title">SERVICE REQUIRED FOR</div>
        <div className="checkbox-group">
          {/* <div className="checkbox-container">
            <input type="checkbox" id="cockroach-control" />
            <label htmlFor="cockroach-control">Cockroach Control</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="bedbugs-control" />
            <label htmlFor="bedbugs-control">Bedbugs Control</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="rodent-control" />
            <label htmlFor="rodent-control">Rodent Control</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="ants-spider" />
            <label htmlFor="ants-spider">Ants & Spider</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="anti-termite" />
            <label htmlFor="anti-termite">
              Anti Termite (Pre & Post Const.)
            </label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="fleas-control" />
            <label htmlFor="fleas-control">Fleas Control</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="flys-mosquito" />
            <label htmlFor="flys-mosquito">Fly's & Mosquito</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="others-service" />
            <label htmlFor="others-service">Others</label>
          </div> */}
          {workDetails?.services?.length ? (
            <>
              {workDetails?.services?.map((value, key) => (
                <div className="checkbox-container" key={key}>
                  <input checked type="checkbox" id="fleas-control" />
                  <label htmlFor="fleas-control">{value?.name}</label>
                </div>
              ))}
            </>
          ) : (
            ""
          )}
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>Preparation</th>
              <th colSpan={2}>Pesticides</th>
              <th colSpan={2}>Gels</th>
              <th colSpan={2}>Rodenticide</th>
              <th colSpan={2}>Glue Pads</th>
              <th>Insect Monitors</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Quantity (Made up)</td>
              <td>
                <input style={{ width: "40px", border: "none" }} />
              </td>
              <td>
                <input style={{ width: "40px", border: "none" }} />
              </td>
              <td>
                <input style={{ width: "40px", border: "none" }} />
              </td>
              <td>
                <input style={{ width: "40px", border: "none" }} />
              </td>
              <td>
                <input style={{ width: "40px", border: "none" }} />
              </td>
              <td>
                <input style={{ width: "40px", border: "none" }} />
              </td>
              <td>
                <input style={{ width: "40px", border: "none" }} />
              </td>
              <td>
                <input style={{ width: "40px", border: "none" }} />
              </td>
              <td>
                <input
                  style={{
                    width: "100px",
                    border: "none",
                  }}
                />
              </td>
            </tr>
            <tr>
              <td colSpan={10}>
                Others (If any)
                <input
                  style={{ marginLeft: "10px", width: "84%", border: "none" }}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <div className="">
          <label htmlFor="area-description">
            Area of service carried out & description
          </label>
          <br />
          <textarea id="area-description" className="textarea" />
        </div>

        <div className="section-title">TYPE OF TREATMENT</div>
        <div className="checkbox-group">
          {treatmentOptions.map((option) => (
            <div className="checkbox-container" key={option.id}>
              <input type="checkbox" id={option.id} />
              <label htmlFor={option.id}>{option.label}</label>
            </div>
          ))}
        </div>

        {/* Signatures */}
        <div className="signature-section">
          <div className="form-group">
            <label htmlFor="technician-signature">Technician Signature:</label>
            <img
              src={`${baseUrl}/${workDetails?.staff?.signature}`}
              height={40}
              alt="Technician Signature"
            />
          </div>

          <div className="form-group">
            <label htmlFor="customer-signature">Customer Signature:</label>
            <img
              src={`${baseUrl}/${workDetails?.client?.signature}`}
              height={40}
              alt="Customer Signature"
            />
          </div>
        </div>
      </div>

      {/* Button to trigger PDF export */}
      <div className="sign-up-btn fixed">
        {loading ? (
          <button type="submit" style={{ backgroundColor: "black" }}>
            Exporting ...
          </button>
        ) : (
          <button type="button" onClick={exportPDF}>
            Export PDF
          </button>
        )}
      </div>
    </div>
  );
}
