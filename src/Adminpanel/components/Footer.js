import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-4">
      <div className="flex flex-col sm:flex-row items-center sm:justify-between justify-center space-y-1 sm:space-y-0 text-sm sm:text-lg">
        <p className="text-center sm:text-left">&copy; 2024 Level Up Technologies. All rights reserved.</p>
        <ul className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3">
          <li>
            <a href="/admin/privacy-policy" className="hover:underline">Privacy Policy</a>
          </li>
          <li>
            <a href="/admin/terms-of-service" className="hover:underline">Terms of Service</a>
          </li>
          <li>
            <a href="/admin/contact" className="hover:underline">Contact Us</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
