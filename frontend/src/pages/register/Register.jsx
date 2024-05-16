import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import google from "../../assets/icons/google.svg"
import facebook from "../../assets/icons/facebook.svg"
import axios from "axios"
import "./register.scss"
import Modal from '../../common/modal/Modal'

function Register() {

    const[register, setRegister] = useState({})
    const[error, setError] = useState({})
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        const {name, value} = e.target

        setRegister({...register, [name]: value})
        setError(prevError => ({...prevError, [name]: ""}))
    }

    const openModal = () => {
        setIsOpen(true);
      };
    
    const closeModal = () => {
        setIsOpen(false);
        navigate("/login")
    };

    const handleForm = async (e) => {
        e.preventDefault()

        let error = {}

        let usernameRegex = /[^a-zA-Z0-9._]/;
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

        if(register.username === ""){
            error.username = "username is required"
        }else if(register.username.length <= 3){
            error.username = "username must contain more than one letters"
        }else if(usernameRegex.test(register.username)){
            error.username = "username can only contain letter, number, periods, and underscores."
        }

        if(register.email === ""){
            error.email = "email is required"
        }else if(!emailRegex.test(register.email)){
            error.email = "email is not valid"
        }

        
        if (register.password === "") {
            error.password = 'Password is required';
        } else if (!passwordRegex.test(register.password)) {
            error.password = 'Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, and one digit';
        }

        if (Object.keys(error).length > 0) {

            setError(error);
        } else {

            try {
              
                const response = await axios.post("http://localhost:3564/user/register", register)

                const data = await response.data

                if(response.status >= 200 && response.status < 300){
                    console.log(data);
                    openModal()
                }else{
                    
                }
      
            } catch (error) {
              console.log(error);
                let errorw = {}
                errorw.response = error.response.data.message;
                setError(errorw)
            }
          }
    }


  return (
    <div className='login register' id='register' onSubmit={handleForm}>
        <div className="login_container">
            <h1 className='mb-5 text-center text'>Threads app</h1>
            <h3 className="mb-5 text-center text">Welcome back?</h3>
            <form action="#" className="signin-form">
                <div className="form_input">
                    <input type="text" placeholder="Username" required name='username' value={register.username} onChange={handleSubmit}/>
                    {error.username && <p className="error">{error.username}</p>}
                </div>

                <div className="form_input">
                    <input type="text" placeholder="Email" required  name='email' value={register.email} onChange={handleSubmit} />
                    {error.email && <p className="error">{error.email}</p>}
                </div>

                <div className="form_input">
                    <input id="password-field" type="password" placeholder="Password" required  name='password' value={register.password} onChange={handleSubmit} />
                    <span toggle="#password-field" className="fa fa-fw fa-eye field-icon toggle-password"></span>
                    {error.password && <p className="error">{error.password}</p>}
                    {error.response && <p className="error">{error.response}</p>}

                </div>

                <div className="form_input">
                    <input type="submit" value="Sign up" />
                </div>     
            </form>

            <div className="forget">
                <span>Don't have an account?  &nbsp;<NavLink to="/login"> Sign in</NavLink></span>   
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
                    <p>Continue with Facebook</p>
                </div>
            </div>
        </div>

        {/* Modal  */}
      {isOpen && (
        <Modal isOpen={isOpen} onClose={closeModal}>
            <h2>Register Successful</h2>
            <p>A verification message has been send to your mail, verify your email before you can login</p>
        </Modal>
      )}
    </div>
  )
}

export default Register
