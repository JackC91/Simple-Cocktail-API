function CocktailIngredientTwo({ cocktail }) {
    return cocktail.strIngredient2 != null && ( 
          <li>
            {cocktail.strMeasure2} {cocktail.strIngredient2}
          </li>
    );
  }
  
  export default CocktailIngredientTwo;