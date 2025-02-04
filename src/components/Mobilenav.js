import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Mobilenav = () => {
    return (
        <>
            <div className="mobile_nav">
                <div className="navigators">
                    {/* Explore Route */}
                    <NavLink
                        to="/"
                        className={({ isActive }) => `Navroutes ${isActive ? "active" : ""}`}
                    >
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <span className="routelabel">Explore</span>
                    </NavLink>

                    {/* Wishlists Route */}
                    <NavLink
                        to="/wishlists"
                        className={({ isActive }) => `Navroutes ${isActive ? "active" : ""}`}
                    >
                        <i className="fa-regular fa-heart"></i>
                        <span className="routelabel">Wishlists</span>
                    </NavLink>

                    {/* Profile Route */}
                    <NavLink
                        to="/profile"
                        className={({ isActive }) => `Navroutes ${isActive ? "active" : ""}`}
                    >
                        <i className="fa-regular fa-user"></i>
                        <span className="routelabel">Profile</span>
                    </NavLink>
                </div>
            </div>
        </>
    );
};

export default Mobilenav;
