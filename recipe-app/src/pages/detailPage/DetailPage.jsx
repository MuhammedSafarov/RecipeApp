import React from "react";
import "./DetailPage.scss";
import { useParams } from "react-router-dom";
import recipes from "../../Data/recipes";
import { BsFillStarFill } from "@react-icons/all-files/bs/BsFillStarFill";

const DetailPage = () => {
  const { id } = useParams();
  const selectedRecipe = recipes.find((recipe) => recipe.id === parseInt(id));

  return (
    <div className="detail-container">
      <img src={selectedRecipe.image} alt="" />
      <div className="detail-info">
        <h1 className="food-name">{selectedRecipe.title}</h1>
        <p className="recipe">{selectedRecipe.description}</p>
        <div className="vote">
          <b>{selectedRecipe.rating} </b>{" "}
          <BsFillStarFill className="star icon" />
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
