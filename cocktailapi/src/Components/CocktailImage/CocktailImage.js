function CocktailImage({cocktail}) {
    return (
        <div className="image" >
        <img 
        src={cocktail.strDrinkThumb} 
        alt={cocktail.strDrink}
        width={300}
        height={300}    
        />
        </div>
    )
}

export default CocktailImage