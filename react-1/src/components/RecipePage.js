import React from "react";
import PropTypes from "prop-types";
import { withRouter } from 'react-router-dom';

// TODO: Você deve verificar se a receita existe
const RecipePage = ({ ...recipe }) => {
  
  return (
    <div>
      <img
        className="card-img-top img-fluid"
        src={recipe.location.state.thumbnail.thumbnail}
        alt=""
      />
      <div className="card-body">
        <h5 className="card-title">{recipe.location.state.title.title}</h5>
        <p className="card-text">
          <strong>Ingredients: </strong>{recipe.location.state.ingredient.ingredient}
          
        </p>
      </div>
    </div>
  );
};

RecipePage.propTypes = {
  recipe: PropTypes.object
};

export default withRouter(RecipePage);
 
