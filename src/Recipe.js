import React, {useEffect, useState} from "react"

const Recipe = ({title, image, dishType, ingredients , url, source}) => {
  var count = ingredients.length
  return (
    <div className="recipe-item">
        <img src={image} alt="" />
          <div className="wrap">
            <h4> {title} </h4>
            <p>   <a href={url} > {source}  </a> </p>
            <p> Dish Type: {dishType}</p>
            <p> <b> {count} </b> Ingredients </p>

          </div>

          <div className="ingredients">
          <span className="review-ingredients"> 🧾see ingredients </span>
            <div className="card">
              <div className="card-header">
                <span className="icon">🧾 </span>
                <h5>  {title} Ingredients </h5>

              </div> {ingredients.map(ingredients => (
                <li> {ingredients.text} </li>
              ))}
            </div>
          </div>
        </div>
  )
}
export default Recipe
