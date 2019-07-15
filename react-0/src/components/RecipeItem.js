import React from "react";

const RecipeItem = (props) => {

let texto = props.titulo.split(''); 
console.log('SEARCH STRING: ',props.searchString);

  return (
    
    <div className="col-sm-3 mt-4">
      <div className="card">
        <img
          className="card-img-top img-fluid"
          src= {props.imagem} //"https://via.placeholder.com/350x300"
          alt=""
        />

        <div className="card-body">
          <h5 className="card-title"> {texto.map = (text,index) => (text === props.searchString ? <mark> +text +</mark> : text )}</h5>
          <p className="card-text">
            <strong>Ingredients: </strong><div dangerouslySetInnerHTML={{ __html: props.ingrediente }} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecipeItem;
