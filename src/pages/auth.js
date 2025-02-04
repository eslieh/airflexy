import React, { useState } from "react";
import { motion } from "framer-motion";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  // Toggle Login/Signup mode
  const toggleAuthMode = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <div className="auth-container">
      {/* Logo initially centered, then pushed up by the form */}
      <motion.div
        className="icon-placeholder"
        initial={{ y: "50vh", opacity: 0 }} // Start in center
        animate={{ y: 0, opacity: 1 }} // Move to top
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <span className="big-icon">airflexy.com</span>
      </motion.div>

      {/* Form slides down and "pushes" the logo */}
      <motion.div
        className="form-container"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1, ease: "easeOut" }}
      >
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        <form>
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
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            type="button"
            className="toggle-button"
            onClick={toggleAuthMode}
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </motion.div>
    </div>
  );
};

export default Auth;
