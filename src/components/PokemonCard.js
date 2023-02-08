import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({sprites, name, hp, id}) {
  const [pokemonImage, setPokemonImage] = useState(true);
  console.log('hellooooooo',{sprites});

  function handlePokeClick(){
    //i want the picture to switch to the back of the card when i click
      setPokemonImage((currentPic) => !currentPic)
      const pokemonNewImage = pokemonImage ? <img src={sprites.front} alt="oh no!" /> : <img src={sprites.back} alt="oh no!" />
  }

  return (
    <Card>
      <div>
        <div className="image" onClick={handlePokeClick}>
          {pokemonNewImage}
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
