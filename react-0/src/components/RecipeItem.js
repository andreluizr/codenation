import React from "react";

const RecipeItem = (props) => {

let texto = props.titulo.split('');

const tituloMark = texto.map(text => {if (text.toLowerCase() === props.searchString.toLowerCase()) { return <mark> +text </mark>} return text}) ;
console.log(tituloMark);
//((tituloMark,[chave,valor]) => (tituloMark = valor === props.searchString ? <mark> +Valor +</mark> : valor))}

//console.log(titulo);

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
          <h5 className="card-title">{tituloMark} </h5>
          <p className="card-text">
            <strong>Ingredients: </strong><div dangerouslySetInnerHTML={{ __html: props.ingrediente }} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecipeItem;
