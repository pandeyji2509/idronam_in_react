import React from "react";
import "./individual.css";
import indimg from "../../images/individual_i_dronam.png";
function Individual() {
  return (
    <div>
      <div class="idronam-user">
          <div class="idronam-user-image">
            <img src={indimg} alt="individual img"/>
          </div>
          <div class="idronam-user-title">
            <h1>Dronam for <span class="highlight">Individual</span></h1>
            <h2>
              Dronam for <span class="highlight">Individual</span> enable the
              individual to control drones and play around with 4G/5G all over
              <span class="highlight">India</span> for innovating ideas. Dronam
              for <span class="highlight">Individual</span> is Specially
              designed for drone enthusiast. Eliminating the costly hardware.
            </h2>
            <ul class="idronam-user-title-list">
              <li>Internet Control - 5G</li>
              <li>Unlimited Range</li>

              <li>Single Drone Connection</li>
              <li>Generates Flight Plan</li>
              <li>Schedule Flights</li>
              <li>Live telemetry Data</li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Individual
