import React from "react";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemonIndex, onSubmit, newPokemonCard}) {
// console.log('NEWPOKEMONBaBY', newPokemonCard);
  
  return (
    <Card.Group itemsPerRow={6}>
      if(newPokemonCard === true){
        {newPokemonCard}
      } else {
      {pokemonIndex}
}
    </Card.Group>
  );
}

export default PokemonCollection;
