import React from "react";
// import { Link } from 'react-router-dom';
// import axios from 'axios';

const Login = () => {
    return (
        <div className="">
            <form className="" >
                <h2 className="title">Enter your email and Password</h2>
                <div className="inputContainer">
                    <label htmlFor="email" className="label">Email: </label>
                    <input 
                        type="text" 
                        name="email" 
                        // value={} 
                        // onChange={handleChange} 
                        placeholder="Enter email..." 
                        className="input" 
                    />
                </div>
                <div className="inputContainer">
                    <label htmlFor="password" className="label">Password: </label>
                    <input 
                        type="password" 
                        name="password" 
                        // value={} 
                        // onChange={handleChange} 
                        placeholder="Enter password..." 
                        className="input" 
                    />
                </div> 
                <div>
                    {/* { loginFailed && <p className="error-msg">Email or password incorrect </p>} */}
                </div>
                <button type="submit" className="submitBtn" value="Log In">Log In</button>
                <p>Don't have an account?</p>
                {/* <Link to='/signup'>Sign Up</Link> */}
            </form>
        </div>
    )
}

export default Login;
