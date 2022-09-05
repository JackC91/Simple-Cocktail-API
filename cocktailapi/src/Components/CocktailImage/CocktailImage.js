function CocktailImage({cocktail}) {
    return (
        <div className="image" >
        <img 
        src={cocktail.strDrinkThumb} 
        alt={cocktail.strDrink}
        width={400}
        height={400}    
        />
        </div>
    )
}

export default CocktailImage