import React from "react";

const RecipeItem = props => {
  
  const tituloMark = props.titulo.split(",").map(titulo => {
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

  const ingredienteMark = props.ingrediente.split(",").map((ingrediente,key) => {
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

  return (
    <div className="col-sm-3 mt-4">
      <div className="card">
        <img
          className="card-img-top img-fluid"
          src={props.imagem} 
          alt=""
        />

        <div className="card-body">
          <h5 className="card-title">{tituloMark} </h5>
          <p className="card-text">
            <strong>Ingredients: </strong>
            {ingredienteMark}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecipeItem;
