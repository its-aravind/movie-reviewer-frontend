// src/components/Register.js
import axios from 'axios';
import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://movie-reviewer-backend.onrender.com/auth/register', { username, password });
      alert("User Registered successfully")
      navigate('/login');
    } catch (err) {
    }
  };

  return (
    <div>
      <div className='register-form mx-auto mt-5' style={{width:'400px', backgroundColor:'white', borderRadius:'20px'}}>
      <form onSubmit={handleSubmit} className='pt-5 pb-3 px-3'>
        
   
  
        <label className='form-label '>Username</label>
          <input
            type="text"
            className='form-control mb-4'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
                  <label className='form-label'>Password</label>
          <input
            type="password"
            className='form-control mb-4'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button type="submit" className='btn btn-primary my-2 w-100'>Register</button>
          <p className='form-text fs-6 text-center'>Already have an account ? <Link to='/login' >Sign In</Link></p>

        </form>
      </div>
    </div>
  );
};

export default Register;
