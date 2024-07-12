import React from 'react';
import './footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="/about">About us</a></li>
            <li><a href="/services">Our services</a></li>
            <li><a href="/privacy-policy">Privacy policy</a></li>
            <li><a href="/affiliate-program">Affiliate program</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Get help</h4>
          <ul>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/shipping">Shipping</a></li>
            <li><a href="/returns">Returns</a></li>
            <li><a href="/payment-options">Payment options</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Online shop</h4>
          <ul>
            <li><a href="/shop/dreli">dreli</a></li>
            <li><a href="/shop/dreli2">dreli2</a></li>
            <li><a href="/shop/dreli3">dreli3</a></li>
            <li><a href="/shop/dreli4">dreli4</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Follow us</h4>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          </div>
          <div>
            <a href="tel:+995574772486" className="contact1">+995574772486</a>
            <a href="mailto:uyustools@gmail.com" className="contact1">uyustools@gmail.com</a>
          </div>
        </div>
      </div>
      <div className="copyright-wrapper">
        <p>
          Designed and Developed by{' '}
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">Dachi Bregadze</a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
