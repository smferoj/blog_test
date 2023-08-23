import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      © {new Date().getFullYear()} SM Feroj All rights reserved.
    </footer>
  );
};

export default Footer;