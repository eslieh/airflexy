import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // State to track if user is logged in
  const [showDropdown, setShowDropdown] = useState(false); // State to toggle dropdown
  
  const imageSrc = "https://i.pinimg.com/736x/22/df/fa/22dffa1cdf5e8ba349395a5cd4e534eb.jpg";

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };
  const Navigate = useNavigate();

  return (
    <div className="profile-container">
      <div className="profile-section" onClick={toggleDropdown}>
        <i className="fa-solid fa-bars"></i>
        {isLoggedIn ? (
          <img className="user-profile-image" alt="Profile" src={imageSrc} />
        ) : (
          <i className="fa-solid fa-user"></i>
        )}
      </div>
      {showDropdown && (
        <div className="dropdown-menu">
          {isLoggedIn ? (
            <>
              <div className="Logged_details">
              <div className="block-details">
                <div className="details" onClick={ () => ( Navigate('/'))}>  
                <i className="fa-solid fa-magnifying-glass"></i>
                  <span className="routelabel" >Explore</span>
                </div>
                <div className="details" onClick={ () => ( Navigate('/wishlists'))}>  
                  <i className="fa-regular fa-heart"></i>
                  <span className="routelabel">Wishlists</span>
                </div>
                <div className="details" onClick={ () => ( Navigate('/profile'))}>  
                  <i className="fa-regular fa-user"></i>
                  <span className="routelabel">Profile</span>
                </div>
              </div>
              
            </div>
            <div className="details">
              
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
                  <span className="routelabel" onClick={ () => ( Navigate('/auth'))}>Logout</span>
            </div>
            </>
          ) : (
              <div className="logoutbtn">
                <div className="details">
                  <span className="routelabel">Login</span>
                </div>
              </div>
          )}
          
        </div>
      )}
    </div>
  );
};

export default Profile;