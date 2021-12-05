import React , {useContext}from "react";
import {RecipeContext} from "../contexts/Context";
import style from '../recipe.module.css';

const Recipe = ({key, title, image,ingredients, directions}) =>{
    const value = useContext(RecipeContext)
    return(
        <div className={style.recipe}>
            <br/>
            <p>search result for {value}</p>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredients => (
                    <li>{ingredients.text}</li>
                ))}
            </ol>

            <img className={style.image} src={image} alt="Image"/>
            <br/>
            <form method="get" action={directions} target='_blank'>
                <button type="submit">Recept op externe website</button>
            </form>
            <br/>
        </div>
    )
}


export default Recipe;