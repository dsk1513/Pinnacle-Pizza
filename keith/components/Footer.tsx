'use client'

// Footer.tsx
import React from 'react';
import './Footer.css'; // Make sure to create a corresponding CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="footer-content">
          <div className="restaurant-info">
            <h4 className="footer-title">Find Our Restaurants</h4>
            <span>1654 R. Don Road Avenue #304, Town City</span>
            <span>1654 R. Don Road Avenue #304, Town City</span>
          </div>
          <div className="working-hours">
            <h4 className="footer-title">Working Hours</h4>
            <span>MON-FRI 10AM-6PM</span>
            <span>SAT-SUN 10AM-12PM</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
