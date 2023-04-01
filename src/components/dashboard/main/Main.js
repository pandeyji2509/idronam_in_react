import React from 'react';
import './main.css';
import announcement from "./../../../images/dashboard_images/announcement.png";
import close_btn from "./../../../images/dashboard_images/close_btn.png";
import dash from "./../../../images/dashboard_images/dashboard.png";
import loading from "./../../../images/dashboard_images/loading_gif.gif";
import logout from "./../../../images/dashboard_images/logout.png";
import menu from "./../../../images/dashboard_images/menu_btn.png";
import params from "./../../../images/dashboard_images/params.png";
import simulation from "./../../../images/dashboard_images/simulation_gif.gif";
import subscription from "./../../../images/dashboard_images/subscription.png";
function main() {
  return (
    <div>
          <main>
        <div className="dashboard">
          <h1>Dashboard</h1>
          <div className="insights" id="insights">
            <div className="insight-one">
              <img className="dashboard-icon" src={loading}/>
              <div className="middle">
                <div className="left">
                  <form action="/control_system" method="GET">
                    <h1>Connect</h1>
                    <small className="text-muted">Enter Drone Alias to Connect</small><br/>
                    <small className="text-muted">**Drone Aliases Are Case Sensitive</small>
                    <input type="text" name="drone_alias" placeholder="Drone Alias" required=""/>
                    <button>Connect</button>
                  </form>
                </div>
              </div>
            </div>
            {/* <!-- ===========DEFAULT RECENT INSIGHT ERROR ==================--> */}
            <div id="default_reconnect_error_insight" className="insight-one">
              <img className="dashboard-icon" src={loading}/>
              <div className="middle">
                <div className="left">
                  <h1 className='oops'>Oops...</h1>
                  <h2 className="re-connect-alias">No Recent Drones Connected</h2>

                  <small className="text-muted">Connect your drone and it will appear here <br/>
                    or explore your subscriptions.
                  </small>
                  <button className="default-btn" onclick="subscriptions()">
                    Subscriptions
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- ===========DEFAULT RECENT INSIGHT ERROR ==================--> */}
          </div>
        </div>

        {/* <!-- START OF SUBSCRIPTIONS --> */}
        <div className="subscriptions">
          <h1>Subscriptions</h1>

          <div className="insights" id="subscriptions-insights">
            {/* <!-- ===========DEFAULT SUBSCRIPTION ERROR ==================--> */}
            <div id="default_subscriptions_error_insight" className="insight-one">
              <img className="dashboard-icon" src="./images/dashboard_images/loading_gif.gif"/>
              <div className="middle">
                <div className="left">
                  <h1>Oops...</h1>
                  <h2 className="re-connect-alias">You have No Subscription</h2>

                  <small className="text-muted">Mail the administrator to add your drone or if you are
                    exploring the software please go to simulation section.
                  </small>


                </div>
              </div>
            </div>

            {/* <!-- ===========DEFAULT SUBSCRIPTION ERROR  ==================-->
            <!-- start of insight-one --> */}


            {/* <!-- end of insight one --> */}
          </div>
        </div>
        {/* <!-- END OF SUBSCRIPTIONS --> */}

        {/* <!-- START OF DRONE PARAM --> */}
        <div className="drone_param">
          <h1>Drone Params</h1>

          <div className="insights" id="drone_param">
            {/* <!-- ===========DEFAULT SUBSCRIPTION ERROR ==================--> */}
            <div id="default_drone_param_error_insight" className="insight-one">
              <img className="dashboard-icon" src="./images/dashboard_images/loading_gif.gif"/>
              <div className="middle">
                <div className="left">
                  <h1>Developer?</h1>
                  <h2 className="re-connect-alias">
                    Drone Params is only for Developers
                  </h2>

                  <small className="text-muted">Register Yourself as an developer to customise your drone
                    params over internet.<br/>Drone Params contains all Flight
                    Controller Params i.e. Drone Speed, Take Off Altitude etc
                  </small>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="flight-history">
          <h2>Flight History</h2>
          <span className="no-flight-history"> No Flight History</span>
          <small className="no-flight-history text-muted highlight">**Last 5 History</small>
          <table className="flight-history-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Drone Alias</th>
                <th>Drone</th>
                <th>Date &amp; Time</th>
              </tr>
            </thead>

            <tbody className="flight-history-tbody"></tbody>
          </table>
          <a className="flight-history-show-all" href="/">Show All</a>
        </div>
      </main>
    </div>
  )
}

export default main
