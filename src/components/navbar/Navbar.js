import React, { useEffect,useState, createContext, useContext } from "react";
import "./navbar.css";
import logo from "../../images/idronam_full_logo.png";
import Footer from '../footer/Footer';
import Container from '../container/container';
import Enterprise from '../enterprise/Enterprise';
import Individual from '../individual/Individual';
import Developer from '../developers/Developers';
import Agriculture from "../agriculture/Agriculture";
import axios from 'axios';
import { Login } from "./Login"
import { Link, Router, Routes, useNavigate } from "react-router-dom";

const UserContext = createContext();
// function navbar() {
//     function test_request() {
//         console.log("button clicked")
//         axios
//             .post("http://localhost:5000/test_login", {
//                 title: "Hello World!",
//                 body: "This is a new post."
//             })
//             .then((response) => {
//                 console.log(response.data);
//             });

//     }
// function callback(props){
//     //let navigate = useNavigate();
//     return(
//        // navigate('/')
//     );
// }
// class navbar extends React.Component{   
//     constructor(props) {
//         super(props)
//         window.data_login_callback = this.data_login_callback     
//     }  

//     data_login_callback(response) {
//         fetch("http://localhost:5000/google_login", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(response),
//         })
//         .then((res) => res.json())
//         .then((json) => {
//            //let navigate = useNavigate();
//             console.log(json);
//             if (json.status === "OK") {
//                 //console.log(json.redirect)

//                 //navigate(`${json.redirect}`)

//                 // <Link as={Link} to={`${json.redirect}`}></Link>
//                 //window.location.assign(json.redirect);
//                 }
//               });
//           }


// function data_login_callback(response) {
//     axios.post("https:localhost:5000/google_login", {
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(response),
//     })
//         .then((res) => res.json())
//         .then((json) => {
//             console.log(json);
//             if (json.status === "OK") {
//                 window.location.assign(json.redirect);
//             }
//         });
// }


// function google_login(){
//     console.log("button clicked")
//             axios
//             .post("http://localhost:5000/google_login", {
//             })
//             .then((response) => {
//               console.log(response.data);
//             });

//         }
// const UserContext = createContext();
function Navbar({props}){
    <UserContext.Provider value={props}></UserContext.Provider>
    return (
        <div className="container">
            <div className="navbar">
                <img src={logo} className="logo" alt="idronam" />
                <nav>
                    <ul>
                        <li>
                            <a href="#">Dashboard</a>
                        </li>
                        <li>
                            <a href="#">Why iDronam?</a>
                        </li>
                        <li>
                            <a href="#contact-us">Contact us</a>
                        </li>
                    </ul>
                </nav>
                <Login />
            </div>
            <Container />
            <Enterprise />
            <Individual />
            <Agriculture />
            <Developer />
            <Footer />
        </div>    
    )
}


export default Navbar;

{/* <div className="google-sign-in-btn">
{/* <div id="g_id_onload"
    data-client_id="134570853734-35l5ihlrk0586phi7lpgc40h5q8j9tok.apps.googleusercontent.com"
    data-context="signin"
    data-login_uri="https://localhost:3000"
    data-auto_select="true"
    data-itp_support="true">
</div> */}
{/* <div id="g_id_onload"
    data-client_id="134570853734-35l5ihlrk0586phi7lpgc40h5q8j9tok.apps.googleusercontent.com"
    data-context="signin"
    data-ux_mode="popup"
    data-callback="data_login_callback"
    data-auto_prompt="false">
</div>

<div class="g_id_signin"
    data-type="standard"
    data-shape="rectangular"
    data-theme="outline"
    data-text="signin_with"
    data-size="large"
    data-logo_alignment="left">
</div>
</div>  */}