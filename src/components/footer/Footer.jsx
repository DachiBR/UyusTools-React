import React from 'react';
import './footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="about-us.html">About us</a></li>
            <li><a href="services.html">Our services</a></li>
            <li><a href="privacy-policy.html">Privacy policy</a></li>
            <li><a href="affiliate-program.html">Affiliate program</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Get help</h4>
          <ul>
            <li><a href="faq.html">FAQ</a></li>
            <li><a href="shipping.html">Shipping</a></li>
            <li><a href="returns.html">Returns</a></li>
            <li><a href="payment-options.html">Payment options</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Online shop</h4>
          <ul>
            <li><a href="dreli.html">dreli</a></li>
            <li><a href="dreli2.html">dreli2</a></li>
            <li><a href="dreli3.html">dreli3</a></li>
            <li><a href="dreli4.html">dreli4</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Follow us</h4>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
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
