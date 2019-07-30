import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

// TODO: Você deve verificar se a receita existe
const RecipePage = ({ recipe }) => {
  if (recipe) {
    return (
      <div>
        <img className="card-img-top img-fluid" src={recipe.thumbnail} alt="" />
        <div className="card-body">
          <h5 className="card-title">{recipe.title}</h5>
          <p className="card-text">
            <strong>Ingredients: </strong>
            {recipe.ingredients}
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <strong>NENHUMA RECEITA ENCONTRADA </strong>
      </div>
    );
  }
};

RecipePage.propTypes = {
  recipe: PropTypes.object
};

export default withRouter(RecipePage);
