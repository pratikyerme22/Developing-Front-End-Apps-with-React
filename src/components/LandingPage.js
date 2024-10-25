// src/components/LandingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/products');
  };

  return (
    <div>
      <h1>Welcome to the Plant Store</h1>
      <button onClick={handleGetStarted}>Get Started</button>
    </div>
  );
};

export default LandingPage;
