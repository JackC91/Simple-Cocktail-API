import CocktailIngredientOne from "./Ingredients/CocktailIngredientOne";
import CocktailIngredientTwo from "./Ingredients/CocktailIngredientTwo";
import CocktailIngredientThree from "./Ingredients/CocktailIngredientThree";
import CocktailIngredientFour from "./Ingredients/CocktailIngredientFour";
import CocktailIngredientFive from "./Ingredients/CocktailIngredientFive";
import CocktailIngredientSix from "./Ingredients/CocktailIngredientSix";
import CocktailIngredientSeven from "./Ingredients/CocktailIngredientSeven";
import CocktailIngredientEight from "./Ingredients/CocktailIngredientEight";
import CocktailIngredientNine from "./Ingredients/CocktailIngredientNine";
import CocktailIngredientTen from "./Ingredients/CocktailIngredientTen";
import CocktailIngredientEleven from "./Ingredients/CocktailIngredientEleven";
import CocktailIngredientTwelve from "./Ingredients/CocktailIngredientTwelve";
import CocktailIngredientThirteen from "./Ingredients/CocktailIngredientThirteen";
import CocktailIngredientFourteen from "./Ingredients/CocktailIngredientFourteen";
import CocktailIngredientFifteen from "./Ingredients/CocktailIngredientFifteen";

function IngredientList({cocktail}) {
    
    return (
        <div className="ingredients">
        <h4>Ingredients</h4>
        <ul>
            <CocktailIngredientOne cocktail={cocktail}/>
            <CocktailIngredientTwo cocktail={cocktail}/>
            <CocktailIngredientThree cocktail={cocktail}/>
            <CocktailIngredientFour cocktail={cocktail}/>
            <CocktailIngredientFive cocktail={cocktail}/>
            <CocktailIngredientSix cocktail={cocktail}/>
            <CocktailIngredientSeven cocktail={cocktail}/>
            <CocktailIngredientEight cocktail={cocktail}/>
            <CocktailIngredientNine cocktail={cocktail}/>
            <CocktailIngredientTen cocktail={cocktail}/>
            <CocktailIngredientEleven cocktail={cocktail}/>
            <CocktailIngredientTwelve cocktail={cocktail}/>
            <CocktailIngredientThirteen cocktail={cocktail}/>
            <CocktailIngredientFourteen cocktail={cocktail}/>
            <CocktailIngredientFifteen cocktail={cocktail}/>
        </ul>
        </div>
    )
}

export default IngredientList;