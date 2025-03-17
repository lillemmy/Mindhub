import React, { useState } from 'react';
import './signuplogin.css';

const Signuplogin = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isSignUp && formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    
    console.log('Form submitted:', formData);
    alert(isSignUp ? 'Sign up successful!' : 'Login successful!');
    
    
    setFormData({
      username: '',
      password: '',
      confirmPassword: ''
    });
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    
    setFormData({
      username: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (
    <div className="signup-login-container">
      <div className="mental-health-title">MindHaven</div>
      
      <div className="form-wrapper">
        <h2 className="form-title">{isSignUp ? 'SIGNUP' : 'LOGIN'}</h2>
        
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          
          {isSignUp && (
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          )}
          
          <button type="submit" className="submit-button">
            {isSignUp ? 'SUBMIT' : 'LOGIN'}
          </button>
        </form>
        
        <div className="toggle-form">
          <button 
            onClick={toggleForm} 
            className="toggle-button"
          >
            {isSignUp ? 'LOGIN' : 'SIGNUP'}
          </button> 
        </div>
      </div>
    </div>
  );
};

export default Signuplogin;