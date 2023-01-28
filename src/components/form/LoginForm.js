import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm(props){

    const emailRef= useRef();
    const passwordRef= useRef();
    //var properEmail = false;

    function submitHandler(event){
        event.preventDefault();

        const enteredEmail = emailRef.current.value;
        const enteredPassword = passwordRef.current.value;

        const loginData={
            email: enteredEmail,
            password: enteredPassword
    };
    props.onLogin(loginData);
    }


    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [properEmail, setProperEmail] = useState(false);

    const history = useNavigate();

   
    

    const eReg=  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const eRegpass= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[?!*/@$%&]).{5,}'$/;

    const onHandleChange =(e) => {
        const value = e.target.value;
        setEmail(value);
        if(eReg.test(value)){
            setError("");
            //properEmail = true;
            setProperEmail(true);
        }
        else{
            setError("Invalid email format");
            //properEmail = false;
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
        <div>
        <form onSubmit= {submitHandler}>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email"
                  required id="email"
                   ref={emailRef}
                    value={email}
                     onChange= /*{e => setEmail(e.target.value)}*/{onHandleChange}
                     placeholder="mail@website.com" ></input>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password"
                 required id="password"
                 ref={passwordRef} 
                 pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[?!*/@$%&]).{5,}'
                 value={password}
                 onChange= {onHandleChangePass}/* {e=>setPassword(e.target.value)}*/
                 placeholder="Min. 5 character" ></input>
                 <p>{error}</p>
                <p>*The password must be at least 5 character long and contain: lower and upper case letter a number an special characters</p>
            </div>
            <div>Placeholder for "remember me" and "forgot password"</div>
            <div>password requirements</div>
            <div>
            <input type="submit" value="Login" disabled={!properEmail} />
                
            </div>

        </form>
        </div>

    );
}

export default LoginForm;