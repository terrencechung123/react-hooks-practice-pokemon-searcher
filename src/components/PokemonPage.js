import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage({pokemonIndex}) {
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm 
          pokemonIndex={pokemonIndex}
        />
      <br />
      <Search />
      <br />
      <PokemonCollection
        pokemonIndex={pokemonIndex}
        />
    </Container>
  );
}

export default PokemonPage;
