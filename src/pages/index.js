import React, { useEffect, useState } from "react";
import Houselist from "../components/Houselist";
import Header from "../components/header";
import Footer from "../components/Footer";
import Mobilenav from "../components/Mobilenav";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState(null); // Start with null to match API response structure
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch API data when the component mounts
    axios
      .get(
        `https://airflexy.onrender.com/api/v1/properties?apikey=$2y$10$dwDUtaq8ab05wVjirxTb5.um3MXAXx5C7/WdYj5s7qKK6UTkpz5ya`
      ) // Use env variable for security
      .then((response) => {
        setData(response.data.data); // Fix: Set `data.data`, not just `data`
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Failed to load data");
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Header />

      {loading ? (
        <p className="loading">Loading properties...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <Houselist houses={data} />
      )}

      <Mobilenav />
      <Footer />
    </div>
  );
};

export default Home;
