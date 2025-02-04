import React from "react";
import Header from "../components/header";
import Houselist from "../components/Houselist";
import Footer from "../components/Footer";
import Mobilenav from "../components/Mobilenav"

const Wishlists = () => {
  return (
    <div>
      <Header />
      <Houselist/>
      <Mobilenav/>
      <Footer/>
    </div>
  );
};

export default Wishlists;
