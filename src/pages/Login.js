import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginGoogle from "../components/LoginGoogle";
import { gapi } from "gapi-script";
import GoogleLogin from "@leecheuk/react-google-login";
import LoginForm from "../components/form/LoginForm";



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
    }
    
    return (
        <div>
        <div>This is a login page</div>
        <h1>Login</h1>
        <p>See your growth and get consulting support!</p>
        <LoginGoogle />
        <div id="signInDiv">
       
        </div>
        <LoginForm onLogin={onLoginHandler}/>
        
        </div>

    );
}

export default Login;