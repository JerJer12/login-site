import Login from "./Login";
import LoginForm from "../components/form/LoginForm";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Info(props){
    const [isLoading, setLoading] = useState(false);
    const [loadInfo, setLoadInfo] = useState([]);
    const location = useLocation();

    //const state = props.location;
    //console.log(state);

    return(
        <div>
            <p>info page</p>
            <div>
                <p>Your email is: {location.state.email}</p>
                <p>Your password is: {location.state.password}</p>
            </div>

        </div>
    );
}

export default Info;