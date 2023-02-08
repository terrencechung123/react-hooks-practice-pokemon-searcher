import React from "react";
import { Form } from "semantic-ui-react";



function PokemonForm({pokemonIndex, onSubmit, newPokemonCard}) {
  // function handleSubmit(e){
  //   console.log('WOAH', e.target.name.value);
  // }
  
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(e);
          // console.log(e.target);
          console.log("submitting form...");
        }}
      >
        <Form.Group widths="equal">
          <Form.Input 
            fluid label="Name"
            placeholder="Name"
            name="name"
            value={n}
            onChange={onSubmit}
            />
          <Form.Input 
            fluid label="hp"
            placeholder="hp"
            name="hp"
            value={hp}
            onChange={onSubmit}
            />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={frontUrl}
            onChange={onSubmit}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={}
            onChange={onSubmit}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
