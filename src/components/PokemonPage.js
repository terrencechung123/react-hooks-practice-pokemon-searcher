import React, { useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";
import PokemonCard from "./PokemonCard";

function PokemonPage({pokemonIndex}) {

  const [searchQuery, setSearchQuery] = useState("");
  const [newPokemonCard, setNewPokemonCard] = useState([]);


  const afterSearch = pokemonIndex.filter((pokemon)=>pokemon.name.toLowerCase().includes(searchQuery.toLowerCase()))
  console.log('afterSearch', afterSearch);

  const addPokemon = (whatever) => setNewPokemonCard([...pokemonIndex, whatever]);
  console.log('newPokemonCard', newPokemonCard);

  function handleSubmit(e){
    console.log('WOAH', e.target);
    const newPokemon = {
      id: "",
      name : e.target.name.value,
      hp : Number([e.target.hp.value]),
      sprites : {
                  back : e.target.backUrl.value, 
                  front: e.target.frontUrl.value,
                }
      }
    e.target.reset()
    console.log('newPokemon', newPokemon);
    return addPokemon(newPokemon);
    //Im Going To Have To Add newPokemon To The End Of My Array. What Is My Array Variable That
    //Is Being Used To Render My Pokemon List? It Is Pokemon Index, How Do I Add It?
  }


  const pokemonArray = afterSearch.map((pokemon)=> <PokemonCard key={pokemon.id} {...pokemon} newPokemonCard={newPokemonCard}/>);
  

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm 
          pokemonIndex={pokemonIndex}
          onSubmit={handleSubmit}
          newPokemonCard = { newPokemonCard }
        />
      <br />
      <Search
        pokemonIndex={pokemonIndex}
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery} />
      <br />
      <PokemonCollection
        pokemonIndex={pokemonArray}
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
        onSubmit={handleSubmit}
        newPokemonCard={newPokemonCard}

        />
    </Container>
  );
}

export default PokemonPage;
