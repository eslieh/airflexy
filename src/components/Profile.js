import React, { useState } from "react";

const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // State to track if user is logged in
  const imageSrc =
    "https://i.pinimg.com/736x/22/df/fa/22dffa1cdf5e8ba349395a5cd4e534eb.jpg";

  return (
    <div className="profile-section">
      <i className="fa-solid fa-bars"></i>
      {isLoggedIn ? (
        <img
          className="user-profile-image"
          alt="Profile"
          src={imageSrc}
        />
      ) : (
        <i className="fa-solid fa-user"></i>
      )}
    </div>
  );
};

export default Profile;
