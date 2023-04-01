import React from 'react';
import "./footer.css";
import insta from "./../../images/instagram.png";
import linkedin from "./../../images/linkedin.png";
function footer() {
  return (
    <div>
    <div className="footer" id="contact-us">
        <h1>
          <span className="highlight">i-Dronam </span> <br/>
          is a product of <br/><span className="highlight"><a href="https://www.menthosa.com/" target="_blank" className="highlight">Menthosa Solutions</a>
          </span>
        </h1>
        <div className="footer-tell-us">
          <span>
            Have an Idea/Query? <br/>
            Tell Us about it
          </span>

          <span className="mailto"> sales@idronam.com</span>

          <div className="footer-tell-us-icon">
            <a href="https://www.linkedin.com/company/menthosa-solutions/">
              <img className="icon" src={linkedin}/>
            </a>

            <a href="https://www.instagram.com/menthosasolutions/?utm_source=qr">
              <img className="icon" src={insta}/>
            </a>
          </div>
        </div>

        <div className="footer-copyright">
          <small>Designed with ❤️ in Chandigarh,India</small>
          <small className="highlight">Menthosa Solutions © 2023</small>
        </div>
      </div>

    </div>
  )
}

export default footer;
