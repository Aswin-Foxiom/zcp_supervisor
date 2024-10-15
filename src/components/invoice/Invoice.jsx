import React, { useState } from "react";
import "./Invoicecss.css";
import { useLocation } from "react-router-dom";
import moment from "moment";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function Invoice() {
  const location = useLocation(); // Use the useLocation hook
  const { workDetails } = location.state || {}; // Access the workDetails passed via state
  const [loading, setLoading] = useState(false); // State to manage loading

  // Function to export the invoice as PDF
  const exportPDF = () => {
    const input = document.getElementById("invoice"); // Use the correct element ID
    const clientName = workDetails?.client?.name || "default"; // Fallback in case name is not available
    const today = moment().format("MM-DD-YY"); // Format today's date
    const fileName = `${clientName}_${today}_Invoice.pdf`; // Construct the file name
    setLoading(true);

    html2canvas(input).then((canvas) => {
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

      pdf.save(fileName); // Save the PDF with the constructed file name
      setLoading(false);
    });
  };

  return (
    <div>
      <div className="invoice" id="invoice">
        {" "}
        {/* Add ID for PDF export */}
        <div className="header">
          <div>
            <div className="logo">
              <div className="logo-box">zcp</div>
              <div className="logo-text">
                ZAHRA <span>AL</span> HAYAT
              </div>
            </div>
            <div className="company-info">
              <span className="company-name">ZAHRA AL HAYAT</span>
              <br />
              Cleaning Contracting Co. W.L.L
              <br />
              Kingdom of Bahrain
              <br />
              T: (+973) 77005111 | M: (+973) 39149111
              <br />
              E: info@zcp-bh.com
              <br />
              <span className="website">www.zcp-bh.com</span>
              <br />
              VAT NO 220019107000002
            </div>
          </div>
          <div>
            <div className="invoice-title">TAX INVOICE</div>
            <div className="invoice-details">
              <b style={{ color: "#ff0000" }}>INVOICE NO</b>: 2953/2024
              <br />
              <b style={{ color: "#ff0000" }}>DATE</b>:{" "}
              {moment(workDetails?.invoice?.createdAt).format("DD MMMM YYYY")}
            </div>
          </div>
        </div>
        <div className="bill-to">
          <span className="bill-to-header">BILL TO:</span>
          <br />
          {workDetails?.client?.name}
          <br />
          {workDetails?.client?.contact}
        </div>
        <table>
          <tbody>
            <tr>
              <th>No.</th>
              <th>DESCRIPTION</th>
              <th>AMOUNT</th>
            </tr>
            <tr className="grey-bg">
              <td>1</td>
              <td>
                <div style={{ padding: "0.8rem 0.5rem" }}>
                  {workDetails?.serviceType} control Service Done
                </div>
              </td>
              <td className="amount-column">
                {workDetails?.invoice?.totalAmt}
              </td>
            </tr>
            <tr>
              <td />
              <td style={{ padding: "0.2rem" }}>Month of June</td>
              <td />
            </tr>
            <tr className="grey-bg">
              <td />
              <td style={{ textAlign: "center", padding: "0.8rem 0.5rem" }}>
                (Bahrain Dinar Fifty Three Only)
              </td>
              <td />
            </tr>
            <tr className="total-row">
              <td colSpan={2}>SUB TOTAL</td>
              <td className="amount-column">
                {workDetails?.invoice?.totalAmt}
              </td>
            </tr>
            <tr className="total-row">
              <td colSpan={2}>VAT @ 10%</td>
              <td className="amount-column">
                {(workDetails?.invoice?.totalAmt * 0.1).toFixed(2)}
              </td>
            </tr>
            <tr className="total-row">
              <td colSpan={2}>PAYMENT ADVANCE</td>
              <td className="amount-column">
                {workDetails?.invoice?.payableAmt}
              </td>
            </tr>
            <tr className="total-row">
              <td colSpan={2}>TOTAL AMOUNT</td>
              <td className="amount-column">
                {workDetails?.invoice?.totalAmt}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="payment-terms">
          <b style={{ color: "#ff0000" }}>PAYMENT TERMS :</b> Please make all
          cheques payable to <b style={{ color: "#ff0000" }}>ZAHRA AL HAYAT</b>{" "}
          Cleaning Contracting Co. W.L.L. If you have any questions concerning
          this invoice, kindly contact us via phone or email.
        </div>
        <div className="thank-you">THANK YOU</div>
      </div>

      {/* Export PDF Button */}
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

export default Invoice;
