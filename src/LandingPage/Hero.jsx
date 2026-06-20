import "./Hero.css";

function Hero() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="Hero" className="hero">
      <div className="hero-content">
        <h1>Transform Your Body, <br/>
        <br/>
          Transform Your Life
        </h1>
        <p>
          Join ASG_Strength and experience world-class training facilities, expert personal trainers, 
          <br/>and a supportive community dedicated to your fitness journey.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">Get Started </button>
          <button onClick={() => scrollToSection("plans")} className="btn-secondary">
            View Plans
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;