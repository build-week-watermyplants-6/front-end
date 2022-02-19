import React from 'react';


const Register = (props)=>{



    return(
    <div className=''>
        <form className=''>
            <h2 className='title'>Water Your Plants</h2>
            <div className='inputContainer'>
                <label htmlFor="email">
                    Email Address
                    <input
                    id="email"
                    name="email"
                    type="email"
                    // value={}
                    // onChange={handleChange} 
                    autoComplete="email"
                    placeholder="Enter email..." 
                    />
                </label>
            </div>
            <div className='inputContainer'>
                <label htmlFor="password" > 
                    Password
                    <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required 
                    // onChange={handleChange} 
                    //  value={}  
                    placeholder="Enter password..." 
                    />
                </label>
            </div>
            <div className='inputContainer'>
                <label htmlFor=''>
                    Phone Number
                    <input
                    id="phone"
                    name="phone"
                    type="phone"
                    autoComplete="phone"
                    required
                    // onChange={handleChange} 
                    // value={}
                    />
                </label>
            </div>
            <button type="submit" className="submitBtn" value="register">Log In</button>
        </form>
    </div>)
}




export default Register;