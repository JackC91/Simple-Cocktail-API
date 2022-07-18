function CocktailIngredientEleven({ cocktail }) {
    return cocktail.strIngredient11 != null && ( 
          <li>
            {cocktail.strMeasure11} {cocktail.strIngredient11}
          </li>
    );
  }
  
  export default CocktailIngredientEleven;