import React,{useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';

function App() {

  const APP_ID = 'f1003a13';
  const APP_KEY = 'dd2557292dd9b60d1890ebc8844c167b';
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query ,setQuery] = useState("chicken");

  useEffect(()=>{
    getRecipes();
  },[query]);

  const getRecipes = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      
        const data = await response.json();

        setRecipes(data.hits);
        console.log(data.hits);

  }

  const updateSearch = e => {
    setSearch(e.target.value);
    // console.log(search);
    
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <form onSubmit = {getSearch} className='search-form'>
          <input type= 'text' className = "search-bar" value = {search} onChange = {updateSearch} />
          <button type="submit" className = "search-button" >Search</button>
        </form>
    {recipes.map( recipe => (
      <Recipe
       key = {recipe.recipe.label}
       title = {recipe.recipe.label}
       calories = {recipe.recipe.calories}
       image = {recipe.recipe.image}
       ingredients = {recipe.recipe.ingredients}
       />
    )
    )}
    </div>
    );
}

export default App;
