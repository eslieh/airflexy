import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";

const Houselist = ({ houses }) => {
  const navigate = useNavigate();
  const properties = houses; // Receiving houses as a prop

  // console.log(properties);

  return (
    <div className="houselist-container">
      {properties.map((house) => (
        <div
          className="house-card"
          key={house.property_id}
          onClick={() => navigate(`/property/${house.property_id}`)}
        >
          {/* Wishlist button */}
          <div className="wishlist_sel">
            <button className="wish_listBtn">
              <i className="fa-regular fa-heart"></i>
            </button>
          </div>

          {/* Swiper for sliding images */}
          <Swiper spaceBetween={10} slidesPerView={1} >
            {house.images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  className="house-image"
                  src={image}
                  alt={`${house.city} - ${index + 1}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* House details */}
          <div className="house-info">
            <h3 className="house-location">{house.city}, {house.country}</h3>
            <p className="house-price">${house.price.toLocaleString()}</p>
            <div className="house-details">
              <div className="majordet">
                <i className="fa-solid fa-bed"></i>
                <span className="clasdet">{house.bedrooms} bedrooms</span>
              </div>
              <div className="majordet">
                <i className="fa-solid fa-bath"></i>
                <span className="clasdet">{house.bathrooms} bathrooms</span>
              </div>
            </div>
            <p className="house-amenities">
              {house.amenities ? house.amenities.join(" • ") : "No amenities listed"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Houselist;
