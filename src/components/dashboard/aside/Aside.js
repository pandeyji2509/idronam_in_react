import React ,{useEffect}from 'react';
import "./aside.css";
import "../../container/container.css";
import Main from '../main/Main';
import Right from '../right/Right';
import logo from "./../../../images/idronam_logo.png";
import announcement from "./../../../images/dashboard_images/announcement.png";
import close_btn from "./../../../images/dashboard_images/close_btn.png";
import dash from "./../../../images/dashboard_images/dashboard.png";
import loading from "./../../../images/dashboard_images/loading_gif.gif";
import logout from "./../../../images/dashboard_images/logout.png";
import menu from "./../../../images/dashboard_images/menu_btn.png";
import params from "./../../../images/dashboard_images/params.png";
import simulation from "./../../../images/dashboard_images/simulation_gif.gif";
import subscription from "./../../../images/dashboard_images/subscription.png";

function Dashboard() {
useEffect(()=>{
  const side_bar = document.querySelector("aside");
  const menu_btn = document.querySelector("#menu-btn");
  const close_btn = document.querySelector("#close_btn"); 
  menu_btn.addEventListener("click", () => {
    side_bar.style.display = "block";
  });    
  close_btn.addEventListener("click", () => {
    side_bar.style.display = "none";
  });
})

return (
<div className='containers'>
<aside>
    <div className="top">
        <div className="logo">
            <img src={logo}/>
            <h2>i-<span>Dronam</span></h2>
        </div>
        <div className="close-btn dashboard-icon" id="close_btn">
            <img src={close_btn}/>
        </div>
    </div>

    <div className="sidebar">
        <a id="dashboard_a" onclick="dashboard()" className="active">
            <img className="dashboard-icon" src={dash}/>
            <h3>Dashboard</h3>
        </a>
        <a id="subscriptions_a" onclick="subscriptions()">
            <img className="dashboard-icon" src={subscription}/>
            <h3>Subscriptions</h3>
        </a>
        <a id="drone_param_a" onclick="drone_param()">
            <img className="dashboard-icon" src={params}/>
            <h3>Drone Params</h3>
        </a>
        <a id="logout-btn" onclick="logout()">
            <img className="dashboard-icon" src={logout}/>
            <h3>Logout</h3>
        </a>
        </div>
    </aside>

    {/* middle content of dashboard */}
    <Main/>
    {/* content of right side bar */}
    <Right/>
</div>
  )
}
export default Dashboard;
