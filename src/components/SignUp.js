import React, { useState } from 'react';

export const SignUp = () => {
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const[confirmPassword, setConfirmPassword] = useState('');
    const[showPassword, setshowPassword] = useState(false);
    const[isValid, setIsValid] = useState(false);
    const[touched, setTouched] = useState(false);

    function validatepassword() {
        setTouched(true);
        setshowPassword(true);
        if (password !== confirmPassword) {
            setIsValid(false);      
        }else {
            setIsValid(true);
            alert("User registered successfully");
        }
    }

    return(
        <div>
            <br></br>
            <h3>Sign Up</h3>
            Username: <input type="text" className='form-control' onChange={(e) => setUsername(e.target.value)}></input><br></br>
            Password: <input type={showPassword ? "text":"password"} className='form-control' onChange={(e) => setPassword(e.target.value)}></input><br></br>
            Confirm Password: <input type={showPassword ? "text":"password"} className='form-control' onChange={(e) => setConfirmPassword(e.target.value)}/>
            <label htmlFor='checkbox'>Show Password</label>
            <input type="checkbox" id='checkbox' checked={showPassword} onChange={(e) => setshowPassword(e.target.checked)} /> <br></br>
            <button type="button" className='btn btn-primary' onClick={validatepassword} value="Sign Up" >Sign Up</button><br></br>
            
                 {touched && !isValid && <div className='text-danger'>Password does not match</div>  }      
            
        </div>

    )
}