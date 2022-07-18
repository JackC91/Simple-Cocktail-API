import CocktailImage from "../CocktailImage/CocktailImage";
import IngredientList from "../CocktailIngredients/IngredientList";
import CocktailInstructions from "../CocktailInstructions/CocktailInstructions";
import CocktailTitle from "../CocktailTitle/CocktailTitle";


function CocktailCard({cocktail}) {
    console.log(cocktail)
    return (
        <div className="cocktail_card">
            <CocktailTitle cocktail={cocktail.strDrink}/>
            <CocktailImage cocktail={cocktail}/>
            <IngredientList cocktail={cocktail}/>
            <CocktailInstructions cocktail={cocktail}/>
        </div>
    )
}

export default CocktailCard;

/*
CocktailCard needs-
    -name X
    -image X
    -instructions X
    -ingredients
    -measures
    -glass
*/