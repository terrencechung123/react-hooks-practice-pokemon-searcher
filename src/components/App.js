import React, { useState, useEffect } from "react";
import PokemonPage from "./PokemonPage";

const url= 'http://localhost:3001/pokemon';





function App() {
  const [pokemonIndex ,setPokemonIndex] = useState([]);
  
  
  useEffect(()=>{
  fetch(url)
  .then(res=>res.json())
  .then(setPokemonIndex)
  },[]);
  
  
  
  console.log('pokemonIndex', {pokemonIndex});












  return (
    <div className="App">
      <PokemonPage pokemonIndex={pokemonIndex}/>
    </div>
  );
}

export default App;
