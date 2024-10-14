import React from "react";
import "./Reportcss.css"; // Make sure to create and import the CSS file

export default function ServiceReportForm() {
  return (
    <div className="report-container">
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
            <span className="title">zcp</span>
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
          <input id="date" />
        </div>
        <br />
        <div className="form-group">
          <label>TYPE OF SERVICE</label>
          <div className="checkbox-group">
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
          <input id="client" />
        </div>
        <div className="form-group">
          <label htmlFor="area">Area :</label>
          <input id="area" />
        </div>
      </div>

      <div className="grid">
        <div className="form-group">
          <label htmlFor="contact-person">Contact Person :</label>
          <input id="contact-person" />
        </div>
        <div className="form-group">
          <label htmlFor="contact-number">Contact Number :</label>
          <input id="contact-number" />
        </div>
      </div>

      <div className="form-group">
        <label>Premises to be treated :</label>
        <div className="checkbox-group">
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
        <div className="checkbox-container">
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
          <label htmlFor="anti-termite">Anti Termite (Pre & Post Const.)</label>
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
        </div>
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
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td colSpan={10}>Others (If any)</td>
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
        <div className="checkbox-container">
          <input type="checkbox" id="spray" />
          <label htmlFor="spray">Spray</label>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" id="gel" />
          <label htmlFor="gel">Gel</label>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" id="power" />
          <label htmlFor="power">Power</label>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" id="garden" />
          <label htmlFor="garden">Garden</label>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" id="thermal-fogging" />
          <label htmlFor="thermal-fogging">Thermal Fogging</label>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" id="ulv-fogging" />
          <label htmlFor="ulv-fogging">ULV Fogging (Cold Fogging)</label>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" id="bait-station" />
          <label htmlFor="bait-station">Bait Station</label>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" id="rat-glue-trap" />
          <label htmlFor="rat-glue-trap">Rat Glue Trap</label>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" id="rat-bait" />
          <label htmlFor="rat-bait">Rat Bait</label>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" id="cat-cage" />
          <label htmlFor="cat-cage">Cat Cage</label>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" id="others-treatment" />
          <label htmlFor="others-treatment">Others</label>
        </div>
      </div>

      <div className="signature-section">
        <div className="form-group">
          <label htmlFor="technician-name">Technician Name:</label>
          <input id="technician-name" />
        </div>
        <div className="form-group">
          <label htmlFor="customer-name">Customer Name:</label>
          <input id="customer-name" />
        </div>
        <div className="form-group">
          <label htmlFor="technician-signature">Technician Signature:</label>
          <input id="technician-signature" />
        </div>
        <div className="form-group">
          <label htmlFor="customer-signature">Customer Signature:</label>
          <input id="customer-signature" />
        </div>
      </div>
    </div>
  );
}
