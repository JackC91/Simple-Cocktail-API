import { useState } from "react";

function NavBar({getRandomCocktail}) {
    const [text, setText] = useState("");

    function captureUserInput(e) {
      setText(e.target.value);
    }

    // async function searchCocktailByName(cocktail) {
    //     const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`);
    //     await response.json()
    // }

    return (
        <div className="navbar">
        <input 
            type="text" 
            placeholder="Search for a Cocktail" 
            className="textbox"
            onChange={captureUserInput}
            />
        <button className="search_button"
        onClick={() => console.log(text)}
        >Search</button>
        <button className="random_button" onClick={getRandomCocktail}>Randomize</button>
        </div>
    )
}

export default NavBar