// import React, { useEffect } from "react";
// import Background from "../../components/common/Background";
// import { useParams } from "react-router-dom";
// import apiCall from "../../services/APICall";

// function Reports() {
//   const { id } = useParams();

//   useEffect(() => {
//     getWorkDetails();
//   }, []);

//   const getWorkDetails = async () => {
//     const response = await apiCall("get", `/works/${id}`);
//     if (response?.status) {
//       console.log("THE Work Details", response);
//       // getClientDetails(response?.data?.client);
//     }
//   };

//   // const getClientDetails = async (clientId) => {
//   //   console.log("client ID", clientId);
//   //   const respone
//   // };
//   return (
//     <div style={{ height: "100vh" }}>
//       <section id="account-main" className="background1">
//         <Background />
//         <div className="container position-relative">
//           <div className="main-content-wrap">
//             <div className="account-created-wrap mt-24">
//               <div className="account-top-sec">
//                 <div className="account-img">
//                   <img
//                     src="/assets/images/invite-friend/friend1.png"
//                     alt="account-img"
//                   />
//                 </div>
//                 <div className="account-name">
//                   <h3>Manoj</h3>
//                   <p>Kollam</p>
//                 </div>
//                 {/* <div className="account-edit">
//                   <a href="#">
//                     <img src="/assets/svg/edit-icon.svg" alt="edit-icon" />
//                   </a>
//                 </div> */}
//               </div>
//               <div className="account-bottom-sec mt-24">
//                 <a href="#">
//                   <div className="send-money-contact-tab ">
//                     <div className="setting-icon red-bg-opacity">
//                       <img
//                         src="/assets/images/profile/account-icon1.svg"
//                         alt="account-icon"
//                       />
//                     </div>
//                     <div className="setting-title">
//                       <h3>Generate & Share Invoice</h3>
//                     </div>
//                     <div className="contact-star">
//                       <div className="star-favourite">
//                         <img
//                           src="/assets/svg/right-arrow.svg"
//                           alt="edit-icon"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </a>
//                 <a href="#">
//                   <div className="send-money-contact-tab mt-12">
//                     <div className="setting-icon red-bg-opacity">
//                       <img
//                         src="/assets/images/profile/account-icon2.svg"
//                         alt="account-icon"
//                       />
//                     </div>
//                     <div className="setting-title">
//                       <h3>Generate & Share Reports</h3>
//                     </div>
//                     <div className="contact-star">
//                       <div className="star-favourite">
//                         <img
//                           src="/assets/svg/right-arrow.svg"
//                           alt="edit-icon"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </a>
//                 {/* <a href="#">
//                   <div className="send-money-contact-tab mt-12">
//                     <div className="setting-icon red-bg-opacity">
//                       <img
//                         src="/assets/images/profile/account-icon3.svg"
//                         alt="account-icon"
//                       />
//                     </div>
//                     <div className="setting-title">
//                       <h3>Payment Methods</h3>
//                     </div>
//                     <div className="contact-star">
//                       <div className="star-favourite">
//                         <img
//                           src="/assets/svg/right-arrow.svg"
//                           alt="edit-icon"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </a>
//                 <a href="#">
//                   <div className="send-money-contact-tab mt-12">
//                     <div className="setting-icon red-bg-opacity">
//                       <img
//                         src="/assets/images/profile/account-icon4.svg"
//                         alt="account-icon"
//                       />
//                     </div>
//                     <div className="setting-title">
//                       <h3>Delivery Address</h3>
//                     </div>
//                     <div className="contact-star">
//                       <div className="star-favourite">
//                         <img
//                           src="/assets/svg/right-arrow.svg"
//                           alt="edit-icon"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </a>
//                 <a href="#">
//                   <div className="send-money-contact-tab mt-12">
//                     <div className="setting-icon red-bg-opacity">
//                       <img
//                         src="/assets/images/profile/account-icon5.svg"
//                         alt="account-icon"
//                       />
//                     </div>
//                     <div className="setting-title">
//                       <h3>Promos &amp; Vouchers</h3>
//                     </div>
//                     <div className="contact-star">
//                       <div className="star-favourite">
//                         <img
//                           src="/assets/svg/right-arrow.svg"
//                           alt="edit-icon"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </a> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <div className="sign-up-btn fixed">
//         <a href="/clients">Start New Work</a>
//       </div>
//     </div>
//   );
// }

// export default Reports;

import React, { useEffect, useState } from "react";
import Background from "../../components/common/Background";
import { useParams } from "react-router-dom";
import apiCall from "../../services/APICall";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  pdf,
} from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import TransactionPage from "./TransactionPage";

