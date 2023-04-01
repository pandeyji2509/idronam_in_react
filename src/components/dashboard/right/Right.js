import React from 'react';
import './right.css'
import announcement from "./../../../images/dashboard_images/announcement.png";
import close_btn from "./../../../images/dashboard_images/close_btn.png";
import dash from "./../../../images/dashboard_images/dashboard.png";
import loading from "./../../../images/dashboard_images/loading_gif.gif";
import logout from "./../../../images/dashboard_images/logout.png";
import menu from "./../../../images/dashboard_images/menu_btn.png";
import params from "./../../../images/dashboard_images/params.png";
import simulation from "./../../../images/dashboard_images/simulation_gif.gif";
import subscription from "./../../../images/dashboard_images/subscription.png";

function right() {



  return (
    <div>
      <div class="right">
        <div class="top">
          <button id="menu-btn">
            <img src={menu}/>
          </button>

          <div class="profile">
            <div class="info">
              <p>Hey, <b id="username">ECE_14_Ankit Pandey</b></p>
              <small class="text-muted" id="organisation">student</small>
            </div>

            <div class="profile-photo">
              <img id="profile_pic" src="https://lh3.googleusercontent.com/a/AGNmyxZrR6OjaPal790_Q_MQbzHjodf9eKMCWke0t1yK=s96-c" alt="user"/>
            </div>
          </div>
        </div>

        <div class="recent-updates">
          <h2>Recent Updates</h2>
          <div class="updates" id="recent_updates">

          <div class="update">
  <div class="announcement-pic">
    <img src={announcement}/>
  </div>
  <div class="message">
    <p><b>Simulation</b> for the users who want to explore the software, without connecting to the physical drone.</p>
    <small class="text-muted"> Mon Feb 27 2023</small>
  </div></div><div class="update">
  <div class="announcement-pic">
    <img src={announcement}/>
  </div>
  <div class="message">
    <p><b>iDronam</b> is Live. Control Your Drone/Drones from anywhere &amp; anytime. Get familiar with Control System in Simulation Section.</p>
    <small class="text-muted"> Sun Feb 26 2023</small>
  </div></div></div>
        </div>
        <div class="simulation" id="simulation">
          <h2>Drone Simulation</h2>
        <div><div class="item">
    <div class="dashboard_icon">
      <img src={simulation}/>
    </div>

    <div>
      <div class="info">
        <h3>SIMULATION-1</h3>
        <small class="text-muted">Last 24 Hours</small>
        <p class="available">available</p>
      </div>

      <form action="/control_system" method="GET">
        <input type="hidden" name="drone_alias" value="simu_quad_2"/>
        <button>Connect Simulation</button>
      </form>
    </div>
  </div>
  </div>
  <div>
  <div className="item">
    <div className="dashboard_icon">
      <img src={simulation}/>
    </div>
    <div>
      <div className="info">
        <h3>SIMULATION-2</h3>
        <small className="text-muted">Last 24 Hours</small>
        <p className="available">available</p>
      </div>
      <form action="/control_system" method="GET">
        <input type="hidden" name="drone_alias" value="simu_quad_1"/>
        <button>Connect Simulation</button>
      </form>
    </div>
  </div>
  </div>
  </div>
  </div>
</div>
  )
}

export default right;
