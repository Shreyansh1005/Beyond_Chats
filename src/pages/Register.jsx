import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import '../styles/Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(formData));
    setRedirectToLogin(true);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  if (redirectToLogin) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="register-container">
  <h2 className="register-title">Create an Account</h2>
  <form className="register-form" onSubmit={handleSubmit}>
    <input
      type="text"
      name="name"
      placeholder="Full Name"
      className="input-field"
      value={formData.name}
      onChange={handleChange}
      required
    />
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
        required
      />
      <i
        className={`eye-icon fas fa-eye${passwordVisible ? '-slash' : ''}`}
        onClick={togglePasswordVisibility}
      ></i>
    </div>
    
    {/* Register Button */}
    <button type="submit" className="register-btn">
      Register
    </button>
    
    {/* Design Paragraph */}
    <p className="or-text">or</p>
    
    {/* Google Button */}
    <button type="button" className="google-btn">
      <i className="fab fa-google"></i> 
      Continue with Google
    </button>
  </form>
</div>

  );
};

export default Register;
