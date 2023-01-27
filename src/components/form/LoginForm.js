import { useState, useRef } from "react";

function LoinForm(props){

    const emailRef= useRef();
    const passwordRef= useRef();

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

    /*const loginData={
        email: enteredEmail,
        password: enteredPassword
    };*/

    /*
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const eReg=  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const onHandleChange =(e) => {
        const value = e.target.value;
        setEmail(value);
        if(eReg.test(value)){
            setError("");
        }
        else{
            setError("Invalid email format")
        }
    }
*/
    return (
        <div>
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email"  required id="email" ref={emailRef} /*value={email} onChange={onHandleChange}*/ placeholder="mail@website.com" ></input>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" required id="password" ref={passwordRef} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[?!*/@$%&]){5,}" placeholder="Min. 5 character" ></input>
                
            </div>
            <div>Placeholder for "remember me" and "forgot password"</div>
            <div>
            <input type="submit" value="Login" />
                
            </div>

        </form>
        </div>

    );
}

export default LoinForm;