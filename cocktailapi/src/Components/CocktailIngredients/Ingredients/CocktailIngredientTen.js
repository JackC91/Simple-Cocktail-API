function CocktailIngredientTen({ cocktail }) {
    return cocktail.strIngredient10 != null && ( 
          <li>
            {cocktail.strMeasure10} {cocktail.strIngredient10}
          </li>
    );
  }
  
  export default CocktailIngredientTen;