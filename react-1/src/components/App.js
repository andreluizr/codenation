import React, { Component } from "react";
import { Route, Redirect, Switch,withRouter } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import RecipePage from "./RecipePage";
import recipes from "../sample_data/recipes.json";

class App extends Component {
  constructor(props) {
    super(props);

    this.recipes = recipes.results;
  }
  
  getNavbarString = (e) => (
    this.props.history.push("/" + e.target.value));

    
  setNavbarString = () =>('');


  render() {
    const receitas = recipes.results;
    const pSearchString = (this.props.location.pathname.substring(1));
    
    console.log('APP SEARCH: ',pSearchString);
    console.log('APP PROPS: ',this.props);

    
    
    return (
      <div className="App">
        {/* TODO: Navbar precisa receber a string da URL */}
        <Navbar searchString={pSearchString} 
                getNavbarString={this.getNavbarString}/>
        )}/>
        <div className="container mt-10">
          {/* TODO: Implementar rotas  */}
          <Switch>
            <Route exact path="/recipe/:id" component={RecipePage} />
            <Route
              exact
              path="/:searchString"
              render={props => (
              <Home {...props} recipes={receitas} searchString={pSearchString} />
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

export default withRouter(App);
