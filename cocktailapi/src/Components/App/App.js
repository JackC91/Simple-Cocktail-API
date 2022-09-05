import './App.css';
import {useState, useEffect} from 'react';

import CocktailCard from '../CocktailCard/CocktailCard';
import NavBar from '../NavBar/NavBar';

function App() {
const [cocktail, setCocktail] = useState([]);

async function getRandomCocktail() {
  const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
  const data = await res.json();
  setCocktail(data.drinks[0])
  //console.log(cocktail)
}

//execute get request upon every page render, need function wrapping in handleclick for button
useEffect(() => {
  getRandomCocktail();
}, []);

  return (
    <div className="App">
    <NavBar getRandomCocktail={getRandomCocktail}/>
    <CocktailCard cocktail={cocktail}/>
    </div>
  );
}

export default App;
