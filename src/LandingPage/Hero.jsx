import "./Hero.css";

function Hero() {
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
          <button className="btn-secondary">View Plans</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;