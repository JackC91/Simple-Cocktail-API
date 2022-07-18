function CocktailIngredientThree({ cocktail }) {
    return cocktail.strIngredient3 != null && ( 
          <li>
            {cocktail.strMeasure3} {cocktail.strIngredient3}
          </li>
    );
  }
  
  export default CocktailIngredientThree;