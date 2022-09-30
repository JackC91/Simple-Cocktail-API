import './App.css';
import {useState, useEffect} from 'react';

import CocktailCard from '../CocktailCard/CocktailCard';
import NavBar from '../NavBar/NavBar';
import ScrollButton from '../ScrollButton/ScrollButton';

function App() {
const [cocktail, setCocktail] = useState([]);

async function getRandomCocktail() {
  const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
  const data = await res.json();
  setCocktail(data.drinks)
}

//execute get request upon every page render, need function wrapping in handleclick for button
useEffect(() => {
  getRandomCocktail();
}, []);

    async function searchCocktailByName(text) {
        const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}`);
        const data = await res.json();
        setCocktail(data.drinks)
    }
    console.log(cocktail)
  return (
    <div className="App">
    <NavBar getRandomCocktail={getRandomCocktail} searchCocktailByName={searchCocktailByName}/> 
     <h1 className="title">Cocktails For You</h1>
     {cocktail.map((drink, index) =>
     <CocktailCard key={index} cocktail={drink}/>
     )}
        <ScrollButton/>
    </div>
  );
}

export default App;
