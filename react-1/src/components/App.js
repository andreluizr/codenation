import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import RecipePage from "./RecipePage";
import { slugify } from "../helpers";
import recipes from "../sample_data/recipes.json";

class App extends Component {
  render() {
    const receitas = recipes.results;

    return (
      <div className="App">
        {/* TODO: Navbar precisa receber a string da URL */}
        <Navbar searchString="" />
        )}/>
        <div className="container mt-10">
          {/* TODO: Implementar rotas  */}
          <Switch>
            <Route path="/recipe/:id" component={RecipePage} />
            <Route
              exact
              path="/:searchString"
              render={props => (
              <Home {...props} recipes={receitas} searchString="egg" />
              )}/> 

            <Route
              exact
              path="/"
              render={props => (
              <Home {...props} recipes={receitas} searchString="" />
              )}/>    
            <Redirect from='*' to='/'/>                      
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
