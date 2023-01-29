import { useState, useRef } from "react";
import { useNavigate , Link} from "react-router-dom";

import classes from "./LoginForm.module.css";

function LoginForm(props){

    const emailRef= useRef();
    const passwordRef= useRef();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [properEmail, setProperEmail] = useState(false);
    const [checked, setChecked] = useState(true);

    const navigate = useNavigate();
    //var properEmail = false;

    function submitHandler(event){
        event.preventDefault();

        const enteredEmail = emailRef.current.value;
        const enteredPassword = passwordRef.current.value;

        const loginData={
            email: enteredEmail,
            password: enteredPassword
    };
    navigate('/info',{
    state: loginData});

    //props.onLogin(loginData);
    }

    const handleCheck = () => {
        setChecked(!checked);
    };


    const eReg=  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const eRegpass= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[?!*/@$%&]).{5,}'$/;

    const onHandleChange =(e) => {
        const value = e.target.value;
        setEmail(value);
        if(eReg.test(value)){
            setError("");
            setProperEmail(true);
        }
        else{
            setError("Invalid email format");
            setProperEmail(false);
        }
    }

    const onHandleChangePass =(e) => {
        const value = e.target.value;
        setPassword(value);

        if(String(value).length < 5) {
            setError("Passwords must be at least 5 characters");
        }
        else if(!/[a-z]/.test(value)) {
            setError("Passwords must contain lowercase letters");
        }
        else if(!/[A-Z]/.test(value)){
            setError("Passwords must contain uppercase letters");
        }
        else if(!/[0-9]/.test(value)){
            setError("Passwords must contain numbers");
        }
        else if(!/[?!*/@$%&]/.test(value)){
            setError("Passwords must contain special characters");
        }
        else {
            setError("");
        }
    }

    return (
        <div className={classes.form}>
        <form  className={classes.form}  onSubmit= {submitHandler}>
            <div>
                <label htmlFor="email"><b>Email*</b></label>
                <input className={classes.input} type="email"
                  required id="email"
                   ref={emailRef}
                    value={email}
                     onChange= /*{e => setEmail(e.target.value)}*/{onHandleChange}
                     placeholder="mail@website.com" ></input>
            </div>
            <div>
                <label htmlFor="password"><b>Password*</b></label>
                <input className={classes.input} type="password"
                 required id="password"
                 ref={passwordRef} 
                 pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[?!*/@$%&]).{5,}'
                 value={password}
                 onChange= {onHandleChangePass}/* {e=>setPassword(e.target.value)}*/
                 placeholder="Min. 5 character" ></input>
                 <p className={classes.error}> {error} </p>
            </div>
            <div className={classes.helper}>
                <div>
                <input type="checkbox"
                 checked={checked}
                 onChange={handleCheck}
                  id="checkbox"
                  />
                <label htmlFor="checkbox" className={classes.checklabel}>
                <b>Remember me</b>
                </label>
                </div>
                <a href="/"><b>Forget password?</b></a>
                </div>
            <div>
            <input className={classes.btn} type="submit" value="Login" disabled={!properEmail} />
                
            </div>

        </form>
        </div>

    );
}

export default LoginForm;