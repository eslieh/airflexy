import React from "react";
import Header from "../components/header";
import Houselist from "../components/Houselist";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Houselist/>
      <Footer/>
    </div>
  );
};

export default Home;
