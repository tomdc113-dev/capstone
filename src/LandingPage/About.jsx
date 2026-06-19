import "./About.css";

function About() {
  return (
    <section id="about" className="about">

      <div className="about-header">
        <h2>About ASG_Strength</h2>

        <p>
          We create modern, responsive, and user-friendly experiences
          designed to deliver quality and simplicity.
        </p>
      </div>

      <div className="about-container">

        <div className="about-card">
          <h3>Our Mission</h3>

          <p>
            To build innovative digital solutions that help people
            achieve more with technology.
          </p>
        </div>

        <div className="about-card">
          <h3>Our Vision</h3>

          <p>
            To provide a seamless experience through clean design
            and reliable systems.
          </p>
        </div>

      </div>

    </section>
  );
}

export default About;