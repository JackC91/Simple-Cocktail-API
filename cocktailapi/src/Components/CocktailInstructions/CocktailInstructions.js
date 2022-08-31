function CocktailInstructions({cocktail}) {
    return (
        <div className="instructions">
        <h4 className="instructions_title">How to make a {cocktail.strDrink}</h4>
        <p className="instructions_text">
        {cocktail.strInstructions}</p>
        </div>
    )
}

export default CocktailInstructions;