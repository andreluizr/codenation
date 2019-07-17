import React from "react";

const RecipeItem = props => {
  const tituloMark = props.titulo;

  const ingredienteMark = props.ingrediente
    .split()
    .map(ingrediente =>
      ingrediente.toLowerCase().includes(props.searchString.toLowerCase()) ? (
        <mark>{ingrediente}</mark>
      ) : (
        { ingrediente }
      )
    );

  //props.ingrediente.split(this).map(ingrediente => (<mark>{ingrediente}</mark>));

  console.log({ ingredienteMark });

  return (
    <div className="col-sm-3 mt-4">
      <div className="card">
        <img
          className="card-img-top img-fluid"
          src={props.imagem} //"https://via.placeholder.com/350x300"
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
