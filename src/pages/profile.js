import { useState } from "react";
import Header from "../components/header";
import Footer from "../components/Footer";
import Mobilenav from "../components/Mobilenav";

export default function Profile() {
  const [showEditForm, setShowEditForm] = useState(false);
  const [profile, setProfile] = useState({
    name: "Eslieh",
    role: "Guest",
    school: "Moi Forces Academy, Mombasa",
    location: "Nairobi, Kenya",
    languages: "English and Swahili",
    emailConfirmed: true,
    phoneConfirmed: true,
  });

  const handleEditClick = () => setShowEditForm(true);
  const handleClose = () => setShowEditForm(false);
  const handleChange = (e) =>
    setProfile({ ...profile, [e.target.name]: e.target.value });

  return (
    <>
      <Header />
      <div className="center_profile">
        <div className="profile-containers">
          {/* Profile Card */}
          <div className="image_card">
            
              <div className="profile-card">
              <img
              src="https://a0.muscache.com/im/pictures/user/User-540885264/original/3b6a5395-309e-45b5-b57d-eca31c9c5f02.jpeg?im_w=240&im_format=avif"
              alt="Profile"
              className="profile-image"
            />{" "}
                <div className="profiledaat">
                  <h2 className="profile-name">{profile.name}</h2>
                  <p className="profile-role">{profile.role}</p>
                  <p className="profile-years">1 Year on airflexy</p>
                </div>
              </div>
            {/* Confirmed Info */}
            <div className="confirmed-info">
              <h3>{profile.name}'s confirmed information</h3>
              <p>✔ Email address</p>
              <p>✔ Phone number</p>
            </div>
            {/* Edit Profile */}
            <div className="profile-details">
              <button onClick={handleEditClick} className="edit-button">
                Edit Profile
              </button>
              <p>📚 Where I went to school: {profile.school}</p>
              <p>📍 Lives in {profile.location}</p>
              <p>💬 Speaks {profile.languages}</p>
            </div>
            {/* Modal for Editing */}
            {showEditForm && (
              <div className="modal-overlay">
                <div className="modal">
                  <h2>Edit Profile</h2>
                  <input
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={handleChange}
                    placeholder="Name"
                  />
                  <input
                    type="text"
                    name="school"
                    value={profile.school}
                    onChange={handleChange}
                    placeholder="School"
                  />
                  <input
                    type="text"
                    name="location"
                    value={profile.location}
                    onChange={handleChange}
                    placeholder="Location"
                  />
                  <input
                    type="text"
                    name="languages"
                    value={profile.languages}
                    onChange={handleChange}
                    placeholder="Languages"
                  />
                  <div className="modal-buttons">
                    <button onClick={handleClose} className="cancel-button">
                      Cancel
                    </button>
                    <button onClick={handleClose} className="save-button">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Mobilenav />
    </>
  );
}
