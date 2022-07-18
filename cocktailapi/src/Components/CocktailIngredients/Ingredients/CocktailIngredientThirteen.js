function CocktailIngredientThirteen({ cocktail }) {
    return cocktail.strIngredient13 != null && ( 
          <li>
            {cocktail.strMeasure13} {cocktail.strIngredient13}
          </li>
    );
  }
  
  export default CocktailIngredientThirteen;