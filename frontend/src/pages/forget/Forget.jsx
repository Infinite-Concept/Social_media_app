import React from 'react'
import { NavLink } from 'react-router-dom'
import google from "../../assets/icons/google.svg"

function Forget() {
  return (
    <div className='login'>
        <div className="login_container">
            <h3 className="mb-5 text-center text" >Reset your password</h3>
            <p>If you signed up with a username and password, reset your password below.</p>
            <form action="#" className="signin-form">

                <div className="form_input">
                    <input type="text" placeholder="Email" required />
                </div>

                <div className="form_input">
                    <input type="submit" value="Sign up" />
                </div>     
            </form>

            <div className="forget">
                <span>Do you want to go back to?  &nbsp;<NavLink to="/login"> Sign in</NavLink></span>   
            </div>
            
            
        </div>
    </div>
  )
}

export default Forget
