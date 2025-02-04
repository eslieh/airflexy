import React from "react";
import Header from "../components/header";
import { Swiper, SwiperSlide } from "swiper/react";
const Home = () => {
  const home = {
    name: "Bangalore in Kiambuu",
    id: 4,
    location: "Kiambu, Kenya",
    price: "KSh 25,000 per month",
    bedrooms: 1,
    bathrooms: 1,
    amenities: ["Security", "Close to bus stop"],
    images: [
      "https://i.pinimg.com/736x/0f/b9/34/0fb934b6ac06c22997901ff67b1a6a48.jpg",
      "https://i.pinimg.com/736x/47/9a/ba/479aba784a0d5eb72beca031fe4288c3.jpg",
      "https://i.pinimg.com/736x/47/9a/ba/479aba784a0d5eb72beca031fe4288c3.jpg",
      "https://i.pinimg.com/736x/47/9a/ba/479aba784a0d5eb72beca031fe4288c3.jpg",
    ],
  };
  return (
    <>
      <div className="house_container">
        <div className="action-butons mobile">
          <div className="back-btn">
            <button className="actionbtn">
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
              <img className="main-image" src={home.images[1]}></img>
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
                <span className="housename-deta">{home.name}</span>
            </div>
        </div>
      </div>
    </>
  );
};

export default Home;
