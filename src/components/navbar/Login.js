import axios from "axios";
import React, { useState, useContext, createContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import DemoContext from "./DemoContext";

function Redir(props){
    console.log("props",props);
    //console.log()
    return(
        <Navbar sad={props}/>
    )
}
const ThemeContext = React.createContext('');

export class Login extends React.Component {
//static contextType=DemoContext;
    constructor(props) {
        super(props)
        window.data_login_callback = this.data_login_callback
        this.data_login_callback = this.data_login_callback.bind(this);
    }
    state = { brand: "" }

rend(props){
    console.log("ddd",props)
}
data_login_callback(response) {
    fetch("http://localhost:5000/google_login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(response),
    })
    .then((res) => res.json())
    .then((json) => {
        console.log(json);
        if (json.status === "OK") {
            Redir(json.redirect);
            }
        });
            
    }
    static contextType = ThemeContext;
    render() {

        return (
           
            <div className="google-sign-in-btn">
                <div id="g_id_onload"
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
            </div>
        )
    }
}
// function Redir(props){
//     const navigate=useNavigate();
//     return(
//         <Login navigate={navigate}></Login>
//     )
// }
// export default Redir;

