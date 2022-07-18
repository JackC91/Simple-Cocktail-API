function CocktailIngredientFifteen({ cocktail }) {
    return cocktail.strIngredient15 != null && ( 
          <li>
            {cocktail.strMeasure15} {cocktail.strIngredient15}
          </li>
    );
  }
  
  export default CocktailIngredientFifteen;