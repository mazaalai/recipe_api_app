import {Recipe} from "./Recipe";

export function RecipeList(props) {
    const {recipes} = props;

    return <>
        <div className="recipes">
            {recipes.map(recipes => (
                <Recipe
                    key={recipes.recipe.label}
                    title={recipes.recipe.label}
                    image={recipes.recipe.image}
                    ingredients={recipes.recipe.ingredients}
                    directions={recipes.recipe.url}
                />
            ))}
        </div>
    </>;
}