import React from "react";
import style from '../recipe.module.css';

export const Recipe = ({ title, image, ingredients, directions}) => {
    return (
        <div className={style.recipe}>
            <br/>
            <h1>{title}</h1>
            <ol>
                {ingredients.map((ingredients, i) => (
                    <li key={i}>{ingredients.text}</li>
                ))}
            </ol>

            <img className={style.image} src={image} alt=''/>
            <br/>
            <form method="get" action={directions} target='_blank'>
                <button type="submit">Recept op externe website</button>
            </form>
            <br/>

        </div>
    )
}


export default Recipe;