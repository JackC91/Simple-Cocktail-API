function CocktailImage({cocktail}) {
    return (
        <div className="image_div" >
        <img className="image"
        src={cocktail.strDrinkThumb} 
        alt={cocktail.strDrink} 
        />
        </div>
    )
}

export default CocktailImage