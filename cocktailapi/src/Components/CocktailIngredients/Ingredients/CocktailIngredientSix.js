function CocktailIngredientSix({ cocktail }) {
    return cocktail.strIngredient6 != null && ( 
          <li>
            {cocktail.strMeasure6} {cocktail.strIngredient6}
          </li>
    );
  }
  
  export default CocktailIngredientSix;