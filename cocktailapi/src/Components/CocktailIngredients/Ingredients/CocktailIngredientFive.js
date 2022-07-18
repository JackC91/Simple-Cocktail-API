function CocktailIngredientFive({ cocktail }) {
    return cocktail.strIngredient5 != null && ( 
          <li>
            {cocktail.strMeasure5} {cocktail.strIngredient5}
          </li>
    );
  }
  
  export default CocktailIngredientFive;