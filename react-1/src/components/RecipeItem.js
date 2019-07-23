import React from 'react'

const RecipeItem = (props) => {
   
    const tituloMark = props.title.split(",").map(titulo => {
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

      const ingredienteMark = props.ingredients.split(",").map((ingrediente,key) => {
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
      console.log('recipeitem',props)
    return(
    <div className="col-sm-3 mt-4">
        <div className="card">
            <img className="card-img-top img-fluid" src=  {props.thumbnail} alt="" />
            <div className="card-body">
                <h5 className="card-title" key={props.key}>{tituloMark}</h5>
                <p className="card-text">
                    <strong>Ingredients: </strong>{ingredienteMark}
                    <strong>RECIPE ITEM </strong>
                </p>
            </div>
        </div>
    </div>
    )
    }

export default RecipeItem;