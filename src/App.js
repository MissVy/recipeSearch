import React, {useEffect, useState} from "react"
import Recipe from "./Recipe"
import './recipes.css';

const App = () => {
  const APP_ID = '8739e7a3'
  const APP_KEY = 'c14ba18994cffc38cd5de107bf8fe91a'
  const [recipe, setRecipes] = useState([])
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState("")

  useEffect( () => {
    getRecipes()
  }, [query])

  const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      const data = await response.json()
      setRecipes(data.hits)
  }

  const updateSearch = evt => {
    setSearch(evt.target.value)

  }

  const getSearch = evt => {
    evt.preventDefault()
    setQuery(search)
    setSearch("")
  }

  return (
    <div className="app-recipe">
      <h1 className="center-aligned"> Hello React Recipe App </h1>
      <form className="search-form" onSubmit={getSearch}>
        <input
          placeholder="search"
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button  className="search-button" type="submit"> 🔎  </button>
      </form>



      <div style={{display: query? "block" : "none"}} className="recipe-output">
        {recipe.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            dishType={recipe.recipe.dishType}
            ingredients={recipe.recipe.ingredients}
            url={recipe.recipe.url}
            source={recipe.recipe.source}
          />
        ))}
      </div>
    </div>
  )
}

export default App
