import React from 'react';
import "./enterprise.css";
import enterprise from "../../images/enterprise_i_dronam.png";

function Enterprise() {
  return (
    <div>
      <div className="idronam-user" id="whyus">
          <div className="idronam-user-title">
            <h1>Dronam for <span className="highlight">Enterprise</span></h1>
            <h2>
              Dronam for <span className="highlight">Enterprise</span> enable the
              industry to control drones from remote location to all over
              <span className="highlight">India</span> for various applications.
            </h2>
            <ul className="idronam-user-title-list">
              <li>Internet Control Drones</li>
              <li>Drone Swarming</li>
              <li>Fleet Management</li>
              <li>Unlimited Range</li>
              <li>Cloud Storage</li>
              <li>AI Analytics</li>
              <li>Alert Generation and Reporting Mechanism</li>
              <li>View Logs</li>
              <li>Scheduled Flight Plan</li>
              <li>Single Panel Controllibility</li>
              <li>Secure Communication</li>
              <li>Zero Maintenance</li>
            </ul>
          </div>
          <div className="idronam-user-image">
            <img src={enterprise} alt="enterprise"/>
          </div>
        </div>
    </div>
  )
}

export default Enterprise
