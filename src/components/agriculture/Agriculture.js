import React from 'react'
import agri from "../../images/agriculture_i_dronam.png";
function agriculture() {
  return (
    <div>
      <div class="idronam-user">
          <div class="idronam-user-title">
            <h1>Dronam for <span class="highlight">Agriculture</span></h1>
            <h2>
              Dronam for <span class="highlight">Agriculture</span> enable the
              agriculture sector to control drones with the power of internet
              all over the <span class="highlight">India</span> for various
              agriculture applications.
            </h2>
            <ul class="idronam-user-title-list">
              <li>Real-time spray montoring</li>
              <li>Flight path generation</li>
              <li>Autonomous Flight System</li>
              <li>Unlimited Range</li>
              <li>Cloud Based Analytics for Crop Assessment</li>
              <li>AI Analytics for crop assessemnt</li>
              <li>Alert Generation and Reporting Mechanism</li>
              <li>Scheduled Flight Plan</li>
              <li>Fly and Forget Drone System</li>
              <li>Zero Maintenance</li>
            </ul>
          </div>

          <div class="idronam-user-image">
            <img src={agri}/>
          </div>
        </div>
    </div>
  )
}

export default agriculture
