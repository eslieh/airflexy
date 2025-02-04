import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";

const Houselist = () => {
  const Navigate = useNavigate()
  // Sample data (Replace with API data or props)
  const houses = [
    {
      id: 1,
      location: "Nairobi, Kenya",
      price: "KSh 50,000 per month",
      bedrooms: 3,
      bathrooms: 2,
      amenities: ["WiFi", "Parking", "Garden"],
      images: [
        "https://a0.muscache.com/im/pictures/miso/Hosting-609006999110305598/original/1fde968d-a0db-435d-8fa6-9bc6601d89fd.jpeg?im_w=720&im_format=avif",
        "https://a0.muscache.com/im/pictures/miso/Hosting-609006999110305598/original/df34adf0-fcc0-44c3-be5c-034d538e2cd9.jpeg?im_w=720&im_format=avif",
      ],
    },
    {
      id: 2,
      location: "Kahawa Sukari, Kenya",
      price: "KSh 30,000 per month",
      bedrooms: 2,
      bathrooms: 1,
      amenities: ["Water Heater", "Balcony"],
      images: [
        "https://i.pinimg.com/736x/3e/c7/99/3ec7998d386c6fb4fc8b68b99cc44c21.jpg",
        "https://i.pinimg.com/736x/25/8b/a6/258ba6928a8707a39ba88dac553a4236.jpg",
      ],
    },
    {
      id: 3,
      location: "Westlands, Nairobi",
      price: "KSh 100,000 per month",
      bedrooms: 4,
      bathrooms: 3,
      amenities: ["Swimming Pool", "Gym", "Garage"],
      images: [
        "https://i.pinimg.com/736x/13/97/30/13973018983902fd3ab32ca10798f39f.jpg",
        "https://i.pinimg.com/736x/13/97/30/13973018983902fd3ab32ca10798f39f.jpg",
      ],
    },
    {
      id: 4,
      location: "Kiambu, Kenya",
      price: "KSh 25,000 per month",
      bedrooms: 1,
      bathrooms: 1,
      amenities: ["Security", "Close to bus stop"],
      images: [
        "https://i.pinimg.com/736x/0f/b9/34/0fb934b6ac06c22997901ff67b1a6a48.jpg",
        "https://i.pinimg.com/736x/47/9a/ba/479aba784a0d5eb72beca031fe4288c3.jpg",
      ],
    },
    {
      id: 5,
      location: "Karen, Nairobi",
      price: "KSh 200,000 per month",
      bedrooms: 5,
      bathrooms: 4,
      amenities: ["Garden", "Jacuzzi", "High-speed internet", "Garage"],
      images: [
        "https://i.pinimg.com/736x/44/a0/a8/44a0a8dc801d5fc012b56ca7bc774cd5.jpg",
        "https://a0.muscache.com/im/pictures/72bba870-888c-4b21-8eba-6448db405afc.jpg?im_w=960&im_format=avif",
      ],
    },
  ];
  
  return (
    <div className="houselist-container">
      {houses.map((house) => (
        <div className="house-card" key={house.id} onClick={() => (Navigate(`/property/${house.id}`))}>
          {/* Swiper for sliding images */}
          <div className="wishlist_sel"><button className="wish_listBtn"><i class="fa-regular fa-heart"></i></button></div>
            <Swiper spaceBetween={10} slidesPerView={1}>
            {house.images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  className="house-image"
                  src={image}
                  alt={`${house.location} - ${index + 1}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* House details */}
          <div className="house-info">
            <h3 className="house-location">{house.location}</h3>
            <p className="house-price">{house.price}</p>
            <div className="house-details">
              <div className="majordet">
                <i class="fa-solid fa-bed"></i>
                <span className="clasdet">{house.bedrooms} bedrooms</span>
              </div>
              <div className="majordet">
                <i class="fa-solid fa-bath"></i>
                <span className="clasdet">{house.bathrooms} bathrooms</span>
              </div>
            </div>
            <p className="house-amenities">{house.amenities.join(" • ")}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Houselist;
