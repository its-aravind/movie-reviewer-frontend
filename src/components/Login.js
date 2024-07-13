// src/components/Login.js
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://movie-reviewer-backend-2.onrender.com/auth/login', { username, password });
      navigate('/movies/'+response.data._id);
    } catch (err) {
    }
  };

  return (
    <div>
      <div className='login-form mx-auto mt-5 ' style={{width:'400px', backgroundColor:'white', borderRadius:'20px'}}>
      <form onSubmit={handleSubmit} className=' pt-5 pb-3 px-3'>
        <label className='form-label '>Username</label>
        <input
          type="username"
          className='form-control mb-4' 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
        />
        <label className='form-label'>Password</label>
        <input
          type="password"
          className='form-control mb-4'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit" className='btn btn-primary my-2 w-100'>Login</button>
        <p className='form-text fs-6 text-center'>Don't have an account ? <Link to='/register' >Sign Up</Link></p>
      </form>
      </div>
    </div>
  );
};

export default Login;
