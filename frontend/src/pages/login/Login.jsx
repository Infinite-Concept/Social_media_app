import React from 'react'
import "./login.scss"
import { NavLink } from 'react-router-dom'
import google from "../../assets/icons/google.svg"

function Login() {
  return (
    <div className='login'>
        <div className="login_container">
            <h1 className='mb-5 text-center text'>Threads app</h1>
            <h3 className="mb-5 text-center text">Welcome back?</h3>
            <form action="#" className="signin-form">
                <div className="form_input">
                    <input type="text" placeholder="Username" required />
                </div>
                <div className="form_input">
                    <input id="password-field" type="password" placeholder="Password" required />
                    <span toggle="#password-field" className="fa fa-fw fa-eye field-icon toggle-password"></span>
                </div>
                <div className="form_input_ch">
                    <label className="check_wrap">
                        <input type="checkbox"  /> 
                        <span>Remember Me</span>
                    </label>       

                    <div className="">
                        <NavLink> forget password</NavLink>  
                    </div>                        
                </div>

                <div className="form_input">
                    <input type="submit" value="Sign in" />
                </div>     
            </form>

            <div className="forget">
                <span>Don't have an account?  &nbsp;<NavLink to="/register"> Sign up</NavLink></span>   
            </div>
            
            <p className="underline">
                <span></span>
                <ins>Or</ins>
                <span></span>
            </p>
            <div className="social_link">
                
                <div className='inner_social'>
                    <img src={google} alt="" />
                    <p>Continue with Google</p>
                </div>

                <div className='inner_social'>
                    <img src={google} alt="" />
                    <p>Continue with Google</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
