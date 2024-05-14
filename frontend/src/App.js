import React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from './pages/home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Login from './pages/login/Login';
import "./App.css"
import Register from './pages/register/Register';
import Forget from './pages/forget/Forget';

function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='forget' element={<Forget />} />

      </Routes>

    </Router>
  )
}

export default App
