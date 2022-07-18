function CocktailIngredientEight({ cocktail }) {
    return cocktail.strIngredient8 != null && ( 
          <li>
            {cocktail.strMeasure8} {cocktail.strIngredient8}
          </li>
    );
  }
  
  export default CocktailIngredientEight;