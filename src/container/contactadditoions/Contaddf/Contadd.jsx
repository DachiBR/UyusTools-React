import React, { useState } from 'react';
import './contadd.css';
import { IonIcon } from '@ionic/react'; 
import { logoFacebook, logoTwitter, logoLinkedin, logoInstagram, locationOutline, mailOutline, callOutline } from 'ionicons/icons';
import emailjs from 'emailjs-com';

const Contadd = () => {
  const [isMessageSent, setMessageSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm('service_t80i5d8', 'template_on4w60i', e.target, 'AaWSdPiJu6U-cIb1N');
      setMessageSent(true);
      e.target.reset();
      setTimeout(() => {
        setMessageSent(false);
      }, 5000);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="contactUs">
      <div className="title">
        <h2>Free Consultation</h2>
      </div>
      <div className="box">
        <div className="contact form">
          <h3>Send a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="formBox">
              <div className="row50">
                <div className="inputBox">
                  <span>First name</span>
                  <input type="text" name="from_name" placeholder="First Name" />
                </div>
                <div className="inputBox">
                  <span>Last name</span>
                  <input type="text" name="to_name" placeholder="Last Name" />
                </div>
              </div>
              <div className="row50">
                <div className="inputBox">
                  <span>Email</span>
                  <input type="email" name="reply_to" placeholder="example@gmail.com" />
                </div>
                <div className="inputBox">
                  <span>Mobile</span>
                  <input type="tel" name="UyusTools" placeholder="+995-555-555-555" />
                </div>
              </div>
              <div className="row100">
                <div className="inputBox">
                  <span>Message</span>
                  <textarea name="message" placeholder="Write your message here..."></textarea>
                </div>
              </div>
              <div className="row100">
                <div className="inputBox">
                  <input type="submit" value="Send" />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="contact info">
          <h3>Contact info</h3>
          <div className="infoBox">
            <div>
              <span><IonIcon icon={locationOutline} /></span>
              <p>Georgia, Tbilisi <br /></p>
            </div>
            <div>
              <span><IonIcon icon={mailOutline} /></span>
              <a href="mailto:uyustools@gmail.com">uyustools@gmail.com</a>
            </div>
            <div>
              <span><IonIcon icon={callOutline} /></span>
              <a href="tel:+995 574 77 24 86">+995-555-555-555</a>
            </div>
            <ul className="SocialMedia">
              <li><a href="#"><IonIcon icon={logoFacebook} /></a></li>
              <li><a href="#"><IonIcon icon={logoTwitter} /></a></li>
              <li><a href="#"><IonIcon icon={logoLinkedin} /></a></li>
              <li><a href="#"><IonIcon icon={logoInstagram} /></a></li>
            </ul>
          </div>
        </div>
        <div className="contact map">
          <iframe title="Google Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190570.9834491337!2d44.641956" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      {isMessageSent && (
        <div className="successMessage">
          Message sent successfully :)
        </div>
      )}
    </div>
  );
};

export default Contadd;
