import {createContext, useEffect, useState} from "react";
import {RecipeList} from "../components/RecipeList";

export const RecipeContext = createContext({});

export function AllRecipesProvider(){

    const APP_ID = "a07598a7";
    const APP_KEY = "1df30a30400703ed493e29de20fa11a7";
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('Chicken');


    const [searchHistory, setSearchHistory] = useState([]);

    useEffect(() => {
        getRecipes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);

    useEffect(() => {
        const data = localStorage.getItem('my-history')
        if(data != null){
            setSearchHistory(JSON.parse(data))
        }else{
            setSearchHistory('geen');
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    useEffect(() => {
        localStorage.setItem("my-history", JSON.stringify(query));
    });




    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        const data = await response.json();

        setRecipes(data.hits);
    }

    const updateSearch = e => {
        setSearch(e.target.value);
    }
    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }
    return (
        <div className="App">
            <h1>Zoek je eten en krijg ingrediënten.</h1>
            <form onSubmit={getSearch} className="search-form">
                <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
                <button className="search-button" type="submit">
                    Search
                </button>
            </form>
            <p>*Zoek geschiedenis {searchHistory}</p>
            <RecipeList recipes={recipes}/>

        </div>
    )
}