import React from "react";
import PropTypes from "prop-types";
import RecipeItem from "./RecipeItem";
import { withRouter } from "react-router-dom";

const receitasFiltradas = (pRecipes, pSearchString) => {
  return pRecipes.filter(
    receita =>
      receita.ingredients.search(new RegExp(pSearchString, "i")) > -1 ||
      receita.title.search(new RegExp(pSearchString, "i")) > -1 ||
      pSearchString.length === 0
  );
};

const Home = ({ recipes = [], searchString = "" }) => {
  return (
    <div className="row">
      {receitasFiltradas(recipes, searchString).map((receita, index) => (
        <RecipeItem
          key={index}
          title={receita.title}
          ingredients={receita.ingredients}
          thumbnail={receita.thumbnail}
          searchString={searchString}
        />
      ))}
    </div>
  );
};

Home.propTypes = {
  searchString: PropTypes.string,
  recipes: PropTypes.array
};

export default withRouter(Home);
