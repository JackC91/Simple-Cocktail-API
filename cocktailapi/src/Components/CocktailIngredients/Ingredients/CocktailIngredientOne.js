function CocktailIngredientOne({ cocktail }) {
  return cocktail.strIngredient1 != null && ( 
        <li>
          {cocktail.strMeasure1} {cocktail.strIngredient1}
        </li>
  );
}

export default CocktailIngredientOne;