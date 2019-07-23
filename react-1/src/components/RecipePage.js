import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from 'react-router-dom';

// TODO: Você deve verificar se a receita existe
const RecipePage = ({ recipe }) => {
  return (
    <div>
      <img
        className="card-img-top img-fluid"
        src="https://via.placeholder.com/350x300"
        alt=""
      />
      <div className="card-body">
        <h5 className="card-title">TITULO{this.recipe}</h5>
        <p className="card-text">
          <strong>Ingredients: </strong>INGREDIENTS HERE
          <strong>RECIPE PAGE </strong>
        </p>
      </div>
    </div>
  );
};
console.log('recipe item:',this.recipe)
RecipePage.propTypes = {
  recipe: PropTypes.object
};

export default RecipePage;
 
