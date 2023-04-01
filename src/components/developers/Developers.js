import React from 'react';
import './developers.css';
import dev from "../../images/developer_i_dronam.png";
function Agriculture() {
  return (
    <div>
      <div className="idronam-user">
          <div className="idronam-user-title">
            <h1>Dronam for <span className="highlight">Developers</span></h1>
            <h2>
              Dronam for <span className="highlight">Developer</span> enable the
              developers to play around the R&amp;D aspect of dronam. Developers
              version comes along with some ultimate features to control drones.
              <span className="highlight">Use with Cautions.</span>
            </h2>
            <ul className="idronam-user-title-list">
              <li>Internet Control Drones</li>
              <li>Read &amp; Write Drone Params</li>
              <li>Unlimited Range</li>
              <li>View Logs</li>
              <li>Log Analytics</li>
            </ul>
          </div>
          <div className="idronam-user-image">
            <img src={dev} alt="developer"/>
          </div>
        </div>
    </div>
  )
}
export default Agriculture;