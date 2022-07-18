function CocktailIngredientFour({ cocktail }) {
    return cocktail.strIngredient4 != null && ( 
          <li>
            {cocktail.strMeasure4} {cocktail.strIngredient4}
          </li>
    );
  }
  
  export default CocktailIngredientFour;