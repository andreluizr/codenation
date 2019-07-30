import React, { Component } from "react";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import RecipePage from "./RecipePage";
import { slugify } from "../helpers";
import recipes from "../sample_data/recipes.json";

class App extends Component {
  constructor(props) {
    super(props);

    this.receitas = recipes.results;
  }

  getNavbarString = e => this.props.history.push("/" + e.target.value);

  setSearchString = () => {
    return this.props.location.pathname.substring(0, 8) === "/recipe/"
      ? ""
      : this.props.location.pathname.substring(1);
  };

  getRecipe = () => {
    const recipeLink = this.props.location.pathname.substring(8);

    const oRecipe = this.receitas.filter(
      receita => slugify(receita.title) === recipeLink
    );

    return oRecipe[0];
  };

  render() {
    const pSearchString = this.setSearchString();

    return (
      <div className="App">
        {/* TODO: Navbar precisa receber a string da URL */}
        <Navbar
          searchString={pSearchString}
          getNavbarString={this.getNavbarString}
        />
        )}/>
        <div className="container mt-10">
          {/* TODO: Implementar rotas  */}
          <Switch>
            <Route
              exact
              path="/recipe/:id"
              render={props => (
                <RecipePage {...props} recipe={this.getRecipe()} />
              )}
            />

            <Route
              exact
              path="/:searchString"
              render={props => (
                <Home
                  {...props}
                  recipes={this.receitas}
                  searchString={pSearchString}
                />
              )}
            />

            <Route
              exact
              path="/"
              render={props => (
                <Home {...props} recipes={this.receitas} searchString="" />
              )}
            />

            <Redirect from="*" to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
