import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faGoogle,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <div className="site-footer">
    <h4 className="text-center">CodeBlog</h4>
    <p className="text-center">Follow us on social media</p>
    <div className="footer-social-links">
      <a
        href="https://www.google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="facebook"
      >
        <FontAwesomeIcon icon={faFacebookF} size="2x" />
      </a>
      <a
        href="https://www.google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="twitter"
      >
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a
        href="https://www.google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="instagram"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a
        href="https://www.google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="google"
      >
        <FontAwesomeIcon icon={faGoogle} size="2x" />
      </a>
      <a
        href="https://www.google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
    </div>
  </div>
)

export default Footer