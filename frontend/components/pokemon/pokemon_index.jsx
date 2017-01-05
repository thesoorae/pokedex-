import React from 'react';

class PokemonIndex extends React.Component {
  constructor(props){
    super(props);
    // this.state = { pokemon: []};

  }

  componentDidMount(){
    this.props.requestAllPokemon();

    // this.setState({pokemon: this.props.pokemon});
  }

  render(){
    const pokemon = this.props.pokemon;
    const PokemonItems = pokemon.map(poke => (
      <li key={poke.id}>{poke.name} <img src={poke.image_url} /></li>)
    );

    return(
      <ul>
        { PokemonItems }
      </ul>
    );
  }
}

export default PokemonIndex;
