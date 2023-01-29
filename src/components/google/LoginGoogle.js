import { GoogleLogin } from "@leecheuk/react-google-login";

import classes from "./LoginGoogle.module.css"

const clientId='392680066007-l91lc321cs5pqbn5cl5jt7tlsbcvsagb.apps.googleusercontent.com';

const onSuccess = (res) => {
    console.log("Login Succes");
}

const onFailure =(res) => {
    console.log("Login failure");
    //alert(res);
}

function LoginGoogle(){
    return(
        <div id='googleLog' className={classes.google}>
            <GoogleLogin 
                clientId={clientId}
                
                render={renderProps => (
                    <button onClick={renderProps.onClick} className={classes.btn}><b>Sign in with Google</b></button>
                  )}
                onSuccess={onSuccess}
                onFailure={onFailure}
                isSingedIn={true}>
                </GoogleLogin>

        </div>
    )

}


export default LoginGoogle;