import { useState, useEffect } from 'react';
import './App.css';
import Recipe from './Recipe';

function App() {

  const APP_ID = "78633fb1";
  const APP_KEY = "8dd7b528066fae7e1b83148db49f5f38";

  const [recipes, setResipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("banana");

  const updateSearch = (e) => {
    setSearch(e.target.value);
  }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`);
    console.log(response);
    const data = await response.json();
    setResipes(data.hits);
    console.log("data", data);
    // console.log("data-hits", data.hits)
  }

  return (
    <>
      <div className='App'>
        <form className='search-form' onSubmit={getSearch}>
          <input className='search-bar' type="text" value={search} onChange={updateSearch} placeholder="Enter food to search" />
          <button className='search-button'
            type="submit">Search
          </button>
        </form>
        <div className='container'>
          {
            recipes.map(recipe => (
              <Recipe
                key={recipe.recipe.label}
                title={recipe.recipe.label}
                calories={recipe.recipe.calories}
                image={recipe.recipe.image}
              />
            ))
          }
        </div>
      </div>

    </>
  );
}

export default App;
