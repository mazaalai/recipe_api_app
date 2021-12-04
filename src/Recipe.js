import React from "react";
import style from './recipe.module.css';

const Recipe = ({title, calories, image,ingredients, directions}) =>{
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredients => (
                    <li>{ingredients.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
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