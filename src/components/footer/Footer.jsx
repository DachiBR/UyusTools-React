import React from 'react';
import './footer.css';

const Footer = () => (
 <footer className="footer">
  <div className="container">
    <div className="row">
      <div className="footer-col">
        <h4>კომპანია</h4>
        <ul>
          <li><a href="/about">ჩვენს შესახებ</a></li>
          <li><a href="/services">ჩვენი სერვისები</a></li>
          <li><a href="/privacy-policy">კონფიდენციალურობის პოლიტიკა</a></li>
          <li><a href="/affiliate-program">პარტნიორული პროგრამა</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>დახმარება</h4>
        <ul>
          <li><a href="/faq">ხშირად დასმული კითხვები</a></li>
          <li><a href="/shipping">მიწოდება</a></li>
          <li><a href="/returns">დაბრუნება</a></li>
          <li><a href="/payment-options">გადახდის მეთოდები</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>რესურსები</h4>
        <ul>
          <li><a href="/blog">ბლოგი</a></li>
          <li><a href="/careers">კარიერა</a></li>
          <li><a href="/support">მხარდაჭერა</a></li>
          <li><a href="/contact">კონტაქტი</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>მოგვყევით</h4>
        <div className="social-links">
          <a href="https://www.facebook.com/profile.php?id=61557424001324" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
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
        შექმნილია და დამუშავებულია{' '}
        <a href="https://www.linkedin.com/in/bregadze28/" target="_blank" rel="noopener noreferrer">დაჩი ბრეგაძე</a>-ს მიერ
      </p>
    </div>
  </div>
</footer>

);

export default Footer;
