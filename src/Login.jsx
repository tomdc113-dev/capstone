import { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login({ isOpen, onClose }) {
  const [role, setRole] = useState("Member");
  const [showPassword, setShowPassword] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="login-box" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" type="button" onClick={onClose}>
          ✕
        </button>

        <h2>Welcome!</h2>
        <p className="subtitle">
          Login to your account
        </p>

        <div className="role-tabs">
          {["Member", "Trainer", "Admin"].map((item) => (
            <button
              key={item}
              className={role === item ? "active" : ""}
              onClick={() => setRole(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <label>Email</label>
        <input
          type="email"
          placeholder={`${role.toLowerCase()}@example.com`}
        />

        <label>Password</label>

        <div className="password-box">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
          />

          <span
            onClick={() =>
              setShowPassword(!showPassword)
            }
          >
            {showPassword ? "👁‍🗨️" : "👁"}
          </span>
        </div>

        <button className="login-btn">
          Login as {role}
        </button>
        <div className="forgot">
        <Link
          to="/reset-password"
          className="forgot-link">Forgot Password?
        </Link>
      </div>

        <p className="signup-prompt">
          Don't have an account?{" "}
          <Link to="/register" className="signup-link">
            Sign up now
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;