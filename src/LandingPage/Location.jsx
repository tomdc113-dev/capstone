import "./Location.css";

function Location() {
  return (
    <section id="location" className="visit">
      <div className="visit-left">

        <h2>Visit Us Today</h2>

        <p className="visit-text">
          Located in the heart of the city, ASG_Strength provides easy
          access to world-class fitness facilities and expert trainers
          ready to help you achieve your goals.
        </p>

        <div className="info-box">
          <div className="icon location">📍</div>

          <div>
            <h4>Main Location</h4>
            <p>
              Athletic Strength Gym (ASG)
              <br />
              Alabang, Muntinlupa City
            </p>
          </div>
        </div>

        <div className="info-box">
          <div className="icon phone">📞</div>

          <div>
            <h4>Phone</h4>
            <p>+63 912 345 6789</p>
          </div>
        </div>

        <div className="info-box">
          <div className="icon hours">🕒</div>

          <div>
            <h4>Hours</h4>
            <p>Mon–Fri: 5AM – 11PM</p>
            <p>Sat: 6AM – 10PM</p>
            <p>Sun: 7AM – 8PM</p>
          </div>
        </div>

      </div>

      <div className="visit-right">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3864.1209184829!2d121.0177409740768!3d14.420192281470198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d1005cb46d83%3A0x23367bbf282d8743!2sASG%20(Athletic%20Strength%20Gym)!5e0!3m2!1sen!2sph!4v1781327663603!5m2!1sen!2sph"
          title="ASG Map"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}

export default Location;