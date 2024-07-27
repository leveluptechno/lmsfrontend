import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white  h-16 p-4">
      <div className="flex items-center justify-between">
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
        <ul className="flex items-center justify-center">
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/terms-of-service">Terms of Service</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
