import React, { Component } from "react";
import Navbar from "./Navbar";
import RecipeItem from "./RecipeItem";
import recipes from "../sample_data/recipes.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.recipes = recipes.results;
    this.state = { searchString: "" };
  }

  addSearchString = props => {
    this.setState({ searchString: props });
  };

  receitasFiltradas = props => {
    return props.filter(
      receita =>
        receita.ingredients.search(new RegExp(this.state.searchString, "i")) >
          -1 ||
        receita.title.search(new RegExp(this.state.searchString, "i")) > -1 ||
        this.state.searchString.length === 0
    );
  };

  render() {
    return (
      <div className="App">
        <Navbar addSearchString={this.addSearchString} />
        <div className="container mt-10">
          <div className="row">
            {this.receitasFiltradas(this.recipes).map((receita,index) => (
              <RecipeItem
                key={index}
                titulo={receita.title}
                ingrediente={receita.ingredients}
                imagem={receita.thumbnail}
                searchString={this.state.searchString}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
