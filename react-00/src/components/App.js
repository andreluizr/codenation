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

  render() {
    return (
      <div className="App">
        <Navbar addSearchString={this.addSearchString} />
        <div className="container mt-10">
          <div className="row">
            {this.recipes
              .filter(
                receita =>
                  receita.ingredients.search(
                    new RegExp(this.state.searchString, "i")
                  ) > -1 ||
                  //receita.ingredients.toLowerCase().includes(this.state.searchString.toLowerCase()) || Mesmo resultado - Deixei só por referencia
                  receita.title.search(
                    new RegExp(this.state.searchString, "i")
                  ) > -1 ||
                  this.state.searchString.length === 0
                //receita.title.toLowerCase().includes(this.state.searchString.toLowerCase())
              ) 
              .map(receita => (
                <RecipeItem
                  titulo={receita.title}
                    //titulo={receita.title.replace(new RegExp(this.state.searchString,'i'),'<mark><Text style={{textTransform: "capitalize"}}>' +this.state.searchString +'</text></mark>')}
                    //Não consegui deixar o texto trocado com o mesmo formato, precisa aprimorar
                  ingrediente={receita.ingredients.replace(new RegExp(this.state.searchString,'i'),'<mark>' +this.state.searchString.toLowerCase() +'</mark>')}
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
