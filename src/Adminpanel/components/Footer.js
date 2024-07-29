import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white  h-16 p-4">
      <div className="flex items-center justify-between">
        <p>&copy; 2024 Level Up Technologies. All rights reserved.</p>
        <ul className="flex items-center justify-center gap-3">
          <li>
            <a href="/admin/privacy-policy">Privacy Policy </a>
          </li>
          <li>
            <a href="/admin/terms-of-service">Terms of Service</a>
          </li>
          <li>
            <a href="/admin/contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
