import React, { useState } from 'react'
import "./login.scss"
import { NavLink } from 'react-router-dom'
import google from "../../assets/icons/google.svg"
import facebook from "../../assets/icons/facebook.svg"
import axios from 'axios'

function Login() {
    const[login, setLogin] = useState({})
    const[error, setError] = useState({})

    const handleSubmit = (e) => {
        const {name, value} = e.target

        setLogin({...login, [name]: value})
    }

    const formSubmit = async(e) => {
        e.preventDefault()

        let Error = {}

        try {

            const data = axios.post("", )
            
        } catch (error) {
            console.log(error);
        }

    }

  return (
    <div className='login' onSubmit={formSubmit}>
        <div className="login_container">
            <h1 className='mb-5 text-center text'>Threads app</h1>
            <h3 className="mb-5 text-center text">Welcome back?</h3>
            <form action="#" className="signin-form">
                <div className="form_input">
                    <input type="text" placeholder="Username" required name='username' value={login.username} onChange={handleSubmit} />
                </div>
                <div className="form_input">
                    <input id="password-field" type="password" placeholder="Password" required name='password' value={login.password} onChange={handleSubmit} />
                    <span toggle="#password-field" className="fa fa-fw fa-eye field-icon toggle-password"></span>
                </div>
                <div className="form_input_ch">
                    <label className="check_wrap">
                        <input type="checkbox"  /> 
                        <span>Remember Me</span>
                    </label>       

                    <div className="">
                        <NavLink to="/forget"> forget password</NavLink>  
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
                    <img src={facebook} alt="" />
                    <p>Continue with Google</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
