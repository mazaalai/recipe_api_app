import React from "react";
import {AllRecipesProvider, RecipeContext} from "./contexts/Context";
import './App.css';

const App = () => {

    return (
        <RecipeContext.Provider value={''}>
            <AllRecipesProvider />
        </RecipeContext.Provider>
    )
}
export default App;
