import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

const Property = () => {
  const { id } = useParams(); // Get property ID from URL
  const navigate = useNavigate();
  const [home, setHome] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://airflexy.onrender.com/api/v1/properties?apikey=$2y$10$dwDUtaq8ab05wVjirxTb5.um3MXAXx5C7/WdYj5s7qKK6UTkpz5ya`
      )
      .then((response) => {
        // Extract the specific property
        const foundProperty = response.data.data.find(
          (property) => property.property_id === parseInt(id)
        );
  
        if (foundProperty) {
          setHome(foundProperty);
        } else {
          setError("Property not found.");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching property:", error);
        setError("Failed to load property details");
        setLoading(false);
      });
  }, [id]);
  
  if (loading) return <p>Loading property details...</p>;
  if (error) return <p>{error}</p>;
  if (!home) return <p>No property found.</p>;
  return (
    <>
      <div className="house_container">
        <div className="action-butons mobile">
          <div className="back-btn">
            <button className="actionbtn" onClick={() => navigate(-1)}>
              <i class="fa-solid fa-chevron-left"></i>
            </button>
          </div>
          <div className="rest-btns">
            <button className="actionbtn">
              <i class="fa-solid fa-arrow-up-from-bracket"></i>
            </button>
            <button className="actionbtn">
              <i class="fa-regular fa-heart"></i>
            </button>
          </div>
        </div>
        <div className="house-main-dettails">
          <div className="images-div desktop">
            <div className="main-images">
              <img className="main-image" src={home.images[0]? home.images[0]: home.images[0]}></img>
            </div>
            {
              <div className="all-images">
                {
                  <Swiper spaceBetween={10} slidesPerView={1}>
                    {home.images.map((image, index) => (
                      <SwiperSlide key={index}>
                        <img
                          className="rest-images"
                          src={image}
                          alt={`${home.location} - ${index + 1}`}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                }
              </div>
            }
          </div>
          <div className="image-div mobile">
            {
              <Swiper spaceBetween={10} slidesPerView={1}>
                {home.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      className="rest-image"
                      src={image}
                      alt={`${home.location} - ${index + 1}`}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            }
          </div>
            <div className="house-details">
                <span className="housename-deta">{home.title}</span>
                <div className="majordet">
                <i class="fa-solid fa-bed"></i>
                <span className="clasdet">{home.bedrooms} bedrooms</span>
              </div>
              <div className="majordet">
                <i class="fa-solid fa-bath"></i>
                <span className="clasdet">{home.bathrooms} bathrooms</span>
              </div>
              <div className="house_amenities">
              <h3>House Amenities</h3>
              <p className="house-amenities">
              {home.amenities ? home.amenities.join(" • ") : "No amenities listed"}</p>
              </div>
              <div className="house_checkout_details">
                
              </div>
            </div>
           
        </div>
        <div className="center_float">
          <div className="center_diver">
            <div className="choosemode">
            <a href="tel:+254795739291" className="call" >
              <div className="callicon" id="phone">
                <div className="center">
                  <i class="fa-solid fa-phone"></i><div className="hidden_mess">Call</div>
                </div>
              </div>
            </a>
            </div>
            <div className="choosemode">
            <a href="https://wa.me/+254795739291" className="call" >
              <div className="callicon" id="wame">
                <div className="center">
                <i class="fa-brands fa-whatsapp"></i><div className="hidden_mess">WhatApp</div>
                </div>
              </div>
            </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Property;
