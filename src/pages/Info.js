import { useLocation } from "react-router-dom";

import classes from "./Info.module.css";

function Info(props){
   
    const location = useLocation();

    return(
        <div className={classes.box}>
            <h1 className={classes.h1}>Welcome to your page</h1>
            <div>
                <p><b>Your email is: </b>{location.state.email}</p>
                <p><b>Your password is: </b>{location.state.password}</p>
            </div>

        </div>
    );
}

export default Info;