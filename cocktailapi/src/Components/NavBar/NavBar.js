import { useState } from "react";

function NavBar({getRandomCocktail, searchCocktailByName}) {
    const [text, setText] = useState("");

    function captureUserInput(e) {
      setText(e.target.value);
    }

    return (
        <div className="navbar">
        <input 
            type="text" 
            placeholder="Search for a Cocktail" 
            className="textbox"
            onChange={captureUserInput}
            />
        <button className="search_button"
        onClick={() => searchCocktailByName(text)}
        >Search</button>
        <button className="random_button" onClick={getRandomCocktail}>Randomize</button>
        </div>
    )
}

export default NavBar