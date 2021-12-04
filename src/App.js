import React, {useEffect, useState} from "react";
import Recipe from "./Recipe";
import './App.css';

const App = () => {
    const APP_ID = "a07598a7";
    const APP_KEY = "1df30a30400703ed493e29de20fa11a7";

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('chicken');

    useEffect(() => {
        getRecipes();
    }, [query]);

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        const data = await response.json();

        setRecipes(data.hits);
    }

    const updateSearch = e => {
        setSearch(e.target.value);
    }
    const getSearch = e =>{
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }
    return (
        <div className="App">
            <form onSubmit={getSearch} className="search-form">
                <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
                <button className="search-button" type="submit">
                    Search
                </button>
            </form>
            <div className="recipes">
                {recipes.map(recipes => (
                    <Recipe
                        key={recipes.recipe.label}
                        title={recipes.recipe.label}
                        calories={recipes.recipe.calories}
                        image={recipes.recipe.image}
                        ingredients={recipes.recipe.ingredients}
                        directions= {recipes.recipe.url}
                    />
                ))}
            </div>

        </div>
    )
}
export default App;
