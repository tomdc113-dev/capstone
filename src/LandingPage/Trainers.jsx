import "./Trainers.css";

const trainers = [
  {
    initials: "DA",
    name: "Dy Ann Razonado",
    specialty: "Strength Training",
    certs: ["Duelists", "Controller"],
    rating: "4.9",
    reviews: "128 reviews",
  },
  {
    initials: "JH",
    name: "Jasmine Hope Cinco",
    specialty: "Cardio & HIIT",
    certs: ["Initiator", "Sentinel"],
    rating: "4.8",
    reviews: "95 reviews",
  },
  {
    initials: "TA",
    name: "Trecia Anne Quezada",
    specialty: "Yoga & Flexibility",
    certs: ["Duelist", "Controller"],
    rating: "4.7",
    reviews: "112 reviews",
  },
  {
    initials: "TD",
    name: "Tom Dela Cruz",
    specialty: "CrossFit & Functional",
    certs: ["Duelist", "Sentinel"],
    rating: "4.9",
    reviews: "156 reviews",
  },
];
function Trainers() {
  return (
    <section id="trainers" className="trainers">
      <h2>Meet Our Expert Trainers</h2>

      <p className="subtitle">
        Choose your ideal trainer and start your transformation journey
      </p>

      <div className="trainer-grid">
        {trainers.map((trainer, index) => (
          <div className="trainer-card" key={index}>
            <div className="avatar">
              {trainer.initials}
            </div>

            <h3>{trainer.name}</h3>

            <p className="specialty">
              {trainer.specialty}
            </p>

            <div className="cert-section">
              <span>CERTIFICATIONS:</span>

              <div className="certs">
                {trainer.certs.map((cert, i) => (
                  <span key={i} className="badge">
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            <div className="rating">
              ⭐ {trainer.rating}
              <span>({trainer.reviews})</span>
            </div>

            <button>
              View Profile & Book
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Trainers;