import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="register-page">
      <div className="register-card">
        <button
          className="register-close"
          type="button"
          aria-label="Exit registration"
          onClick={() => navigate("/")}
        >
          ✕
        </button>
        <h2>Create your account</h2>
        <p className="register-subtitle">Start your membership with our fitness platform.</p>

        <form className="register-form" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="fullName">Full name</label>
          <input id="fullName" type="text" placeholder="Your full name" required />

          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="you@example.com" required />

          <label htmlFor="password">Password</label>
          <div className="password-box">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
              required
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input id="confirmPassword" type={showPassword ? "text" : "password"} placeholder="Repeat your password" required />

          <label className="terms-checkbox">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              required
            />
            I agree to the <Link to="/terms">Terms & Conditions</Link>
          </label>

          <button className="register-btn" type="submit" disabled={!agreed}>
            Register
          </button>
        </form>

        <p className="login-prompt">
          Already have an account? <Link to="/login" className="login-link">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
