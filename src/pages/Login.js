import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginGoogle from "../components/google/LoginGoogle";
import { gapi } from "gapi-script";
import GoogleLogin from "@leecheuk/react-google-login";
import LoginForm from "../components/form/LoginForm";

import classes from "./Login.module.css";

import wallpaper from "../images/syncee_frontend_test_wallpaper.png";
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

    const history = useNavigate();

/*
    function onLoginHandler(loginData){
        fetch(
            'https://fontendtest-40332-default-rtdb.europe-west1.firebasedatabase.app/logininfo.json',
            {
                method: 'POST',
                body: JSON.stringify(loginData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(()=>{
            history('/info');
        });
    }*/
    
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
                        <LoginForm /*onLogin={onLoginHandler}*//>
                        <div>
                            <b>Not registered yet? <a href="/">Create an account</a></b>
                        </div>
                        <p className={classes.foot} >2022 Syncee. All rights reserved</p>
             </div>
             <div className={classes.right}>
                <img className={classes.wall}/* src={wallpaper} alt="wallpaper"*/ />
            
             </div>
        </section>

    );
}

export default Login;