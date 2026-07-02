import "./Footer.css";
import facebookImg from "../assets/facebook.png";
import instagramImg from "../assets/instagram.png";
import tiktokImg from "../assets/tik-tok.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-section">
          <h2 className="footer-logo">ASG_Strength</h2>
          <p>
            Transform your body, transform your life 
            with expert guidance and world-class facilities.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>

          <a href="#Hero">Home</a>
          <a href="#about">About</a>
          <a href="#trainers">Trainers</a>
          <a href="#plans">Membership</a>
          <a href="#location">Location</a>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>

        <div className="contact-links">
            <a href="tel:+639093136752" className="contact-item">
              <span className="contact-icon">📞</span>
              <span>+63 909 313 6752</span>
            </a>
            <a href="mailto:asg_strength@gmail.com" className="contact-item">
              <span className="contact-icon">✉️</span>
              <span>asg_strength@gmail.com</span>
            </a>
            <a href="#location" className="contact-item">
              <span className="contact-icon">📍</span>
              <span>Las Piñas City</span>
            </a>
          </div>
        </div>

        {/* Socials */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="" className="social-item">
              <img src={facebookImg} alt="Facebook" />
              <span>Facebook</span>
            </a>
            <a href="https://www.instagram.com/asg_strength/" target="_blank" rel="noopener noreferrer" className="social-item">
              <img src={instagramImg} alt="Instagram" />
              <span>Instagram</span>
            </a>
            <a href="" className="social-item">
              <img src={tiktokImg} alt="TikTok" />
              <span>TikTok</span>
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 ASG_Strength | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;