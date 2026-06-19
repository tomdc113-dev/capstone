import "./Footer.css";

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

          <p>Phone: +63 909 313 6752</p>
          <p>Email: asg_strength@gmail.com</p>
          <p>Address: Las Piñas City</p>
        </div>

        {/* Socials */}
        <div className="footer-section">
          <h3>Follow Us</h3>

          <a href="">Facebook</a>
          <a href="https://www.instagram.com/asg_strength/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="">TikTok</a>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 ASG_Strength | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;