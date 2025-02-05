import React, { useState, useEffect } from "react";
import Search from "./search";
import Profile from "./Profile";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  const navigare = useNavigate()
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
    <div className={`header-container ${scrolled ? "scrolled" : ""}`}>
      <div className="logo-container" onClick={() => (navigare('/'))}>
        <span className="logo-name">airflexy</span>
      </div>
      <Search />
      <Profile />
    </div>
    </>
  );
};

export default Header;
