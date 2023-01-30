import { useEffect } from "react";
import LoginGoogle from "../components/google/LoginGoogle";
import { gapi } from "gapi-script";
import LoginForm from "../components/form/LoginForm";

import classes from "./Login.module.css";
import logo from "../images/syncee-logo-300px.png";


const clientId='392680066007-l91lc321cs5pqbn5cl5jt7tlsbcvsagb.apps.googleusercontent.com';


function Login(props){

    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: clientId,
                scope: ""
            })
        };

        gapi.load('client:auth2', start);
    });

    
    return (
        <section className={classes.container}>
            <div className={classes.left}>
                <img className={classes.logo} src={logo} alt="logo" />
                     <h1><b>Login</b></h1>
                        <p>See your growth and get consulting support!</p>
                        <LoginGoogle />
                             <div className={classes.line}>
                                or Sign in with email
                            </div>
                        <LoginForm />
                        <div>
                            <b>Not registered yet? <a href="/">Create an account</a></b>
                        </div>
                        <p className={classes.foot} >2022 Syncee. All rights reserved</p>
             </div>
             <div className={classes.right}>
                <img className={classes.wall} alt="wallpaper" />
            
             </div>
        </section>

    );
}

export default Login;