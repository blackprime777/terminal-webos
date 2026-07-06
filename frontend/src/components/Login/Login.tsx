import { useState } from "react";
import Desktop from "../Desktop/Desktop";
import "./Login.css";

export default function Login() {
  const [loggedIn, setLoggedIn] = useState(false);

  if (loggedIn) {
    return <Desktop />;
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Terminal WebOS</h2>

        <div className="login-form">
          <label>Username</label>

          <input
            type="text"
            placeholder="Enter username"
            className="login-input"
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter password"
            className="login-input"
          />

          <button
            onClick={() => setLoggedIn(true)}
            className="login-button"
          >
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
}
