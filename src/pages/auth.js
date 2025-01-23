import React, { useState } from "react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between Login and Signup

  // Toggle between Login and Signup
  const toggleAuthMode = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <div className="auth-container">
      <div className="icon-placeholder">
        <span className="big-icon">airflex.com</span>
      </div>
      <div className="form-container">
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        <form>
          {/* Common Fields */}
          {!isLogin && (
            <div className="form-group">
              <input type="text" id="name" placeholder="Enter your name" />
            </div>
          )}
          <div className="form-group">
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <button type="submit" className="auth-button">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <p className="toggle-text">
          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"}{" "}
          <button
            type="button"
            className="toggle-button"
            onClick={toggleAuthMode}
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;
