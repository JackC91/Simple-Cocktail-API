function CocktailIngredientNine({ cocktail }) {
    return cocktail.strIngredient9 != null && ( 
          <li>
            {cocktail.strMeasure9} {cocktail.strIngredient9}
          </li>
    );
  }
  
  export default CocktailIngredientNine;