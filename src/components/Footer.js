import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-items">
          <h2>About</h2>
          <Link to="/">About Sonesta Hotels & Resorts</Link>
          <Link to="/">Media & Accolades</Link>
          <Link to="/">Gallery</Link>
          <Link to="/">CSR & Sustainability</Link>
          <Link to="/">Sonesta Air</Link>
          <Link to="/">Nature Trails</Link>
          <Link to="/">Sonesta Box Office</Link>
          <Link to="/">Terms & Conditions</Link>
          <Link to="/">Privacy Statement</Link>
        </div>
        <div className="footer-link-items">
          <h2>Get In Touch</h2>
          <Link to="/">Know Sri Lanka</Link>
          <Link to="/">know USA</Link>
          <Link to="/">Contact Us</Link>
          <h2>Sections</h2>
          <Link to="/">Careers</Link>
          <Link to="/">Blog</Link>
          <Link to="/">Sonesta Affliate Programme</Link>

        </div>

        <div className="footer-link-items">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </div>
          <h2>Get Sonesta in your inbox</h2>
          <div className="input-areas">
            <form>
              <input
                className="footer-input"
                name="email"
                type="email"
                placeholder="Your Email"
              />
              <button className="footerButton" buttonStyle="btn--outline">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
