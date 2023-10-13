import React from "react";
import CardComponent from "../../components/CardComponent/CardComponent";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="home-container">
      <h1 className="header">Recipe APP</h1>
      <CardComponent />
    </div>
  );
};

export default HomePage;
