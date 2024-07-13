import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <a href="https://facebook.com" className="mx-2 text-3xl text-blue-600">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://twitter.com" className="mx-2 text-3xl text-blue-400">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://instagram.com" className="mx-2 text-3xl text-pink-500">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://linkedin.com" className="mx-2 text-3xl text-blue-700">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <p>&copy; 2024 Oasis Hostel. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
