function CocktailIngredientFourteen({ cocktail }) {
    return cocktail.strIngredient14 != null && ( 
          <li>
            {cocktail.strMeasure14} {cocktail.strIngredient14}
          </li>
    );
  }
  
  export default CocktailIngredientFourteen;