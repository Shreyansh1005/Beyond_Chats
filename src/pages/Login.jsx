import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === formData.email && storedUser.password === formData.password) {
      setLoginSuccess(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  if (loginSuccess) {
    return <Navigate to="/setup" />;
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="input-field"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <div className="password-container">
          <input
            type={passwordVisible ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            className="input-field"
            value={formData.password}
            onChange={handleChange}
            autocomplete="current-password"
            required
          />
          <i
        className={`eye-icon fas fa-eye${passwordVisible ? '-slash' : ''}`}
        onClick={togglePasswordVisibility}
      ></i>
        </div>
        <button type="submit" className="register-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
