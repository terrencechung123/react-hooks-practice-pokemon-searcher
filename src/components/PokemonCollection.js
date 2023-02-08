import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemonIndex}) {
  const pokemonArray = pokemonIndex.map((pokemon)=> <PokemonCard {...pokemon}/>);
  
  console.log('what it do', pokemonIndex);
  
  return (
    <Card.Group itemsPerRow={6}>
      {pokemonArray}
    </Card.Group>
  );
}

export default PokemonCollection;
