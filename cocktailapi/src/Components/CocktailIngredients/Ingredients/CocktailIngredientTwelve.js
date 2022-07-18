function CocktailIngredientTwelve({ cocktail }) {
    return cocktail.strIngredient12 != null && ( 
          <li>
            {cocktail.strMeasure12} {cocktail.strIngredient12}
          </li>
    );
  }
  
  export default CocktailIngredientTwelve;