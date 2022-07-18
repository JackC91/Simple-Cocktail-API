function CocktailIngredientSeven({ cocktail }) {
    return cocktail.strIngredient7 != null && ( 
          <li>
            {cocktail.strMeasure7} {cocktail.strIngredient7}
          </li>
    );
  }
  
  export default CocktailIngredientSeven;