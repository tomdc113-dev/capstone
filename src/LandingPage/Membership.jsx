import "./Membership.css";

function Membership() {
  const plans = [
    {
      title: "Free Trial",
      subtitle: "Try us for 7 days",
      price: "₱0",
      duration: "/7 days",
      button: "Start Trial",
      features: [
        "Limited gym access",
        "classic",
        "Layla",
      ],
    },
    {
      title: "Monthly",
      subtitle: "Flexible & affordable",
      price: "₱29",
      duration: "/month",
      button: "Get Started",
      features: [
        "Vandal",
        "Phantom",
        "24/7 gym access",
    
    
      ],
    },
    {
      title: "Quarterly",
      subtitle: "Better value option",
      price: "₱79",
      duration: "/3 months",
      button: "Get Quarterly",
      features: [
        "24/7 gym access",
        "6 trainer sessions",
        "Custom workout plans",
        "Meal planning access",
      ],
    },
    {
      title: "Yearly ⭐",
      subtitle: "Best value - save 30%",
      price: "₱199",
      duration: "/year",
      button: "Go Yearly",
      yearly: true,
      features: [
        "24/7 gym access",
        "Unlimited sessions",
        "Priority trainer booking",
        "Full meal planning",
        "Locker reservation",
      ],
    },
  ];

  return (
    <section id="plans" className="membership">
      <div className="membership-header">
        <h2>Membership Plans</h2>
        <p>Choose the plan that fits your fitness goals</p>
      </div>

      <div className="plans-container">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`plan-card 
            } ${plan.yearly ? "yearly" : ""}`}
          >
            {plan.popular && (
              <span className="popular-badge">Popular</span>
            )}

            <h3>{plan.title}</h3>
            <p className="subtitle">{plan.subtitle}</p>

            <div className="price">
              <span>{plan.price}</span>
              <small>{plan.duration}</small>
            </div>

            <ul>
              {plan.features.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <button>{plan.button}</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Membership;