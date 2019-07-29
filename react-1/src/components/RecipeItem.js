import React from "react";
import { Link } from "react-router-dom";
import { slugify } from "../helpers";

const RecipeItem = props => {
  const recipeLink = "/recipe/" + slugify(props.title);
  const thumbnail = props.thumbnail;
  const title = props.title;
  const ingredient = props.ingredients;

 
  const tituloMark = props.title.split(" ").map(titulo => {
    return titulo
      .toLowerCase()
      .includes(
        props.searchString.toLowerCase() || props.searchString.length === 0
      ) ? (
      <mark>{titulo}</mark>
    ) : (
      titulo
    );
  });

  const ingredienteMark = props.ingredients
    .split(",")
    .map((ingrediente) => {
      return ingrediente
        .toLowerCase()
        .includes(
          props.searchString.toLowerCase() || props.searchString.length === 0
        ) ? (
        <mark>{ingrediente}</mark>
      ) : (
        ingrediente
      );
    });

  return (
    <div className="col-sm-3 mt-4">
      <Link
        to={{
          pathname: recipeLink,
          state: {
            thumbnail: { thumbnail },
            title: { title },
            ingredient: { ingredient }
          }
        }}
      >
        
      

      <div className="card">
        <img className="card-img-top img-fluid" src={props.thumbnail} alt="" />
        <div className="card-body">
          <h5 className="card-title">{tituloMark}</h5>
          <p className="card-text">
            <strong>Ingredients: </strong>
            {ingredienteMark}
          </p>
        </div>
      </div></Link>
    </div>
  );
};

export default RecipeItem;