// Create styles for PDF document
const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  clientInfo: {
    marginBottom: 20,
  },
  serviceList: {
    marginBottom: 20,
  },
  serviceItem: {
    fontSize: 12,
    marginBottom: 5,
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
});

// PDF Document Component
const InvoicePDF = ({ workDetails }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Invoice</Text>
        <View style={styles.clientInfo}>
          <Text>Client: {workDetails.client.name}</Text>
          <Text>Contact: {workDetails.client.contact}</Text>
        </View>
        <View style={styles.serviceList}>
          <Text>Services:</Text>
          {workDetails.services.map((service, index) => (
            <Text key={service._id} style={styles.serviceItem}>
              {index + 1}. {service.name} - {service.count}
            </Text>
          ))}
        </View>
        <Text style={styles.totalAmount}>
          Total Amount: ${workDetails.totalAmt}
        </Text>
      </View>
    </Page>
  </Document>
);

function Reports() {
  const [bottomNav, setbottomNav] = useState(false);
  const { id } = useParams();
  const [workDetails, setWorkDetails] = useState(null);

  useEffect(() => {
    getWorkDetails();
  }, []);

  const getWorkDetails = async () => {
    const response = await apiCall("get", `/works/${id}`);
    if (response?.status) {
      setWorkDetails(response.data);
      console.log("THE WORK", response?.data);
    }
  };

  const downloadInvoice = async () => {
    if (workDetails) {
      // Prepare API request body
      const invoiceBody = {
        client: workDetails.client._id, // Use the actual client ID
        totalAmt: workDetails.totalAmt,
        works: [workDetails._id], // Use the actual work ID
      };

      // Make the API call to create the invoice
      const invoiceResponse = await apiCall("post", "/invoices", invoiceBody);

      if (invoiceResponse?.status) {
        // If invoice creation is successful, generate and download the PDF
        const blob = await pdf(
          <InvoicePDF workDetails={workDetails} />
        ).toBlob();
        saveAs(blob, `Invoice_${workDetails._id}.pdf`);
      } else {
        console.error("Error creating invoice");
      }
    }
  };

  return (
    <div style={{ height: "100vh" }}>
      <section id="account-main" className="background1">
        <Background />
        <div className="container position-relative">
          <div className="main-content-wrap">
            <div className="account-created-wrap mt-24">
              <div className="account-top-sec">
                <div className="account-img">
                  <img
                    src="/assets/images/invite-friend/friend1.png"
                    alt="account-img"
                  />
                </div>
                <div className="account-name">
                  <h3>Manoj</h3>
                  <p>Kollam</p>
                </div>
              </div>
              <div className="account-bottom-sec mt-24">
                <a href="#">
                  <div className="send-money-contact-tab">
                    <div className="setting-icon red-bg-opacity">
                      <img
                        src="/assets/images/profile/account-icon1.svg"
                        alt="account-icon"
                      />
                    </div>
                    <div onClick={downloadInvoice} className="setting-title">
                      <h3>Generate & Share Invoice</h3>
                    </div>
                    <div className="contact-star">
                      <div className="star-favourite">
                        <img
                          src="/assets/svg/right-arrow.svg"
                          alt="edit-icon"
                        />
                      </div>
                    </div>
                  </div>
                </a>
                <a href="#">
                  <div className="send-money-contact-tab mt-12">
                    <div className="setting-icon red-bg-opacity">
                      <img
                        src="/assets/images/profile/account-icon2.svg"
                        alt="account-icon"
                      />
                    </div>
                    <div className="setting-title">
                      <h3>Generate & Share Reports</h3>
                    </div>
                    <div className="contact-star">
                      <div className="star-favourite">
                        <img
                          src="/assets/svg/right-arrow.svg"
                          alt="edit-icon"
                        />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {bottomNav && (
        <TransactionPage
          invoiceId={workDetails?.invoice?._id}
          show={bottomNav}
          setshow={() => setbottomNav(false)}
        />
      )}

      <div className="sign-up-btn fixed">
        {workDetails?.invoice && (
          <button
            type="button"
            style={{ backgroundColor: "blue" }}
            className="mb-4"
            onClick={() => setbottomNav(true)}
          >
            Add Transaction
          </button>
        )}

        <button
          type="button"
          onClick={() => {
            localStorage.removeItem("workId");
            localStorage.removeItem("clientId");
            navigate("/clients");
          }}
        >
          Start New Work
        </button>
      </div>
    </div>
  );
}

export default Reports;
