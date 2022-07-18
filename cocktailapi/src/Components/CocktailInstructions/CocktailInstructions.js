function CocktailInstructions({cocktail}) {
    return (
        <div className="instructions">
        <p className="instructions_title">How to make a {cocktail.strDrink}</p>
        <p className="instructions_text">
        {cocktail.strInstructions}</p>
        </div>
    )
}

export default CocktailInstructions;