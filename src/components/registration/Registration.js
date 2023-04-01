import React from 'react';
import './registration.css'
import ifl from "../../images/idronam_full_logo.png"
function Registration() {
  return (
    <div>
    <div className="bg-image"></div>
    <div className="reg_container">
      <img className="dronam-logo" src={ifl} />
      <div className="registration-heading">
        <h1>Registration</h1>
      </div>

      <main className="box">
        <form action="/registration" method="POST">
          {/* <!-- GENDER SELECTION START --> */}

          <div className="gender-div">
            <label>Gender :</label><br />
             <input type="radio" id="male" name="gender" value="Male" />  
            <label for="male">Male</label><br />
              <input type="radio" id="female" name="gender" value="Female" />  
            <label for="female">Female</label><br />
          </div>
        
          {/* <!-- GENDER SELECTION END --> */}

          {/* <!-- User Type SELECTION START --> */}

          <div className="user-type-div">
            <label>User Type : </label><br />
          
            <input
              type="radio"
              id="individual"
              name="user_type"
              value="Individual"
            />
             <label for="individual">Individuals</label><br />
            
            <input
              type="radio"
              id="enterprise"
              name="user_type"
              value="Enterprise"
            />
             <label for="enterprise">Enterprise</label><br />

            
            <input
              type="radio"
              id="developer"
              name="user_type"
              value="Developer"
            />
             <label for="developer">Developer</label><br />
          </div>
          
          {/* <!--  User Type  SELECTION END --> */}

          <div className="inputBox">
            <label for="orgName">Organization : </label>
            <input
              type="text"
              name="organization"
              id="organization"
              placeholder="Enter Your Organisation"
              required
            />
            <small className="text-muted">
              Type "NA" if Organisation is Not Applicable
            </small>
            <br />
            <small className="text-muted">
              Click
              <a className="danger" href="/registration_know_more">To know more</a>
              about "User Type".
            </small>
          </div>

          <button type="register" name="" style={{float: "center"}}>
            Register
          </button>
        </form>
      </main>
    </div>

    <script type="text/javascript" src="./js/registration.js"></script>
    </div>
  )
}

export default Registration
