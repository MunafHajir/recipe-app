import React from 'react'

function Recipe({title, calories, image, ingredients}) {
  return (
    <div>
        <h1>{title}</h1>
        <p>Calories: {calories}</p>
        {/* <ol>
          {ingredients.map(
            ingredient=>(
              
              <li>{ingredient}</li>
            )            
          )}
        </ol> */}
        <img src={image} alt=""/>
    </div>
  )
}

export default Recipe;