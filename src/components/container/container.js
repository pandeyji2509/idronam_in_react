import React from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import "./container.css";
function container() {
  var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };
  
  TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";
  
    var that = this;
    var delta = 200 - Math.random() * 100;
  
    if (this.isDeleting) {
      delta /= 2;
    }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function () {
      that.tick();
    }, delta);
  };
  
  window.onload = function () {
    var elements = document.getElementsByClassName("typewrite");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-type");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #6f66e7}";
    document.body.appendChild(css);
  };
  return (
    <div className='inside-container'>
      <div className='top-view'>
        <h2>Fly From Anywhere</h2>
        <h3 class="text-muted">
            i-Dronam is Internet Based Ground Control System for Drones.<br/>
            It is first of its kind solution.<br/>
            It is an end to end solution for monitoring and controlling of drone over the internet.
          </h3>
          <h3>
            <a className="highlight" href="#whyus">Scroll for more detailed applications of i-Dronam</a>
          </h3>
          <button className="go-btn">
          <Link as={Link} to={"dashboard"}>Go to Dashboard</Link>  
          </button>
           <h1>
            <a className="typewrite" data-period="2000" data-type="[ &quot;Internet Control Drones&quot;, &quot;Unlimited Range&quot;, &quot;Designed for Enterprise &quot;]"><span className="wrap"></span></a> 
            </h1>          
          </div>
    </div>
  )
}

export default container;
